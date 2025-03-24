let questionsArray = [
    { que: "What does HTML stand for?", opt1: "Hyper Text Preprocessor", opt2: "Hyper Text Markup Language", opt3: "Hyper Text Multiple Language", opt4: "Hyper Tool Multi Language", ans: "Hyper Text Markup Language" },
    
    { que: "Which CSS property is used to change text color?", opt1: "font-color", opt2: "text-color", opt3: "color", opt4: "background-color", ans: "color" },
    
    { que: "Which of the following is NOT a JavaScript framework?", opt1: "React", opt2: "Angular", opt3: "Django", opt4: "Vue", ans: "Django" },
    
    { que: "Which tag is used to link an external CSS file?", opt1: "<script>", opt2: "<link>", opt3: "<style>", opt4: "<css>", ans: "<link>" },
    
    { que: "Which JavaScript keyword is used to declare a variable?", opt1: "var", opt2: "let", opt3: "const", opt4: "All of the above", ans: "All of the above" },
    
    { que: "Which of these is a CSS framework?", opt1: "Bootstrap", opt2: "Node.js", opt3: "Express", opt4: "Django", ans: "Bootstrap" },
    
    { que: "What does DOM stand for?", opt1: "Document Object Model", opt2: "Data Object Model", opt3: "Document Oriented Model", opt4: "Display Object Management", ans: "Document Object Model" },
    
    { que: "Which of these is NOT a valid CSS unit?", opt1: "px", opt2: "em", opt3: "cm", opt4: "ptm", ans: "ptm" },
    
    { que: "Which HTML tag is used for creating an unordered list?", opt1: "<ul>", opt2: "<ol>", opt3: "<li>", opt4: "<list>", ans: "<ul>" },
    
    { que: "Which JavaScript function is used to print content to the console?", opt1: "console.log()", opt2: "print()", opt3: "document.write()", opt4: "log()", ans: "console.log()" }
];
let questionNumber=0;
let queEle=document.getElementById("queId");
let opt1Ele = document.getElementById("opt1Id");
let opt2Ele = document.getElementById("opt2Id");
let opt3Ele = document.getElementById("opt3Id");
let opt4Ele = document.getElementById("opt4Id");

function start(event)
{
    event.target.style.display="none"
    document.getElementById("box").style.display="block";
}

function display()
{
    let obj = questionsArray[questionNumber];
    queEle.innerText=obj.que;
    opt1Ele.innerText=obj.opt1;
    opt2Ele.innerText=obj.opt2;
    opt3Ele.innerText=obj.opt3;
    opt4Ele.innerText=obj.opt4;

}
display();

function next()
{
    questionNumber++;
    display();
}