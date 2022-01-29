function login() {
    player1_name = document.getElementById("login_player1_input").value;
    player2_name = document.getElementById("login_player2_input").value;
    localStorage.setItem("Player1's Name", player1_name);
    localStorage.setItem("Player2's Name", player2_name);
    window.location = "game_page.html";
} 