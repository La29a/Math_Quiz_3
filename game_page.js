function send() {
    number1 = document.getElementById("number1input").value;
    number2 = document.getElementById("number2input").value;
    actualanswer = parseInt(number1) * parseInt(number2);
    question_number = "<h4 class='black'>" + number1 + "X" +number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='bun' onclick='check()'>Check</button";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1input").value = "";
    document.getElementById("number2input").value = "";
}