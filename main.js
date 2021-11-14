function add_user(){
    player1=document.getElementById("player1").value;
    player2=document.getElementById("player2").value;

    localStorage.setItem("p1",player1);
    localStorage.setItem("p2",player2);

    window.location.replace("quiz_game.html")

}