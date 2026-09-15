<?php
include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $video_id = isset($_GET['video_id']) ? $_GET['video_id'] : '';
    if (empty($video_id)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "video_id is required"]);
        exit();
    }

    try {
        // Fetch comments joined with users details to get dynamic avatar and names
        $select_comments = $conn->prepare("
            SELECT c.*, u.name as user_name, u.image as user_image 
            FROM `comments` c 
            LEFT JOIN `users` u ON c.user_id = u.id 
            WHERE c.content_id = ? 
            ORDER BY c.date DESC
        ");
        $select_comments->execute([$video_id]);
        $comments = $select_comments->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "comments" => $comments
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Database query failed: " . $e->getMessage()]);
    }
} elseif ($method === 'POST') {
    // Add comment
    $data = json_decode(file_get_contents("php://input"), true);
    
    $user_id = isset($data['user_id']) ? $data['user_id'] : '';
    $video_id = isset($data['video_id']) ? $data['video_id'] : '';
    $tutor_id = isset($data['tutor_id']) ? $data['tutor_id'] : '';
    $comment_text = isset($data['comment']) ? $data['comment'] : '';

    if (empty($user_id) || empty($video_id) || empty($comment_text)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "user_id, video_id and comment text are required"]);
        exit();
    }

    try {
        $id = unique_id();
        $insert_comment = $conn->prepare("INSERT INTO `comments` (id, content_id, user_id, tutor_id, comment, date) VALUES (?, ?, ?, ?, ?, current_timestamp())");
        $insert_comment->execute([$id, $video_id, $user_id, $tutor_id, $comment_text]);

        echo json_encode([
            "status" => "success",
            "message" => "Comment added successfully",
            "comment" => [
                "id" => $id,
                "content_id" => $video_id,
                "user_id" => $user_id,
                "tutor_id" => $tutor_id,
                "comment" => $comment_text,
                "date" => date('Y-m-d')
            ]
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to add comment: " . $e->getMessage()]);
    }
} elseif ($method === 'DELETE') {
    // Delete comment
    $comment_id = isset($_GET['comment_id']) ? $_GET['comment_id'] : '';
    $user_id = isset($_GET['user_id']) ? $_GET['user_id'] : '';

    if (empty($comment_id) || empty($user_id)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "comment_id and user_id are required"]);
        exit();
    }

    try {
        // Delete comment verifying user ownership
        $delete_comment = $conn->prepare("DELETE FROM `comments` WHERE id = ? AND user_id = ?");
        $delete_comment->execute([$comment_id, $user_id]);

        if ($delete_comment->rowCount() > 0) {
            echo json_encode(["status" => "success", "message" => "Comment deleted successfully"]);
        } else {
            http_response_code(404);
            echo json_encode(["status" => "error", "message" => "Comment not found or not owned by user"]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to delete comment: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
