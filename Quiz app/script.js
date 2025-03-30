let questions=[
    {
        question:"what is answer of 2+4",
        answers:[
            {text:"6",correct:true},
            {text:"7",correct:false},
            {text:"8",correct:false},
            {text:"9",correct:false},
        ]
    },

    {
        question:"what is answer of 2*4 ",
        answers:[
            {text:"22",correct:false},
            {text:"8",correct:true},
            {text:"10",correct:false},
            {text:"12",correct:false},
        ]
    },

    {
        question:"what is answer of 4/2 ",
        answers:[
            {text:"1",correct:false},
            {text:"5",correct:false},
            {text:"2",correct:true},
            {text:"3",correct:false},
        ]
    },

    {
        question:"what is answer of 19-9 ",
        answers:[
            {text:"10",correct:true},
            {text:"5",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:false},
        ]
    },
    {
        question:"what is answer of 20%10",
        answers:[
            {text:"10",correct:false},
            {text:"5",correct:false},
            {text:"0",correct:true},
            {text:"3",correct:false},
        ]
    }
];


const question1=document.querySelector('#questions');
const answer1=document.querySelector(".answer-btn");
const nextbtn=document.querySelector(".next-btn");

let index=0;
let score=0;

function startquiz(){
    index=0;
    score=0;
    nextbtn.innerHTML="next";
    showquestions();
}

function showquestions(){
    resetstate();
    let currentquestion=questions[index];
    let questiono=index+1;
    question1.innerHTML=questiono+"." + currentquestion.question;

    currentquestion.answers.forEach(ans=>{
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
        answer1.appendChild(button);
        if(ans.correct){
                button.dataset.correct=ans.correct;
        }
        button.addEventListener("click",selectanswer)
    });

   
}

function resetstate(){
    nextbtn.style.display="none";
    while(answer1.firstChild){
        answer1.removeChild(answer1.firstChild)
    }
}

function selectanswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }

    Array.from(answer1.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextbtn.style.display="block";

}

function showscore(){
    resetstate();
    question1.innerHTML=`your score is ${score} out of ${questions.length}`;
    nextbtn.innerHTML="Play again";
    nextbtn.style.display="block";
}

function handlenext(){
    index++;
    if(index<questions.length){
        showquestions();
    }
    else{
        showscore()
    }
}

nextbtn.addEventListener("click",()=>{
    if(index<questions.length){
        handlenext();
    }
    else{
        startquiz()
    }
})
startquiz()