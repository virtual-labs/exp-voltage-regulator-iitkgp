/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Calculate the current through the zener diode with a load resistance of 1k&#937;:<br/><p style=\"text-align:center\"><img src=\"image/zenerq1.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "12.5 mA ", "correct": false},
                {"option": " 15.5 mA", "correct": false},
                {"option": " 13.8 mA ", "correct": false},
                {"option": " 14.7 mA", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Calculate the current through the zener diode with a load resistance of 910&#937;:<br/><p style=\"text-align:center\"><img src=\"image/zenerq2.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": " 14.2 mA ", "correct":true},
                {"option": "  12.4 mA ", "correct": false},
                {"option": " 13.8 mA  ", "correct": false},
                {"option": "  15.2 mA ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Calculate the current through the zener diode with a load resistance of 680&#937;:<br/><p style=\"text-align:center\"><img src=\"image/zenerq3.png \" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "11.6 mA", "correct": false},
                {"option": "  12.8 mA ", "correct": false},
                {"option": "12.3 mA ", "correct": true},
                {"option": "  13.5 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "Calculate the current through the zener diode with a load resistance of 330&#937;:<br/><p style=\"text-align:center\"><img src=\"image/zenerq4.png \" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "4.25 mA ", "correct": false},
                {"option": " 3.35 mA  ", "correct":false},
                {"option": "4.35 mA ", "correct": true},
                {"option": " 4.45 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};