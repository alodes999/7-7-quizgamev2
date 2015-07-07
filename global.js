// Here we set our global variables, and question objects.
var correctcount = 0, questioncount = 0;
var question1 = {question:"How many Heisman Trophy winners has the Nebraska Football Program had?", choices:"(1)- 2, (2)- 3, (3)- 4, (4)- 7", answer: 2};
var question2 = {question:"How many National Championships has the Nebraska Football Program won?", choices:"(1)- 3, (2)- 4, (3)- 5, (4)- 6", answer: 3};
var question3 = {question:"Which Adidas school changed to use Nike Apparel on 7-6-2015?", choices:"(1)- Nebraska, (2)- Notre Dame, (3)- Texas A&M, (4)- Michigan", answer: 4};
var question4 = {question:"Which school did NOT appear in the 2014 College Football Playoff?", choices:"(1)- Alabama, (2)- Ohio State, (3)- TCU, (4)- Oregon", answer: 3};
var question5 = {question:"What year did the Big 10 approve Nebraska to join its ranks?", choices:"(1)- 2010, (2)- 2011, (3)- 2012, (4)- 2013", answer: 1};
// Here is our questionarray, full of our question objects
var questionarray = [question1, question2, question3, question4, question5];
// These two statements fill our HTML divs with the question and choices from our objects, chosen by the questioncount variable count.
document.getElementById("question").innerHTML = questionarray[questioncount].question;
document.getElementById("choices").innerHTML = questionarray[questioncount].choices;
// This function gets the entered value from the input box in the HTML document
// 
// This accepts no arguments
// 
// This returns the String of the value entered in our input box
function given_answer() {
  var enteredanswer = document.getElementById('answer').value;
  return enteredanswer;
}
// This function takes a value, Parses it into an integer, and tests to see if it is the same vale 
// as the answer attribute of the current question object
// 
// This accepts one argument, a String of text
// 
// This returns a Boolean
function is_correct_answer(answer_text) {
  var checkanswer = parseInt(answer_text, 10);
  return checkanswer === questionarray[questioncount].answer;
}
// This function sets our question_result div in our HTML, based on the Boolean value passed it.
// 
// This accepts one argument, a Boolean value
// 
// This doesn't explicitly return anything (I believe it says undefined in our console)
function update_question_result(correct) {
  if (correct === true) {
    document.getElementById("question_result").innerHTML = "Correct!";
    correctcount++;
  } else {
    document.getElementById("question_result").innerHTML = "Incorrect!";
  }
}
// This function combines our above functions, encapsulating them in one place for our Event Handler
// for our submitter button div to process
function process_answer_submission() {
  var useranswer = given_answer();
  update_question_result(is_correct_answer(useranswer));
}
// This function increments our questioncount variable, allowing us to cycle through our questionarray.
// It then sets our divs empty for the next question, as long as there are questions left in the array
// Once there are no more questions, it sets the values empty and adds the final text to the total_result
// div. 
// 
// This accepts no arguments
// 
// This returns nothing
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
// This is our onclick event handler for the submit button, executing the method process_answer_submission
document.getElementById("submitter").onclick = process_answer_submission;
// This is our onclick event handler for the next question button, executing the method 
// clear_for_next_question
document.getElementById("next").onclick = clear_for_next_question;