$(document).ready(function() {

var timeleft = Number($("#countdowntimer").text());
$("#playeranswer").prop("disabled", true);
    var mathQn = function() {
      var a = Math.floor((Math.random() * 10) + 1);
      var b = Math.floor((Math.random() * 10) + 1);
      document.getElementById("num1").innerHTML = a;
      document.getElementById("num2").innerHTML = b;
    };

    var answCheck = function(pAnswer) {

      var playerScore = Number($("#pScore").text());
      var pAnswer = Number($("#playeranswer").val());
      var mathAnswer = Number($("#num1").text())+Number($("#num2").text());
        if (pAnswer === mathAnswer) {
          playerScore++;
          timeleft++;
          $("#countdowntimer").text(timeleft);
          $("#pScore").text(playerScore)
          $("#playeranswer").val('');
          mathQn();
      }
    };

    var timercountdown = function() {
      $("img").replaceWith('<img src="cartoon-bomb.jpg" id="lit-bomb" width="517" height="517">')

      var countdown = setInterval(function(){
        timeleft--;
        $("#countdowntimer").text(timeleft);

        if (timeleft < 0) {
          $("img").replaceWith('<img src="cartoon-explosion.jpg" id="explosion" width="650" height="422">');

          var playerScore = Number($("#pScore").text())
          var highestScore = Number($("#hScore").text());
            if (highestScore < playerScore) {
              $("#hScore").text(playerScore);

            };
          clearInterval(countdown);
          $("#countdowntimer").text(10);
          timeleft = 10;
	  $("#playeranswer").prop("disabled", true);
        }
      },1000);
    };

    $("#playeranswer").on("keyup", function(){
      answCheck();
    });

    $("#reset").on("click", function() {
      $("#pScore").text(0);
      $("#hScore").text(0);
    });

    var gamestart = function() {
      $("#playeranswer").prop("disabled", false);
      $("#pScore").text(0);
      mathQn();
      timercountdown();
    };

  $("#start").on("click", function(){
    gamestart();
  });

  $("#reset").on("click", function(){
    var playerScore = 0;
    var highestScore = 0;
  });

});
