var question1 = {question:"How many Heisman Trophy winners has the Nebraska Football Program had?", choices:"(1)- 2, (2)- 3, (3)- 4, (4)- 7", answer: 2};
var question2 = {question:"How many National Championships has the Nebraska Football Program won?", choices:"(1)- 3, (2)- 4, (3)- 5, (4)- 6", answer: 3};
var question3 = {question:"Which Adidas school changed to use Nike Apparel on 7-6-2015?", choices:"(1)- Nebraska, (2)- Notre Dame, (3)- Texas A&M, (4)- Michigan", answer: 4};
var question4 = {question:"Which school did NOT appear in the 2014 College Football Playoff?", choices:"(1)- Alabama, (2)- Ohio State, (3)- TCU, (4)- Oregon", answer: 3};
var question5 = {question:"What year did the Big 10 approve Nebraska to join its ranks?", choices:"(1)- 2010, (2)- 2011, (3)- 2012, (4)- 2013", answer: 1};

var questionarray = [question1, question2, question3, question4, question5];

document.getElementById("question").innerHTML = questionarray[0].question;
document.getElementById("choices").innerHTML = questionarray[0].choices;

