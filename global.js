var correctcount = 0, questioncount = 0;
var question1 = {question:"How many Heisman Trophy winners has the Nebraska Football Program had?", choices:"(1)- 2, (2)- 3, (3)- 4, (4)- 7", answer: 2};
var question2 = {question:"How many National Championships has the Nebraska Football Program won?", choices:"(1)- 3, (2)- 4, (3)- 5, (4)- 6", answer: 3};
var question3 = {question:"Which Adidas school changed to use Nike Apparel on 7-6-2015?", choices:"(1)- Nebraska, (2)- Notre Dame, (3)- Texas A&M, (4)- Michigan", answer: 4};
var question4 = {question:"Which school did NOT appear in the 2014 College Football Playoff?", choices:"(1)- Alabama, (2)- Ohio State, (3)- TCU, (4)- Oregon", answer: 3};
var question5 = {question:"What year did the Big 10 approve Nebraska to join its ranks?", choices:"(1)- 2010, (2)- 2011, (3)- 2012, (4)- 2013", answer: 1};

var questionarray = [question1, question2, question3, question4, question5];

document.getElementById("question").innerHTML = questionarray[questioncount].question;
document.getElementById("choices").innerHTML = questionarray[questioncount].choices;

function given_answer() {
  var enteredanswer = document.getElementById('answer').value;
  return enteredanswer;
}

function is_correct_answer(answer_text) {
  var checkanswer = parseInt(answer_text, 10);
  return checkanswer === questionarray[questioncount].answer;
}

function update_question_result(correct) {
  if (correct === true) {
    document.getElementById("question_result").innerHTML = "Correct!";
    correctcount++;
  } else {
    document.getElementById("question_result").innerHTML = "Incorrect!";
  }
}

function process_answer_submission() {
  var useranswer = given_answer();
  update_question_result(is_correct_answer(useranswer));
}

function clear_for_next_question() {
  questioncount++;
  if (questioncount <= (questionarray.length - 1)) {
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("question_result").innerHTML = "";
    document.getElementById('answer').value = "";
    document.getElementById("question").innerHTML = questionarray[questioncount].question;
    document.getElementById("choices").innerHTML = questionarray[questioncount].choices;
  } else {
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("question_result").innerHTML = "";
    document.getElementById("total_result").innerHTML = "You got " + correctcount + " right, for a score of " + ((correctcount / questioncount) * 100) + "%!";
  }
}

document.getElementById("submitter").onclick = process_answer_submission;

document.getElementById("next").onclick = clear_for_next_question;