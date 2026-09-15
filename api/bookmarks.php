<?php
include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $user_id = isset($data['user_id']) ? $data['user_id'] : '';
    $playlist_id = isset($data['playlist_id']) ? $data['playlist_id'] : '';

    if (empty($user_id) || empty($playlist_id)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "user_id and playlist_id are required"]);
        exit();
    }

    try {
        // Check if bookmark exists
        $check_bookmarks = $conn->prepare("SELECT * FROM `bookmark` WHERE user_id = ? AND playlist_id = ?");
        $check_bookmarks->execute([$user_id, $playlist_id]);

        if ($check_bookmarks->rowCount() > 0) {
            // Un-bookmark
            $unbookmark = $conn->prepare("DELETE FROM `bookmark` WHERE user_id = ? AND playlist_id = ?");
            $unbookmark->execute([$user_id, $playlist_id]);
            $bookmarked = false;
            $msg = "Bookmark removed";
        } else {
            // Bookmark
            $bookmark = $conn->prepare("INSERT INTO `bookmark` (user_id, playlist_id) VALUES (?, ?)");
            $bookmark->execute([$user_id, $playlist_id]);
            $bookmarked = true;
            $msg = "Playlist bookmarked";
        }

        echo json_encode([
            "status" => "success",
            "message" => $msg,
            "bookmarked" => $bookmarked
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Bookmark operation failed: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
