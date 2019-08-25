// Starts Quiz
$("#start").on("click", function(){
    // Calls start function to append question and choices
    game.start();
})

// Looks for done button to be clicked and ends game
$(document).on("click", "#end", function(){
    game.done();
})

$(document).on("click", "#try", function(){
    clearInterval(timer);
    $("#subwrapper").empty();
    game.start();
})

// Array of questions with choices and answer key
var questions = [{

question: "What was the name of the Pygmy Puff Ginny bought from Weaslys' Wizard Wheezes?",
answers: [" Craig ", " Barry ", " Arnold ", " Hugo "],
correctAnswer: " Arnold "
}, 

{question: "What was the codename Fred was mistakenly called on Potterwatch?",
answers: [" Rodent ", " Rabbit ", " Rapier ", " Rattlesnake "],
correctAnswer: " Rodent "
}, 

{question: "To what house was Harry Potter sorted?",
answers: [" Ravenclaw ", " Gryffindor ", " Slytherin ", " Hufflepuff "],
correctAnswer: " Gryffindor "
},

{question: "What is Lord Voldemort's real name?",
answers: [" Tom Marvolo Riddle ", " Tom Marvilo Riddle ", " Tom Marvin Riddle ", " Tom Ravolo Riddle "],
correctAnswer: " Tom Marvolo Riddle "
},

{question: "According to the Dursleys, how did Harry's parents die?",
answers: [" In a plane crash ", " In a train crash ", " In a bus crash ", " In a car crash "],
correctAnswer: " In a car crash "
},

{question: "What is the symbol for the Ravenclaw house?",
answers: [" Raven ", " Crow ", " Eagle ", " Hawk "],
correctAnswer: " Raven "
},

{question: "What is the name of Hagrid's three headed dog?",
answers: [" Fang ", " Fuzzy ", " Fluffy ", " Sloppy "],
correctAnswer: " Fluffy "
},

{question: "What road does Harry Potter live on?",
answers: [" 4 Privet Drive ", " Privet Street ", " Private Road ", " Pine Street "],
correctAnswer: " 4 Privet Drive "
},

{question: "What core does Harry Potter's wand have?",
answers: [" Dragon Heartstring ", " Unicorn Hair ", " Phoenix Feather ", " Thestral Tail Hair "],
correctAnswer: " Phoenix Feather "
},

{question: "What broom did Harry receive at the end of the third movie?",
answers: [" Nimbus 2001 ", " Firebolt ", " Lightningbolt ", " Nimbus 2000 "],
correctAnswer: " Firebolt "
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0){
            console.log(" Time is up! ");
            game.done();
        }
    },

    start: function(){
        timer = setInterval (game.countdown, 1000);
        // Appends timer to page 
        $("#subwrapper").prepend(" <h3> Time Remaining: <span id = 'counter'> 120 </span> Seconds </h3> ");
        // Removes start button
        $("#start").remove();
        // Appends questions and choices to the page
        for (var i = 0; i < questions.length; i++){
            $("#subwrapper").append(" <h3> " + questions[i].question + " </h3> ");
            for (var j = 0; j < questions[i].answers.length; j++){
                $("#subwrapper").append("<input type = 'radio' name = 'question-" + i + "'value = '" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $("#subwrapper").append(" <br> <br> <button id = 'end'type = 'button' class = 'btn btn-dark'> DONE! </button>")
    },

    // Checks if each question was correct or incorrect
    done: function(){

        $.each($(" input[name = 'question-0'] :checked"), function(){
            if($(this).val() == questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-1'] :checked"), function(){
            if($(this).val() == questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-2'] :checked"), function(){
            if($(this).val() == questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-3'] :checked"), function(){
            if($(this).val() == questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-4'] :checked"), function(){
            if($(this).val() == questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-5'] :checked"), function(){
            if($(this).val() == questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-6'] :checked"), function(){
            if($(this).val() == questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-7'] :checked"), function(){
            if($(this).val() == questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-8'] :checked"), function(){
            if($(this).val() == questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($(" input[name = 'question-9'] :checked"), function(){
            if($(this).val() == questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        // Calls result function
        this.result();
    },

    // Clears current page state and appends results to page
    result: function(){
        clearInterval(timer);
        $("#subwrapper h3").remove();
        $("#subwrapper").html("<h3> All done! </h3>");
        $("#subwrapper").append("<h4> Correct Answers: " + this.correct);
        $("#subwrapper").append("<h4> Incorrect Answers: " + this.incorrect);
        $("#subwrapper").append("<h4> Unanswered: " + (questions.length - (this.correct + this.correct)) + "</h4");
        $("#subwrapper").append(" <br> <br> <button id = 'try' type = 'button' class = 'btn btn-dark'> Try Again! </button>")
    },
}