const quizData=[
    {
        question:"c'est qui le presindent actuel de la RDC",
        a:'lumumba',
        b:'casavubu',
        c:'kabila',
        d:'tshitshi',
        correct:['d', 'tshitshi']
    }
    // {
    //     question:"c'est qui le presindent actuel du Rwanda",
    //     a:'Joseph',
    //     b:'casavubu',
    //     c:'Joel',
    //     d:'Paul',
    //     correct:['d', 'Paul']
    // },
    // {
    //     question:"c'est quoi le nom du roi de la foret",
    //     a:'lion',
    //     b:'elephant',
    //     c:'boa',
    //     d:'tigre',
    //     correct:['a', 'lion']
    // },
    // {
    //     question:"c'etait quand l'independance de la RDC",
    //     a:'en 1690',
    //     b:'en 1817',
    //     c:'en 1960',
    //     d:'en 2000',
    //     correct:['c','en 1960']
    // },
    // {
    //     question:"c'est quoi le vrai nom Maitre Gims",
    //     a:'Djuna',
    //     b:'bolingi',
    //     c:'dadju',
    //     d:'Gazo',
    //     correct:['a', 'Djuna']
    // }
];

const count = document.getElementById('count');
const quiz= document.getElementById('quiz');
const ansewerEls= document.querySelectorAll(".ansewer");
const questions= document.getElementById('question');
const scoreDataShow = document.getElementById('score-data');
const image = document.querySelector('.image')

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const submission=document.getElementById('sub')
 
let currentQuiz=0;
let ansewer= undefined; 
let score=0;
let scoreData = [];

loadQuiz();

function loadQuiz(){
    decelectAncsewer();

    const currentQuizData=quizData[currentQuiz];
    questions.innerText=currentQuizData.question;

    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}

function getSelected(){

    let ansewer= undefined;

    ansewerEls.forEach((ansewerEl) =>{
        if(ansewerEl.checked){
            ansewer = ansewerEl.id;
        }
    });

    return ansewer;
}

function decelectAncsewer(){
    
    ansewerEls.forEach((ansewerEl) =>{
        ansewerEl.checked= false;
    });
        
}

submission.addEventListener('click',() =>{

    const ansewer=getSelected();

    if(ansewer){
        if(ansewer === quizData[currentQuiz].correct[0]){
            score++;
        }

        if(ansewer != quizData[currentQuiz].correct[0]){
            scoreData.push(quizData[currentQuiz])
            console.log(scoreData)
        }

        currentQuiz++;
        count.innerText = currentQuiz + '/' + quizData.length;

        if( currentQuiz < quizData.length){
            loadQuiz();
        }else{

            if(score >= quizData.length/2){
                image.innerHTML = `<img src="images/win.png" alt="#" />`
            } else if (score < quizData.length/2) {
                image.innerHTML = `<h1>you louse</h1>`
            }
        
            quiz.innerHTML =`<div class='see-score'>
                                <h2 class="end-tile">You have pleted all questions</h2>
                                <h4>You ansewered ${score}/${quizData.length} questions</h4>
                                    <div id='score-data'>
                                        ${scoreData.map((data) => {
                                            return `<h6>${data.question}</h5>
                                                    <p>${data.correct[1]}</p>`
                                        })}
                                    </div>
                                <button onclick="location.reload()">Reload</button>
                            </div>`;
        }
    }
    
})
