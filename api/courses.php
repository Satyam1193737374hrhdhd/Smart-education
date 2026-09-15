<?php
include 'connect.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    try {
        // Fetch playlists
        $select_playlists = $conn->prepare("SELECT * FROM `playlist` WHERE status = ? ORDER BY date DESC");
        $select_playlists->execute(['active']);
        $playlists = $select_playlists->fetchAll(PDO::FETCH_ASSOC);

        // Fetch videos
        $select_contents = $conn->prepare("SELECT * FROM `content` WHERE status = ? ORDER BY date DESC");
        $select_contents->execute(['active']);
        $contents = $select_contents->fetchAll(PDO::FETCH_ASSOC);

        // Fetch tutors
        $select_tutors = $conn->prepare("SELECT id, name, profession, email, image FROM `tutors`");
        $select_tutors->execute();
        $tutors = $select_tutors->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            "status" => "success",
            "playlists" => $playlists,
            "contents" => $contents,
            "tutors" => $tutors
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to fetch courses: " . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
