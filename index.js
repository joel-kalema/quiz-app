const quizData=[
    {
        question:"c'est qui le presindent actuel de la RDC",
        a:'lumumba',
        b:'casavubu',
        c:'kabila',
        d:'tshitshi',
        correct:'d'
    },
    {
        question:"c'est qui le presindent actuel du Rwanda",
        a:'Joseph',
        b:'casavubu',
        c:'Joel',
        d:'Paul',
        correct:'d'
    },
    {
        question:"c'est quoi le nom du roi de la foret",
        a:'lion',
        b:'elephant',
        c:'boa',
        d:'tigre',
        correct:'a'
    },
    {
        question:"c'etait quand l'independance de la RDC",
        a:'en 1690',
        b:'en 1817',
        c:'en 1960',
        d:'en 2000',
        correct:'c'
    },
    {
        question:"c'est quoi le vrai nom Maitre Gims",
        a:'Djuna',
        b:'bolingi',
        c:'dadju',
        d:'Gazo',
        correct:'a'
    }
];
const quiz=document.getElementById('quiz')
const ansewerEls= document.querySelectorAll(".ansewer");
const questions=document.getElementById('question');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const submission=document.getElementById('sub')
 
let currentQuiz=0;
let ansewer= undefined; 
let score=0;

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
        if(ansewer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if( currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`
                <h2>You ansewered ${score}/${quizData.
                length} questions</h2>
                
                <button onclick="location.reload()">
                Reload</button>`;
        }
    }
    
})
