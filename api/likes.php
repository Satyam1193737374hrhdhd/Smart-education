<?php
include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $user_id = isset($data['user_id']) ? $data['user_id'] : '';
    $content_id = isset($data['content_id']) ? $data['content_id'] : '';
    $tutor_id = isset($data['tutor_id']) ? $data['tutor_id'] : '';

    if (empty($user_id) || empty($content_id)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "user_id and content_id are required"]);
        exit();
    }

    try {
        // Check if like exists
        $check_likes = $conn->prepare("SELECT * FROM `likes` WHERE user_id = ? AND content_id = ?");
        $check_likes->execute([$user_id, $content_id]);

        if ($check_likes->rowCount() > 0) {
            // Unlike
            $unlike = $conn->prepare("DELETE FROM `likes` WHERE user_id = ? AND content_id = ?");
            $unlike->execute([$user_id, $content_id]);
            $liked = false;
            $msg = "Like removed";
        } else {
            // Like
            $like = $conn->prepare("INSERT INTO `likes` (user_id, tutor_id, content_id) VALUES (?, ?, ?)");
            $like->execute([$user_id, $tutor_id, $content_id]);
            $liked = true;
            $msg = "Video liked";
        }

        // Get total likes for content
        $count_likes = $conn->prepare("SELECT * FROM `likes` WHERE content_id = ?");
        $count_likes->execute([$content_id]);
        $total_likes = $count_likes->rowCount();

        echo json_encode([
            "status" => "success",
            "message" => $msg,
            "liked" => $liked,
            "total_likes" => $total_likes
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Like operation failed: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
