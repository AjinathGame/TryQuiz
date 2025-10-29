
let htmlQuizContainer = document.getElementById("html-Quiz-container");

let htmlQuiz = document.getElementById("html-Quiz-content");

let arrow1 = document.getElementById("arrow-down1");


// html

htmlQuizContainer.addEventListener("click", function () {
  document.getElementById("html-Quiz-content").style.display = "block";
  arrow1.style.transform = "rotate(90deg)";
})

htmlQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("html-Quiz-content").style.display = "none";
  arrow1.style.transform = "rotate(0deg)";
})


let htmlBeginnerQuiz = document.getElementById("html-beginner-Quiz-container");
let htmlBeginnerQuizLevels = document.getElementById("html-beginner-Quiz-levels");

let arrow1_1 = document.getElementById("arrow-down1-1");

htmlBeginnerQuiz.addEventListener("click", function () {
  htmlBeginnerQuizLevels.style.display = "block";
  arrow1_1.style.transform = "rotate(90deg)";
});

htmlBeginnerQuiz.addEventListener("dblclick", function () {
  htmlBeginnerQuizLevels.style.display = "none";
  arrow1_1.style.transform = "rotate(0deg)";
});




// html-intermediate

let htmlIntermediateQuiz = document.getElementById("html-intermediate-Quiz-container");
let htmlIntermediateQuizLevels = document.getElementById("html-intermediate-Quiz-levels");
let arrow1_2 = document.getElementById("arrow-down1-2");


htmlIntermediateQuiz.addEventListener("click", function () {
  htmlIntermediateQuizLevels.style.display = "block";
  arrow1_2.style.transform = "rotate(90deg)";
});

htmlIntermediateQuiz.addEventListener("dblclick", function () {
  htmlIntermediateQuizLevels.style.display = "none";
  arrow1_2.style.transform = "rotate(0deg)";
});





// html-advanced

let htmlAdvancedQuiz = document.getElementById("html-advanced-Quiz-container");

let htmlAdvancedQuizLevels = document.getElementById("html-advanced-Quiz-levels");
let arrow1_3 = document.getElementById("arrow-down1-3");

htmlAdvancedQuiz.addEventListener("click", function () {
  htmlAdvancedQuizLevels.style.display = "block";
  arrow1_3.style.transform = "rotate(90deg)";
});

htmlAdvancedQuiz.addEventListener("dblclick", function () {
  htmlAdvancedQuizLevels.style.display = "none";
  arrow1_3.style.transform = "rotate(0deg)";
});



//js


let jsQuizContainer = document.getElementById("js-Quiz-container");
let jsQuiz = document.getElementById("js-Quiz-content");
let arrow2 = document.getElementById("arrow-down2");

jsQuizContainer.addEventListener("click", function () {
  document.getElementById("js-Quiz-content").style.display = "block";
  arrow2.style.transform = "rotate(90deg)";
});

jsQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("js-Quiz-content").style.display = "none";
  arrow2.style.transform = "rotate(0deg)";
});


let jsBeginnerQuiz = document.getElementById("js-beginner-Quiz-container");
let jsBeginnerQuizLevels = document.getElementById("js-beginner-Quiz-levels");

let arrow2_1 = document.getElementById("arrow-down2-1");

jsBeginnerQuiz.addEventListener("click", function () {
  jsBeginnerQuizLevels.style.display = "block";
  arrow2_1.style.transform = "rotate(90deg)";
});

jsBeginnerQuiz.addEventListener("dblclick", function () {
  jsBeginnerQuizLevels.style.display = "none";
  arrow2_1.style.transform = "rotate(0deg)";
});




// js-intermediate

let jsIntermediateQuiz = document.getElementById("js-intermediate-Quiz-container");
let jsIntermediateQuizLevels = document.getElementById("js-intermediate-Quiz-levels");
let arrow2_2 = document.getElementById("arrow-down2-2");


jsIntermediateQuiz.addEventListener("click", function () {
  jsIntermediateQuizLevels.style.display = "block";
  arrow2_2.style.transform = "rotate(90deg)";
});

jsIntermediateQuiz.addEventListener("dblclick", function () {
  jsIntermediateQuizLevels.style.display = "none";
  arrow2_2.style.transform = "rotate(0deg)";
});





// js-advanced

let jsAdvancedQuiz = document.getElementById("js-advanced-Quiz-container");

let jsAdvancedQuizLevels = document.getElementById("js-advanced-Quiz-levels");
let arrow2_3 = document.getElementById("arrow-down2-3");

jsAdvancedQuiz.addEventListener("click", function () {
  jsAdvancedQuizLevels.style.display = "block";
  arrow2_3.style.transform = "rotate(90deg)";
});

jsAdvancedQuiz.addEventListener("dblclick", function () {
  jsAdvancedQuizLevels.style.display = "none";
  arrow2_3.style.transform = "rotate(0deg)";
});






// python

let pythonQuizContainer = document.getElementById("python-Quiz-container");
let pythonQuiz = document.getElementById("python-Quiz-content");
let arrow3 = document.getElementById("arrow-down3");

pythonQuizContainer.addEventListener("click", function () {
  document.getElementById("python-Quiz-content").style.display = "block";
  arrow3.style.transform = "rotate(90deg)";
});

pythonQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("python-Quiz-content").style.display = "none";
  arrow3.style.transform = "rotate(0deg)";
});

// python beginner

let pythonBeginnerQuiz = document.getElementById("python-beginner-Quiz-container");
let pythonBeginnerQuizLevels = document.getElementById("python-beginner-Quiz-levels");
let arrow3_1 = document.getElementById("arrow-down3-1");

pythonBeginnerQuiz.addEventListener("click", function () {
  pythonBeginnerQuizLevels.style.display = "block";
  arrow3_1.style.transform = "rotate(90deg)";
});

pythonBeginnerQuiz.addEventListener("dblclick", function () {
  pythonBeginnerQuizLevels.style.display = "none";
  arrow3_1.style.transform = "rotate(0deg)";
});


//python interme

let pythonIntermediateQuiz = document.getElementById("python-intermediate-Quiz-container");
let pythonIntermediateQuizLevels = document.getElementById("python-intermediate-Quiz-levels");
let arrow3_2 = document.getElementById("arrow-down3-2");

pythonIntermediateQuiz.addEventListener("click", function () {
  pythonIntermediateQuizLevels.style.display = "block";
  arrow3_2.style.transform = "rotate(90deg)";
});

pythonIntermediateQuiz.addEventListener("dblclick", function () {
  pythonIntermediateQuizLevels.style.display = "none";
  arrow3_2.style.transform = "rotate(0deg)";
});


//python ad

let pythonAdvancedQuiz = document.getElementById("python-advanced-Quiz-container");
let pythonAdvancedQuizLevels = document.getElementById("python-advanced-Quiz-levels");
let arrow3_3 = document.getElementById("arrow-down3-3");

pythonAdvancedQuiz.addEventListener("click", function () {
  pythonAdvancedQuizLevels.style.display = "block";
  arrow3_3.style.transform = "rotate(90deg)";
});

pythonAdvancedQuiz.addEventListener("dblclick", function () {
  pythonAdvancedQuizLevels.style.display = "none";
  arrow3_3.style.transform = "rotate(0deg)";
});


// java

let javaQuizContainer = document.getElementById("java-Quiz-container");
let javaQuiz = document.getElementById("java-Quiz-content");
let arrow4 = document.getElementById("arrow-down4");

javaQuizContainer.addEventListener("click", function () {
  document.getElementById("java-Quiz-content").style.display = "block";
  arrow4.style.transform = "rotate(90deg)";
});

javaQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("java-Quiz-content").style.display = "none";
  arrow4.style.transform = "rotate(0deg)";
});

//java beg

let javaBeginnerQuiz = document.getElementById("java-beginner-Quiz-container");
let javaBeginnerQuizLevels = document.getElementById("java-beginner-Quiz-levels");
let arrow4_1 = document.getElementById("arrow-down4-1");

javaBeginnerQuiz.addEventListener("click", function () {
  javaBeginnerQuizLevels.style.display = "block";
  arrow4_1.style.transform = "rotate(90deg)";
});

javaBeginnerQuiz.addEventListener("dblclick", function () {
  javaBeginnerQuizLevels.style.display = "none";
  arrow4_1.style.transform = "rotate(0deg)";
});

//java interme

let javaIntermediateQuiz = document.getElementById("java-intermediate-Quiz-container");
let javaIntermediateQuizLevels = document.getElementById("java-intermediate-Quiz-levels");
let arrow4_2 = document.getElementById("arrow-down4-2");

javaIntermediateQuiz.addEventListener("click", function () {
  javaIntermediateQuizLevels.style.display = "block";
  arrow4_2.style.transform = "rotate(90deg)";
});

javaIntermediateQuiz.addEventListener("dblclick", function () {
  javaIntermediateQuizLevels.style.display = "none";
  arrow4_2.style.transform = "rotate(0deg)";
});


// java ad

let javaAdvancedQuiz = document.getElementById("java-advanced-Quiz-container");
let javaAdvancedQuizLevels = document.getElementById("java-advanced-Quiz-levels");
let arrow4_3 = document.getElementById("arrow-down4-3");

javaAdvancedQuiz.addEventListener("click", function () {
  javaAdvancedQuizLevels.style.display = "block";
  arrow4_3.style.transform = "rotate(90deg)";
});

javaAdvancedQuiz.addEventListener("dblclick", function () {
  javaAdvancedQuizLevels.style.display = "none";
  arrow4_3.style.transform = "rotate(0deg)";
});


// c++

// let cplusQuizContainer = document.getElementById("C-plus-Quiz-container");
// let cplusQuiz = document.getElementById("C-plus-Quiz-content");
// let arrow5 = document.getElementById("arrow-down6");

// cplusQuizContainer.addEventListener("click", function () {
//     document.getElementById("C-plus-Quiz-content").style.display = "block";
//     arrow5.style.transform = "rotate(90deg)";
// });

// cplusQuizContainer.addEventListener("dblclick", function () {
//     document.getElementById("C-plus-Quiz-content").style.display = "none";
//     arrow5.style.transform = "rotate(0deg)";
// });

//cplus beg

// let cplusBeginnerQuiz = document.getElementById("C-plus-beginner-Quiz-container");
// let cplusBeginnerQuizLevels = document.getElementById("C-plus-beginner-Quiz-levels");
// let arrow6_1 = document.getElementById("arrow-down6-1");

// cplusBeginnerQuiz.addEventListener("click", function () {
//     cplusBeginnerQuizLevels.style.display = "block";
//     arrow6_1.style.transform = "rotate(90deg)";
// });

// cplusBeginnerQuiz.addEventListener("dblclick", function () {
//     cplusBeginnerQuizLevels.style.display = "none";
//     arrow6_1.style.transform = "rotate(0deg)";
// });


// cplus interme

// let cplusIntermediateQuiz = document.getElementById("C-plus-intermediate-Quiz-container");
// let cplusIntermediateQuizLevels = document.getElementById("C-plus-intermediate-Quiz-levels");
// let arrow6_2 = document.getElementById("arrow-down6-2");

// cplusIntermediateQuiz.addEventListener("click", function () {
//     cplusIntermediateQuizLevels.style.display = "block";
//     arrow6_2.style.transform = "rotate(90deg)";
// });

// cplusIntermediateQuiz.addEventListener("dblclick", function () {
//     cplusIntermediateQuizLevels.style.display = "none";
//     arrow6_2.style.transform = "rotate(0deg)";
// });

//cplus ad

// let cplusAdvancedQuiz = document.getElementById("C-plus-advanced-Quiz-container");
// let cplusAdvancedQuizLevels = document.getElementById("C-plus-advanced-Quiz-levels");
// let arrow6_3 = document.getElementById("arrow-down6-3");

// cplusAdvancedQuiz.addEventListener("click", function () {
//     cplusAdvancedQuizLevels.style.display = "block";
//     arrow6_3.style.transform = "rotate(90deg)";
// });

// cplusAdvancedQuiz.addEventListener("dblclick", function () {
//     cplusAdvancedQuizLevels.style.display = "none";
//     arrow6_3.style.transform = "rotate(0deg)";
// });


// c#

let csharpQuizContainer = document.getElementById("CSharp-Quiz-container");
let csharpQuiz = document.getElementById("CSharp-Quiz-content");
let arrow5 = document.getElementById("arrow-down5");

csharpQuizContainer.addEventListener("click", function () {
  document.getElementById("CSharp-Quiz-content").style.display = "block";
  arrow5.style.transform = "rotate(90deg)";
});

csharpQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("CSharp-Quiz-content").style.display = "none";
  arrow5.style.transform = "rotate(0deg)";
});

// csharpbeg

let csharpBeginnerQuiz = document.getElementById("CSharp-beginner-Quiz-container");
let csharpBeginnerQuizLevels = document.getElementById("CSharp-beginner-Quiz-levels");
let arrow5_1 = document.getElementById("arrow-down5-1");

csharpBeginnerQuiz.addEventListener("click", function () {
  csharpBeginnerQuizLevels.style.display = "block";
  arrow5_1.style.transform = "rotate(90deg)";
});

csharpBeginnerQuiz.addEventListener("dblclick", function () {
  csharpBeginnerQuizLevels.style.display = "none";
  arrow5_1.style.transform = "rotate(0deg)";
});


// csharp interme

let csharpIntermediateQuiz = document.getElementById("CSharp-intermediate-Quiz-container");
let csharpIntermediateQuizLevels = document.getElementById("CSharp-intermediate-Quiz-levels");
let arrow5_2 = document.getElementById("arrow-down5-2");

csharpIntermediateQuiz.addEventListener("click", function () {
  csharpIntermediateQuizLevels.style.display = "block";
  arrow5_2.style.transform = "rotate(90deg)";
});

csharpIntermediateQuiz.addEventListener("dblclick", function () {
  csharpIntermediateQuizLevels.style.display = "none";
  arrow5_2.style.transform = "rotate(0deg)";
});


// csharp ad

let csharpAdvancedQuiz = document.getElementById("CSharp-advanced-Quiz-container");
let csharpAdvancedQuizLevels = document.getElementById("CSharp-advanced-Quiz-levels");
let arrow5_3 = document.getElementById("arrow-down5-3");

csharpAdvancedQuiz.addEventListener("click", function () {
  csharpAdvancedQuizLevels.style.display = "block";
  arrow5_3.style.transform = "rotate(90deg)";
});

csharpAdvancedQuiz.addEventListener("dblclick", function () {
  csharpAdvancedQuizLevels.style.display = "none";
  arrow5_3.style.transform = "rotate(0deg)";
});

//c

let cQuizContainer = document.getElementById("C-Quiz-container");
let cQuiz = document.getElementById("C-Quiz-content");
let arrow7 = document.getElementById("arrow-down7");

cQuizContainer.addEventListener("click", function () {
  document.getElementById("C-Quiz-content").style.display = "block";
  arrow7.style.transform = "rotate(90deg)";
});

cQuizContainer.addEventListener("dblclick", function () {
  document.getElementById("C-Quiz-content").style.display = "none";
  arrow7.style.transform = "rotate(0deg)";
});

// c beg

let CBeginnerQuiz = document.getElementById("C-beginner-Quiz-container");
let CBeginnerQuizLevels = document.getElementById("C-beginner-Quiz-levels");
let arrow7_1 = document.getElementById("arrow-down7-1");

CBeginnerQuiz.addEventListener("click", function () {
  CBeginnerQuizLevels.style.display = "block";
  arrow7_1.style.transform = "rotate(90deg)";
});

CBeginnerQuiz.addEventListener("dblclick", function () {
  CBeginnerQuizLevels.style.display = "none";
  arrow7_1.style.transform = "rotate(0deg)";
});



// c interme

let CIntermediateQuiz = document.getElementById("C-intermediate-Quiz-container");
let CIntermediateQuizLevels = document.getElementById("C-intermediate-Quiz-levels");
let arrow7_2 = document.getElementById("arrow-down7-2");

CIntermediateQuiz.addEventListener("click", function () {
  CIntermediateQuizLevels.style.display = "block";
  arrow7_2.style.transform = "rotate(90deg)";
});

CIntermediateQuiz.addEventListener("dblclick", function () {
  CIntermediateQuizLevels.style.display = "none";
  arrow7_2.style.transform = "rotate(0deg)";
});


//c advanced

let CAdvancedQuiz = document.getElementById("C-advanced-Quiz-container");
let CAdvancedQuizLevels = document.getElementById("C-advanced-Quiz-levels");
let arrow7_3 = document.getElementById("arrow-down7-3");

CAdvancedQuiz.addEventListener("click", function () {
  CAdvancedQuizLevels.style.display = "block";
  arrow7_3.style.transform = "rotate(90deg)";
});

CAdvancedQuiz.addEventListener("dblclick", function () {
  CAdvancedQuizLevels.style.display = "none";
  arrow7_3.style.transform = "rotate(0deg)";
});



// Questions
// html Quiz
// begginer
const htmlLevel1Questions = [
  { question: "1. What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language" },
  { question: "2. Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], answer: "<a>" },
  { question: "3. Which HTML tag is used to display an image?", options: ["<image>", "<img>", "<src>", "<pic>"], answer: "<img>" },
  { question: "4. Who is the father of HTML?", options: ["Tim Berners-Lee", "Brendan Eich", "Guido van Rossum", "James Gosling"], answer: "Tim Berners-Lee" },
  { question: "5. Which tag is used to create a numbered list?", options: ["<ul>", "<ol>", "<dl>", "<li>"], answer: "<ol>" },
  { question: "6. Which tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<dl>", "<li>"], answer: "<ul>" },
  { question: "7. Which tag is used to create a table?", options: ["<table>", "<tr>", "<td>", "<th>"], answer: "<table>" },
  { question: "8. Which tag is used to create a form?", options: ["<form>", "<input>", "<select>", "<button>"], answer: "<form>" },
  { question: "9. Which tag is used to create a button?", options: ["<button>", "<input>", "<form>", "<select>"], answer: "<button>" },
  { question: "10. Which tag is used to create a paragraph?", options: ["<p>", "<h1>", "<div>", "<span>"], answer: "<p>" }
];

const htmlLevel2Questions = [
  { question: "1) Which HTML5 tag is used to embed video content?", options: ["<media>", "<video>", "<movie>", "<embedvideo>"], answer: "<video>" },
  { question: "2) Which attribute in the <form> tag specifies how form data is sent?", options: ["target", "method", "action", "submit"], answer: "method" },
  { question: "3) Which HTML tag is used to represent tabular data?", options: ["<table>", "<tr>", "<td>", "<tab>"], answer: "<table>" },
  { question: "4) Which attribute is used in <iframe> to specify the web page to display?", options: ["src", "href", "link", "target"], answer: "src" },
  { question: "5) Which element represents a caption for a <table>?", options: ["<caption>", "<thead>", "<summary>", "<title>"], answer: "<caption>" },
  { question: "6) Which HTML element defines a clickable button?", options: ["<btn>", "<button>", "<input type='button'>", "<submit>"], answer: "<button>" },
  { question: "7) Which attribute is used to specify an image map for an <img> element?", options: ["usemap", "map", "imagemap", "area"], answer: "usemap" },
  { question: "8) Which HTML element is used to display a scalar measurement?", options: ["<progress>", "<meter>", "<scale>", "<range>"], answer: "<meter>" },
  { question: "9) Which tag is used to define a dropdown list?", options: ["<select>", "<dropdown>", "<option>", "<list>"], answer: "<select>" },
  { question: "10) Which input type allows selecting multiple files?", options: ["input type='multi-file'", "input type='file' multiple", "input type='files'", "input type='upload'"], answer: "input type='file' multiple" }
];

const htmlLevel3Questions = [
  { question: "1) Which HTML5 element is used to play audio files?", options: ["<sound>", "<music>", "<audio>", "<play>"], answer: "<audio>" },
  { question: "2) Which tag is used to define an independent piece of self-contained content?", options: ["<div>", "<article>", "<section>", "<aside>"], answer: "<article>" },
  { question: "3) Which attribute specifies that an input field must be filled before submitting?", options: ["required", "validate", "mandatory", "checked"], answer: "required" },
  { question: "4) Which HTML5 element is used to draw graphics via scripting?", options: ["<canvas>", "<svg>", "<graphics>", "<draw>"], answer: "<canvas>" },
  { question: "5) Which attribute is used with <form> to send data to a server?", options: ["action", "method", "target", "submit"], answer: "action" },
  { question: "6) Which element represents the main content of a document?", options: ["<main>", "<body>", "<section>", "<article>"], answer: "<main>" },
  { question: "7) Which input type is used to select a color?", options: ["text", "color", "picker", "hex"], answer: "color" },
  { question: "8) Which tag defines navigation links in HTML5?", options: ["<nav>", "<menu>", "<links>", "<header>"], answer: "<nav>" },
  { question: "9) Which element is used to group options inside a <select>?", options: ["<option>", "<optgroup>", "<group>", "<fieldset>"], answer: "<optgroup>" },
  { question: "10) Which HTML attribute specifies that the script should be executed after the page is loaded?", options: ["defer", "async", "delay", "onload"], answer: "defer" }
];
const htmlAssignmentQuestions = [
  { question: "1) Which HTML attribute is used to provide an alternative text for an image if the image cannot be displayed?", options: ["alt", "title", "src", "longdesc"], answer: "alt" },
  { question: "2) Which tag is used to define an inline frame?", options: ["<iframe>", "<frame>", "<embed>", "<object>"], answer: "<iframe>" },
  { question: "3) Which HTML element is used for marking up contact information?", options: ["<address>", "<contact>", "<info>", "<details>"], answer: "<address>" },
  { question: "4) Which input type is used to select a date?", options: ["datetime", "date", "calendar", "time"], answer: "date" },
  { question: "5) Which element is used to display preformatted text in HTML?", options: ["<pre>", "<code>", "<samp>", "<kbd>"], answer: "<pre>" },
  { question: "6) Which HTML5 element is used to specify self-contained content like diagrams, illustrations, or photos?", options: ["<figure>", "<img>", "<picture>", "<media>"], answer: "<figure>" },
  { question: "7) Which element provides a caption or description for a <figure> element?", options: ["<figcaption>", "<caption>", "<legend>", "<summary>"], answer: "<figcaption>" },
  { question: "8) Which tag is used to add a line break?", options: ["<br>", "<break>", "<lb>", "<newline>"], answer: "<br>" },
  { question: "9) Which HTML element is used to show computer code?", options: ["<code>", "<kbd>", "<samp>", "<var>"], answer: "<code>" },
  { question: "10) Which tag is used to display a quotation that is integrated within text?", options: ["<q>", "<blockquote>", "<quote>", "<cite>"], answer: "<q>" }
];
// intermidiate
// ---------------- HTML Intermediate Level 1 ----------------
const htmlIntermediateLevel1Questions = [
  {
    question: "1) Which HTML5 element defines a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<aside>"],
    answer: "<footer>"
  },
  {
    question: "2) Which attribute specifies alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    answer: "alt"
  },
  {
    question: "3) Which tag is used to display preformatted text?",
    options: ["<code>", "<pre>", "<format>", "<fixed>"],
    answer: "<pre>"
  },
  {
    question: "4) Which input type is used for selecting a date?",
    options: ["datetime", "date", "time", "calendar"],
    answer: "date"
  },
  {
    question: "5) Which attribute makes an input automatically get focus when a page loads?",
    options: ["autofocus", "focus", "selected", "active"],
    answer: "autofocus"
  },
  {
    question: "6) Which element is used to define a client-side script?",
    options: ["<style>", "<javascript>", "<script>", "<js>"],
    answer: "<script>"
  },
  {
    question: "7) Which attribute specifies that an input field should be disabled?",
    options: ["inactive", "disabled", "readonly", "hidden"],
    answer: "disabled"
  },
  {
    question: "8) Which HTML element defines the title of a document?",
    options: ["<meta>", "<head>", "<title>", "<header>"],
    answer: "<title>"
  },
  {
    question: "9) Which attribute uniquely identifies an element?",
    options: ["class", "id", "name", "unique"],
    answer: "id"
  },
  {
    question: "10) Which tag is used to embed an external web page inside another?",
    options: ["<frame>", "<embed>", "<iframe>", "<object>"],
    answer: "<iframe>"
  }
];

// ---------------- HTML Intermediate Level 2 ----------------
const htmlIntermediateLevel2Questions = [
  {
    question: "1) Which tag is used to add a background video in HTML5?",
    options: ["<movie>", "<video>", "<media>", "<stream>"],
    answer: "<video>"
  },
  {
    question: "2) Which element is used to group related options in a drop-down list?",
    options: ["<select>", "<optgroup>", "<option>", "<fieldset>"],
    answer: "<optgroup>"
  },
  {
    question: "3) Which tag is used to represent scalar measurement like disk usage?",
    options: ["<gauge>", "<progress>", "<meter>", "<scale>"],
    answer: "<meter>"
  },
  {
    question: "4) Which attribute makes an input field mandatory?",
    options: ["required", "validate", "needed", "must"],
    answer: "required"
  },
  {
    question: "5) Which HTML5 tag is used to define navigation links?",
    options: ["<navigate>", "<links>", "<nav>", "<menu>"],
    answer: "<nav>"
  },
  {
    question: "6) Which attribute specifies a short hint in an input field?",
    options: ["hint", "title", "tooltip", "placeholder"],
    answer: "placeholder"
  },
  {
    question: "7) Which HTML element is used for media content like audio?",
    options: ["<music>", "<sound>", "<audio>", "<media>"],
    answer: "<audio>"
  },
  {
    question: "8) Which tag is used to create a drop-down list?",
    options: ["<list>", "<input type='list'>", "<select>", "<dropdown>"],
    answer: "<select>"
  },
  {
    question: "9) Which element is used to define content aside from main content?",
    options: ["<sidebar>", "<aside>", "<section>", "<nav>"],
    answer: "<aside>"
  },
  {
    question: "10) Which tag is used to define a clickable button?",
    options: ["<btn>", "<button>", "<click>", "<input>"],
    answer: "<button>"
  }
];

// ---------------- HTML Intermediate Level 3 ----------------
const htmlIntermediateLevel3Questions = [
  {
    question: "1) Which HTML tag is used for defining vector graphics?",
    options: ["<canvas>", "<vector>", "<svg>", "<graphics>"],
    answer: "<svg>"
  },
  {
    question: "2) Which attribute specifies that the audio should play automatically?",
    options: ["autostart", "play", "loop", "autoplay"],
    answer: "autoplay"
  },
  {
    question: "3) Which HTML tag defines a table caption?",
    options: ["<caption>", "<title>", "<thead>", "<label>"],
    answer: "<caption>"
  },
  {
    question: "4) Which tag is used to embed JavaScript code?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>"
  },
  {
    question: "5) Which element is used for marking up keyboard input?",
    options: ["<kbd>", "<code>", "<samp>", "<var>"],
    answer: "<kbd>"
  },
  {
    question: "6) Which HTML5 element defines the main content of a document?",
    options: ["<main>", "<body>", "<content>", "<section>"],
    answer: "<main>"
  },
  {
    question: "7) Which attribute is used to specify that an input can accept multiple values?",
    options: ["multi", "multiple", "many", "list"],
    answer: "multiple"
  },
  {
    question: "8) Which element represents content quoted from another source?",
    options: ["<quote>", "<blockquote>", "<q>", "<cite>"],
    answer: "<blockquote>"
  },
  {
    question: "9) Which attribute specifies an image to be shown while a video is downloading?",
    options: ["preview", "poster", "thumb", "start"],
    answer: "poster"
  },
  {
    question: "10) Which element defines a list of options for input type='text'?",
    options: ["<options>", "<list>", "<datalist>", "<select>"],
    answer: "<datalist>"
  }
];
// ---------------- HTML Assignment Level ----------------
const htmlintermidiateAssignmentQuestions = [
  {
    question: "1) Create an HTML form with input fields for name, email, and a submit button. Which tag is used to group all form elements?",
    options: ["<form>", "<fieldset>", "<section>", "<input>"],
    answer: "<form>"
  },
  {
    question: "2) Which attribute is used to connect a label with its input field?",
    options: ["connect", "id", "for", "name"],
    answer: "for"
  },
  {
    question: "3) If you want a link to open in a new tab, which attribute value do you use?",
    options: ["_self", "_tab", "_blank", "_new"],
    answer: "_blank"
  },
  {
    question: "4) Which element is best for displaying tabular data?",
    options: ["<list>", "<table>", "<div>", "<grid>"],
    answer: "<table>"
  },
  {
    question: "5) In HTML5, which element is used to display a progress bar?",
    options: ["<bar>", "<progress>", "<status>", "<meter>"],
    answer: "<progress>"
  },
  {
    question: "6) Which tag is used to group rows in a table footer?",
    options: ["<tfoot>", "<tfooters>", "<bottom>", "<tfootrow>"],
    answer: "<tfoot>"
  },
  {
    question: "7) Which input type is best for creating a slider control?",
    options: ["range", "slider", "scroll", "bar"],
    answer: "range"
  },
  {
    question: "8) Which element is used to define an area inside an image map?",
    options: ["<map>", "<imgarea>", "<area>", "<usemap>"],
    answer: "<area>"
  },
  {
    question: "9) Which HTML tag is used to add a description list?",
    options: ["<ul>", "<dl>", "<ol>", "<list>"],
    answer: "<dl>"
  },
  {
    question: "10) Which attribute in <iframe> helps improve security by restricting features?",
    options: ["sandbox", "safe", "secure", "block"],
    answer: "sandbox"
  }
];
// ---------------- HTML Advanced Level 1 ----------------
const htmlAdvancedLevel1Questions = [
  {
    question: "1) Which attribute is used in <iframe> to prevent access to top-level browsing context?",
    options: ["referrerpolicy", "noreferrer", "sandbox", "block"],
    answer: "sandbox"
  },
  {
    question: "2) Which element is used to embed audio files in HTML5?",
    options: ["<sound>", "<media>", "<audio>", "<music>"],
    answer: "<audio>"
  },
  {
    question: "3) Which attribute specifies multiple file uploads in an <input> element?",
    options: ["files", "upload", "multiple", "many"],
    answer: "multiple"
  },
  {
    question: "4) Which HTML5 element is used for scalable vector graphics?",
    options: ["<svg>", "<vector>", "<graphics>", "<canvas>"],
    answer: "<svg>"
  },
  {
    question: "5) Which API allows offline web applications?",
    options: ["Storage API", "Offline API", "AppCache", "Cache API"],
    answer: "AppCache"
  },
  {
    question: "6) Which element is used for embedding video content?",
    options: ["<media>", "<movie>", "<video>", "<embed>"],
    answer: "<video>"
  },
  {
    question: "7) Which attribute is used to provide a fallback image for <video>?",
    options: ["poster", "cover", "thumbnail", "alt"],
    answer: "poster"
  },
  {
    question: "8) Which attribute specifies that an <input> must be filled before submitting?",
    options: ["mandatory", "validate", "required", "compulsory"],
    answer: "required"
  },
  {
    question: "9) Which element is used to draw graphics using scripting (JavaScript)?",
    options: ["<draw>", "<canvas>", "<paint>", "<svg>"],
    answer: "<canvas>"
  },
  {
    question: "10) Which HTML feature allows specifying different images for different screen sizes?",
    options: ["<srcset>", "<picture>", "<media>", "<imgset>"],
    answer: "<picture>"
  }
];
// ---------------- HTML Advanced Level 2 ----------------
const htmlAdvancedLevel2Questions = [
  {
    question: "1) Which attribute in <script> is used to run code after the page has loaded?",
    options: ["async", "defer", "delay", "load"],
    answer: "defer"
  },
  {
    question: "2) Which global attribute provides custom data for elements?",
    options: ["dataset", "custom", "data-*", "meta"],
    answer: "data-*"
  },
  {
    question: "3) Which element is used for defining an interactive widget like dropdowns?",
    options: ["<widget>", "<details>", "<interactive>", "<summary>"],
    answer: "<details>"
  },
  {
    question: "4) Which element inside <details> defines the clickable heading?",
    options: ["<header>", "<summary>", "<caption>", "<title>"],
    answer: "<summary>"
  },
  {
    question: "5) Which HTML5 element represents machine-readable dates/times?",
    options: ["<time>", "<datetime>", "<date>", "<clock>"],
    answer: "<time>"
  },
  {
    question: "6) Which attribute specifies that the audio should start playing automatically?",
    options: ["autostart", "auto", "autoplay", "play"],
    answer: "autoplay"
  },
  {
    question: "7) Which HTML5 API is used to get user's geographical location?",
    options: ["GeoAPI", "Location API", "Geolocation API", "GPS API"],
    answer: "Geolocation API"
  },
  {
    question: "8) Which HTML tag defines the main navigation links?",
    options: ["<menu>", "<nav>", "<links>", "<sidebar>"],
    answer: "<nav>"
  },
  {
    question: "9) Which tag is used to define vector-based icons inline in HTML?",
    options: ["<svg>", "<icon>", "<img>", "<shape>"],
    answer: "<svg>"
  },
  {
    question: "10) Which attribute tells the browser to download a link instead of navigating?",
    options: ["save", "download", "store", "export"],
    answer: "download"
  }
];
// ---------------- HTML Advanced Level 3 ----------------
const htmlAdvancedLevel3Questions = [
  {
    question: "1) Which input type provides a color picker?",
    options: ["text", "picker", "color", "palette"],
    answer: "color"
  },
  {
    question: "2) Which API allows storing key-value data in a user's browser permanently?",
    options: ["SessionStorage", "LocalStorage", "Cookie API", "Storage API"],
    answer: "LocalStorage"
  },
  {
    question: "3) Which HTML element is used for mathematical formulas?",
    options: ["<eq>", "<math>", "<formula>", "<calc>"],
    answer: "<math>"
  },
  {
    question: "4) Which attribute defines the number of rows a <textarea> should display?",
    options: ["rows", "cols", "size", "length"],
    answer: "rows"
  },
  {
    question: "5) Which HTML5 API is used for drawing 2D graphics?",
    options: ["Canvas API", "SVG API", "WebGL", "Graphics API"],
    answer: "Canvas API"
  },
  {
    question: "6) Which HTML element provides metadata for social media sharing?",
    options: ["<social>", "<meta>", "<link>", "<share>"],
    answer: "<meta>"
  },
  {
    question: "7) Which HTML5 element represents highlighted or marked text?",
    options: ["<highlight>", "<mark>", "<strong>", "<em>"],
    answer: "<mark>"
  },
  {
    question: "8) Which input type hides the field contents (like passwords)?",
    options: ["hidden", "secure", "password", "conceal"],
    answer: "password"
  },
  {
    question: "9) Which attribute is used in <track> for subtitles?",
    options: ["src", "subtitles", "kind", "label"],
    answer: "kind"
  },
  {
    question: "10) Which HTML feature enables native drag-and-drop functionality?",
    options: ["draggable", "drop", "ondrag", "sortable"],
    answer: "draggable"
  }
];
// ---------------- HTML Assignment Level ----------------
const htmlAssignmentLevelQuestions = [
  {
    question: "1) Create an HTML table with 3 rows and 3 columns where the first row is a header row. Which element should be used for header cells?",
    options: ["<th>", "<td>", "<tr>", "<thead>"],
    answer: "<th>"
  },
  {
    question: "2) Write HTML code to create a registration form with fields: Name, Email, and Password. Which input type should be used for the password field?",
    options: ["text", "password", "hidden", "secure"],
    answer: "password"
  },
  {
    question: "3) Create an HTML5 page that embeds a YouTube video. Which element is best suited for this?",
    options: ["<embed>", "<object>", "<video>", "<iframe>"],
    answer: "<iframe>"
  },
  {
    question: "4) Create a navigation bar with links to Home, About, and Contact. Which semantic element is best to wrap the links?",
    options: ["<menu>", "<nav>", "<header>", "<ul>"],
    answer: "<nav>"
  },
  {
    question: "5) Build a form with file upload functionality. Which input type should be used?",
    options: ["text", "file", "upload", "document"],
    answer: "file"
  },
  {
    question: "6) Create an HTML page with an image that links to another website when clicked. Which tag combination should be used?",
    options: ["<a><img></a>", "<img><a></a>", "<link><img>", "<src><a>"],
    answer: "<a><img></a>"
  },
  {
    question: "7) Design a webpage section to display blog posts. Which semantic element is most appropriate?",
    options: ["<article>", "<section>", "<div>", "<aside>"],
    answer: "<article>"
  },
  {
    question: "8) Add background audio to a webpage that plays automatically. Which element is correct?",
    options: ["<sound autoplay>", "<music autoplay>", "<audio autoplay>", "<track autoplay>"],
    answer: "<audio autoplay>"
  },
  {
    question: "9) Build a responsive image gallery. Which element allows multiple image sources depending on screen size?",
    options: ["<img>", "<picture>", "<gallery>", "<media>"],
    answer: "<picture>"
  },
  {
    question: "10) Create a progress bar for a file upload task. Which HTML5 element should be used?",
    options: ["<progress>", "<meter>", "<bar>", "<range>"],
    answer: "<progress>"
  }
];


//JS Quiz

/* ---------------- JS Beginner Level 1 ---------------- */
const jsLevel1Questions = [
  {
    question: "1) Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    answer: "//"
  },
  {
    question: "2) Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "let", "Both var and let"],
    answer: "Both var and let"
  },
  {
    question: "3) Which operator is used for strict equality comparison?",
    options: ["==", "===", "=", "!=="],
    answer: "==="
  },
  {
    question: "4) What is the output of: typeof(42)?",
    options: ["number", "string", "boolean", "undefined"],
    answer: "number"
  },
  {
    question: "5) Which method displays a message in the browser console?",
    options: ["alert()", "console.log()", "print()", "document.write()"],
    answer: "console.log()"
  },
  {
    question: "6) How do you write 'Hello' in an alert box?",
    options: ["alert('Hello')", "msg('Hello')", "console.log('Hello')", "print('Hello')"],
    answer: "alert('Hello')"
  },
  {
    question: "7) Which data type is NOT a primitive in JavaScript?",
    options: ["String", "Object", "Number", "Boolean"],
    answer: "Object"
  },
  {
    question: "8) What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "false"],
    answer: "undefined"
  },
  {
    question: "9) Which keyword is used to declare a constant?",
    options: ["const", "let", "static", "constant"],
    answer: "const"
  },
  {
    question: "10) Which operator is used for concatenation of strings?",
    options: ["+", "&", ".", "concat"],
    answer: "+"
  }
];

/* ---------------- JS Beginner Level 2 ---------------- */
const jsLevel2Questions = [
  {
    question: "1) What will '2' + 2 evaluate to in JavaScript?",
    options: ["4", "'22'", "NaN", "Error"],
    answer: "'22'"
  },
  {
    question: "2) Which function is used to parse a string into an integer?",
    options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
    answer: "parseInt()"
  },
  {
    question: "3) Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while"
  },
  {
    question: "4) Which array method adds a new element at the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "5) Which operator is used for exponentiation in ES6?",
    options: ["^", "**", "exp()", "Math.pow()"],
    answer: "**"
  },
  {
    question: "6) Which function returns the length of a string?",
    options: ["size()", "length()", "len()", "count()"],
    answer: "length()"
  },
  {
    question: "7) Which symbol is used for template literals?",
    options: ["''", "\"\"", "``", "##"],
    answer: "``"
  },
  {
    question: "8) What is the output of: Boolean('')?",
    options: ["true", "false", "null", "undefined"],
    answer: "false"
  },
  {
    question: "9) Which operator is used for logical AND?",
    options: ["&&", "||", "&", "AND"],
    answer: "&&"
  },
  {
    question: "10) Which keyword is used to exit a loop?",
    options: ["exit", "break", "stop", "return"],
    answer: "break"
  }
];

/* ---------------- JS Beginner Level 3 ---------------- */
const jsLevel3Questions = [
  {
    question: "1) Which method converts JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "toObject()", "parseJSON()"],
    answer: "JSON.parse()"
  },
  {
    question: "2) Which object is the parent of all objects in JavaScript?",
    options: ["Object", "Function", "Window", "Prototype"],
    answer: "Object"
  },
  {
    question: "3) Which function is used to schedule code execution after a delay?",
    options: ["setTimeout()", "setInterval()", "delay()", "sleep()"],
    answer: "setTimeout()"
  },
  {
    question: "4) What is the output of typeof NaN?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number"
  },
  {
    question: "5) Which keyword is used to handle exceptions?",
    options: ["try...catch", "throw...catch", "error...catch", "handle"],
    answer: "try...catch"
  },
  {
    question: "6) Which method removes the last element of an array?",
    options: ["shift()", "splice()", "pop()", "delete()"],
    answer: "pop()"
  },
  {
    question: "7) Which method joins all elements of an array into a string?",
    options: ["concat()", "join()", "combine()", "merge()"],
    answer: "join()"
  },
  {
    question: "8) Which operator is used for optional chaining in JavaScript?",
    options: ["??", "?.", "::", "?:"],
    answer: "?."
  },
  {
    question: "9) Which keyword defines a class in ES6?",
    options: ["object", "function", "class", "struct"],
    answer: "class"
  },
  {
    question: "10) Which property refers to the number of elements in an array?",
    options: ["count", "length", "size", "total"],
    answer: "length"
  }
];

/* ---------------- JS Assignment Level ---------------- */
const jsAssignmentQuestions = [
  {
    question: "1) Which function is used to continuously execute code at intervals?",
    options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
    answer: "setInterval()"
  },
  {
    question: "2) Which JavaScript statement is used to stop further event propagation?",
    options: ["event.stop()", "stopPropagation()", "preventDefault()", "cancel()"],
    answer: "stopPropagation()"
  },
  {
    question: "3) What will be the result of 0 == '0' in JavaScript?",
    options: ["true", "false", "NaN", "Error"],
    answer: "true"
  },
  {
    question: "4) What will be the result of 0 === '0'?",
    options: ["true", "false", "NaN", "Error"],
    answer: "false"
  },
  {
    question: "5) Which object is used for mathematical calculations in JavaScript?",
    options: ["Calc", "Math", "Number", "Calculator"],
    answer: "Math"
  },
  {
    question: "6) Which method can be used to sort elements of an array?",
    options: ["sort()", "order()", "arrange()", "sequence()"],
    answer: "sort()"
  },
  {
    question: "7) Which keyword is used to export functions in JavaScript modules?",
    options: ["send", "export", "module", "expose"],
    answer: "export"
  },
  {
    question: "8) Which method is used to add an element at the beginning of an array?",
    options: ["push()", "shift()", "unshift()", "prepend()"],
    answer: "unshift()"
  },
  {
    question: "9) Which method removes elements from an array and optionally inserts new ones?",
    options: ["splice()", "slice()", "split()", "delete()"],
    answer: "splice()"
  },
  {
    question: "10) Which built-in method returns a string representation of a number in base 2?",
    options: ["toBinary()", "toString(2)", "binary()", "parseInt()"],
    answer: "toString(2)"
  }
];
// intermidiate level1
const jsIntermediateLevel1 = [
  {
    question: "1) What does `Array.push()` do?",
    options: ["Removes last element", "Adds element at the end", "Adds element at the start", "Removes first element"],
    answer: "Adds element at the end"
  },
  {
    question: "2) What will be the output of: console.log(typeof undefined);",
    options: ["null", "undefined", "object", "string"],
    answer: "undefined"
  },
  {
    question: "3) Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "forEach"],
    answer: "do...while"
  },
  {
    question: "4) What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "false"],
    answer: "undefined"
  },
  {
    question: "5) Which function is used to join array elements into a string?",
    options: ["concat()", "join()", "toString()", "merge()"],
    answer: "join()"
  },
  {
    question: "6) What is the result of: Boolean('');",
    options: ["true", "false", "undefined", "null"],
    answer: "false"
  },
  {
    question: "7) Which symbol is used for strict equality?",
    options: ["==", "===", "!=", "!=="],
    answer: "==="
  },
  {
    question: "8) Which method removes the first element from an array?",
    options: ["shift()", "pop()", "splice()", "slice()"],
    answer: "shift()"
  },
  {
    question: "9) What is the output of: console.log(2 == '2');",
    options: ["true", "false", "error", "undefined"],
    answer: "true"
  },
  {
    question: "10) Which method converts JSON text into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "toObject()", "parse.JSON()"],
    answer: "JSON.parse()"
  }
];
// level2
const jsIntermediateLevel2 = [
  {
    question: "1) Which method adds elements at the beginning of an array?",
    options: ["push()", "unshift()", "shift()", "prepend()"],
    answer: "unshift()"
  },
  {
    question: "2) What is the output of: console.log(typeof null);",
    options: ["null", "undefined", "object", "string"],
    answer: "object"
  },
  {
    question: "3) Which statement creates a block scope?",
    options: ["if", "for", "while", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "4) What is the result of: '10' - 5;",
    options: ["5", "105", "NaN", "Error"],
    answer: "5"
  },
  {
    question: "5) Which keyword prevents a variable from being reassigned?",
    options: ["let", "const", "var", "static"],
    answer: "const"
  },
  {
    question: "6) Which method is used to sort elements in an array?",
    options: ["order()", "sort()", "arrange()", "sequence()"],
    answer: "sort()"
  },
  {
    question: "7) What is the output of: console.log(0 === false);",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: "8) Which function executes code repeatedly with a time interval?",
    options: ["setTimeout()", "setInterval()", "repeat()", "loop()"],
    answer: "setInterval()"
  },
  {
    question: "9) Which method returns part of an array without changing it?",
    options: ["splice()", "slice()", "split()", "substring()"],
    answer: "slice()"
  },
  {
    question: "10) What is the output of: console.log(isNaN('abc'));",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  }
];
// level2
const jsIntermediateLevel3 = [
  {
    question: "1) Which operator is used to spread elements of an array?",
    options: ["...", "++", "**", "&&"],
    answer: "..."
  },
  {
    question: "2) What is the output of: console.log(!!'Hello');",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  },
  {
    question: "3) Which array method is used to filter elements?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    answer: "filter()"
  },
  {
    question: "4) Which function combines array values into a single value?",
    options: ["map()", "reduce()", "concat()", "filter()"],
    answer: "reduce()"
  },
  {
    question: "5) What is the output of: console.log('5' === 5);",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: "6) Which method is used to find the index of an element in an array?",
    options: ["indexOf()", "find()", "search()", "position()"],
    answer: "indexOf()"
  },
  {
    question: "7) What is the output of: console.log(typeof []);",
    options: ["array", "object", "list", "undefined"],
    answer: "object"
  },
  {
    question: "8) Which symbol is used for template literals?",
    options: ["''", "\"\"", "``", "()"],
    answer: "``"
  },
  {
    question: "9) Which method checks if all elements satisfy a condition?",
    options: ["some()", "every()", "filter()", "all()"],
    answer: "every()"
  },
  {
    question: "10) Which method is used to convert a number to a string?",
    options: ["parseInt()", "toString()", "String()", "Both 2 and 3"],
    answer: "Both 2 and 3"
  }
];
//assignment 
const jsIntermediateAssignment = [
  {
    question: "1) Write a JavaScript function to reverse a string 'hello'. What is the output?",
    options: ["olleh", "hello", "error", "undefined"],
    answer: "olleh"
  },
  {
    question: "2) What will be the output of: console.log([1,2,3].map(x => x*2));",
    options: ["[2,4,6]", "[1,2,3,1,2,3]", "[2,3,4]", "error"],
    answer: "[2,4,6]"
  },
  {
    question: "3) Create an array of numbers and filter out even numbers. Which method will you use?",
    options: ["map()", "reduce()", "filter()", "forEach()"],
    answer: "filter()"
  },
  {
    question: "4) What is the result of: ['a','b','c'].includes('b');",
    options: ["true", "false", "undefined", "error"],
    answer: "true"
  },
  {
    question: "5) Which function is best to combine multiple arrays?",
    options: ["push()", "concat()", "join()", "merge()"],
    answer: "concat()"
  },
  {
    question: "6) Write a code to get the sum of numbers in [1,2,3]. Which method helps?",
    options: ["filter()", "reduce()", "map()", "sort()"],
    answer: "reduce()"
  },
  {
    question: "7) What will console.log(Math.max(...[10,20,30])) output?",
    options: ["30", "20", "10", "undefined"],
    answer: "30"
  },
  {
    question: "8) Which operator helps to copy all properties of one object into another?",
    options: ["spread (...)", "copy()", "Object.assign()", "Both 1 and 3"],
    answer: "Both 1 and 3"
  },
  {
    question: "9) What will console.log(['x','y'].length) output?",
    options: ["0", "1", "2", "undefined"],
    answer: "2"
  },
  {
    question: "10) Which method returns the first element that matches a condition?",
    options: ["filter()", "find()", "map()", "search()"],
    answer: "find()"
  }
];

// ✅ JavaScript Advanced - Level 1
const jsAdvancedLevel1Questions = [
  {
    question: "1) Which keyword is used to create a class in JavaScript?",
    options: ["class", "function", "object", "struct"],
    answer: "class"
  },
  {
    question: "2) What does the 'super' keyword do inside a class?",
    options: ["Creates a superclass", "Calls the parent class constructor", "Declares a method", "Imports a module"],
    answer: "Calls the parent class constructor"
  },
  {
    question: "3) Which built-in object is used for working with promises?",
    options: ["Promise", "Async", "Await", "Generator"],
    answer: "Promise"
  },
  {
    question: "4) What does the 'bind()' method do?",
    options: [
      "Binds an event to an element",
      "Creates a new function with a fixed 'this' value",
      "Merges two objects",
      "Stops event bubbling"
    ],
    answer: "Creates a new function with a fixed 'this' value"
  },
  {
    question: "5) Which operator is used for optional chaining in JavaScript?",
    options: [".", "??", "?.", "::"],
    answer: "?."
  },
  {
    question: "6) Which statement about JavaScript modules is true?",
    options: [
      "Modules cannot export functions",
      "Modules are only supported in Node.js",
      "Modules allow splitting code into reusable files",
      "Modules must be written in TypeScript"
    ],
    answer: "Modules allow splitting code into reusable files"
  },
  {
    question: "7) What does 'Object.freeze()' do?",
    options: [
      "Deletes an object",
      "Prevents adding, removing, or modifying object properties",
      "Converts object to JSON",
      "Locks only methods"
    ],
    answer: "Prevents adding, removing, or modifying object properties"
  },
  {
    question: "8) Which keyword is used with asynchronous functions?",
    options: ["async", "await", "defer", "future"],
    answer: "async"
  },
  {
    question: "9) What is a closure in JavaScript?",
    options: [
      "A function inside a loop",
      "A nested function that remembers variables from its outer scope",
      "A private method of a class",
      "An arrow function"
    ],
    answer: "A nested function that remembers variables from its outer scope"
  },
  {
    question: "10) Which method converts JSON data into an object?",
    options: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "JSON.toObject()"],
    answer: "JSON.parse()"
  }
];

// ✅ JavaScript Advanced - Level 2
const jsAdvancedLevel2Questions = [
  {
    question: "1) Which symbol is used to declare a generator function?",
    options: ["@", "function*", "#", "&"],
    answer: "function*"
  },
  {
    question: "2) Which of the following is NOT a JavaScript data structure?",
    options: ["Set", "Map", "Tuple", "WeakMap"],
    answer: "Tuple"
  },
  {
    question: "3) What does the 'await' keyword do?",
    options: [
      "Stops code execution permanently",
      "Waits for a Promise to resolve",
      "Declares an async function",
      "Pauses until an event listener fires"
    ],
    answer: "Waits for a Promise to resolve"
  },
  {
    question: "4) Which method is used to merge arrays?",
    options: ["concat()", "merge()", "push()", "combine()"],
    answer: "concat()"
  },
  {
    question: "5) What is the difference between 'let' and 'var'?",
    options: [
      "'let' is block-scoped, 'var' is function-scoped",
      "'let' is global, 'var' is private",
      "'var' is faster than 'let'",
      "No difference"
    ],
    answer: "'let' is block-scoped, 'var' is function-scoped"
  },
  {
    question: "6) Which method removes the last element of an array?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    answer: "pop()"
  },
  {
    question: "7) What does 'this' refer to in JavaScript?",
    options: [
      "The current file",
      "The global object always",
      "Depends on where it is called",
      "The parent class only"
    ],
    answer: "Depends on where it is called"
  },
  {
    question: "8) Which function converts a string to an integer?",
    options: ["parseInt()", "parseFloat()", "Number()", "int()"],
    answer: "parseInt()"
  },
  {
    question: "9) Which function is used to schedule code execution after a delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "schedule()"],
    answer: "setTimeout()"
  },
  {
    question: "10) Which operator is used to check both value and type?",
    options: ["=", "==", "===", "!=="],
    answer: "==="
  }
];

// ✅ JavaScript Advanced - Level 3
const jsAdvancedLevel3Questions = [
  {
    question: "1) Which built-in object provides mathematical functions?",
    options: ["Math", "Number", "Calc", "Arithmetic"],
    answer: "Math"
  },
  {
    question: "2) Which function creates a promise that resolves after all promises finish?",
    options: ["Promise.race()", "Promise.all()", "Promise.any()", "Promise.final()"],
    answer: "Promise.all()"
  },
  {
    question: "3) What is event delegation in JavaScript?",
    options: [
      "Passing events from child to parent",
      "Handling multiple child events at a parent level",
      "Delegating an event to another function",
      "Stopping event propagation"
    ],
    answer: "Handling multiple child events at a parent level"
  },
  {
    question: "4) Which function is used to serialize an object into a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "Object.toString()"],
    answer: "JSON.stringify()"
  },
  {
    question: "5) Which operator is used for nullish coalescing?",
    options: ["||", "??", "&&", "::"],
    answer: "??"
  },
  {
    question: "6) Which loop is best for iterating over object properties?",
    options: ["for", "forEach", "for...in", "for...of"],
    answer: "for...in"
  },
  {
    question: "7) Which function is used to continuously run code at intervals?",
    options: ["setTimeout()", "setInterval()", "requestAnimationFrame()", "repeat()"],
    answer: "setInterval()"
  },
  {
    question: "8) What is a WeakMap?",
    options: [
      "A map with weak references to keys",
      "A smaller version of Map",
      "An array-like structure",
      "A JSON object"
    ],
    answer: "A map with weak references to keys"
  },
  {
    question: "9) Which feature allows spreading array elements?",
    options: ["Spread operator (...)", "Concat", "Merge", "Push"],
    answer: "Spread operator (...)"
  },
  {
    question: "10) Which method is used to define getters and setters?",
    options: ["Object.defineProperty()", "Object.create()", "Object.assign()", "Object.set()"],
    answer: "Object.defineProperty()"
  }
];

// ✅ JavaScript Advanced - Assignment
const jsAdvancedAssignment = [
  {
    question: "1) Which feature allows functions to be executed asynchronously in JavaScript?",
    options: ["setTimeout", "Promise", "Event loop", "Callback"],
    answer: "Promise"
  },
  {
    question: "2) Which JavaScript method is used to combine all elements of an array into a single string?",
    options: ["join()", "concat()", "toString()", "merge()"],
    answer: "join()"
  },
  {
    question: "3) Which statement is true about JavaScript closures?",
    options: [
      "Closures allow functions to access variables from outer scope",
      "Closures only work inside classes",
      "Closures cannot access global variables",
      "Closures are the same as callbacks"
    ],
    answer: "Closures allow functions to access variables from outer scope"
  },
  {
    question: "4) Which JavaScript method is used to create a deep copy of an object?",
    options: [
      "Object.assign()",
      "JSON.parse(JSON.stringify(obj))",
      "spread operator (...)",
      "clone()"
    ],
    answer: "JSON.parse(JSON.stringify(obj))"
  },
  {
    question: "5) Which ES6 feature allows you to extract values from arrays or objects?",
    options: ["Template literals", "Destructuring", "Arrow functions", "Spread operator"],
    answer: "Destructuring"
  }
];

// python 
//begginer

// ---------------- Python Beginner Level 1 ----------------
const pythonBeginnerLevel1 = [
  {
    question: "1) Which symbol is used to start a comment in Python?",
    options: ["//", "#", "/* */", "<!-- -->"],
    answer: "#"
  },
  {
    question: "2) What is the correct file extension for Python files?",
    options: [".py", ".python", ".pt", ".p"],
    answer: ".py"
  },
  {
    question: "3) Which function is used to output text in Python?",
    options: ["echo()", "printf()", "print()", "log()"],
    answer: "print()"
  },
  {
    question: "4) Which data type is used to store True/False values?",
    options: ["int", "bool", "string", "float"],
    answer: "bool"
  },
  {
    question: "5) Which operator is used for exponentiation in Python?",
    options: ["^", "**", "exp()", "pow()"],
    answer: "**"
  },
  {
    question: "6) What will be the output of: print(type(3))?",
    options: ["int", "float", "number", "string"],
    answer: "int"
  },
  {
    question: "7) Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "method"],
    answer: "def"
  },
  {
    question: "8) Which data type is immutable in Python?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    answer: "Tuple"
  },
  {
    question: "9) Which function gives the length of a string?",
    options: ["count()", "size()", "length()", "len()"],
    answer: "len()"
  },
  {
    question: "10) What is the result of: 10 // 3?",
    options: ["3.3", "3", "3.0", "error"],
    answer: "3"
  }
];

// ---------------- Python Beginner Level 2 ----------------
const pythonBeginnerLevel2 = [
  {
    question: "1) What will be the output of: print(2 == '2')?",
    options: ["True", "False", "Error", "2"],
    answer: "False"
  },
  {
    question: "2) Which collection type stores unique values?",
    options: ["List", "Set", "Dictionary", "Tuple"],
    answer: "Set"
  },
  {
    question: "3) Which method adds an element to a list?",
    options: ["append()", "add()", "insert()", "push()"],
    answer: "append()"
  },
  {
    question: "4) Which operator is used for floor division?",
    options: ["/", "//", "%", "**"],
    answer: "//"
  },
  {
    question: "5) Which function converts string into integer?",
    options: ["str()", "float()", "int()", "convert()"],
    answer: "int()"
  },
  {
    question: "6) Which of these is NOT a Python keyword?",
    options: ["class", "return", "lambda", "define"],
    answer: "define"
  },
  {
    question: "7) Which loop executes at least once?",
    options: ["for loop", "while loop", "do...while loop", "None"],
    answer: "None"
  },
  {
    question: "8) Which method is used to remove an item by index in a list?",
    options: ["pop()", "remove()", "del", "discard()"],
    answer: "pop()"
  },
  {
    question: "9) What is the output of: len({'a':1, 'b':2})?",
    options: ["2", "4", "1", "error"],
    answer: "2"
  },
  {
    question: "10) Which keyword is used to exit a loop early?",
    options: ["continue", "stop", "exit", "break"],
    answer: "break"
  }
];

// ---------------- Python Beginner Level 3 ----------------
const pythonBeginnerLevel3 = [
  {
    question: "1) Which of these is used to handle exceptions?",
    options: ["try-except", "if-else", "switch", "error-check"],
    answer: "try-except"
  },
  {
    question: "2) Which keyword is used to create a class?",
    options: ["class", "object", "struct", "define"],
    answer: "class"
  },
  {
    question: "3) Which operator is used for logical AND?",
    options: ["&", "&&", "and", "AND()"],
    answer: "and"
  },
  {
    question: "4) Which function is used to read input from user?",
    options: ["scan()", "read()", "input()", "get()"],
    answer: "input()"
  },
  {
    question: "5) What is the output of: bool('')?",
    options: ["True", "False", "Error", "None"],
    answer: "False"
  },
  {
    question: "6) What is the default value of an uninitialized variable?",
    options: ["None", "0", "undefined", "error"],
    answer: "error"
  },
  {
    question: "7) Which data type is a sequence in Python?",
    options: ["list", "tuple", "string", "All of these"],
    answer: "All of these"
  },
  {
    question: "8) What is the output of: type([])?",
    options: ["list", "dict", "set", "tuple"],
    answer: "list"
  },
  {
    question: "9) Which keyword is used to return a value from function?",
    options: ["break", "stop", "return", "yield"],
    answer: "return"
  },
  {
    question: "10) Which function gives ASCII value of a character?",
    options: ["chr()", "ascii()", "ord()", "charCode()"],
    answer: "ord()"
  }
];

// ---------------- Python Beginner Assignment (multi-option) ----------------
const pythonBeginnerAssignment = [
  {
    question: "1) Which function is used to display output in Python?",
    options: ["echo()", "print()", "display()", "write()"],
    answer: "print()"
  },
  {
    question: "2) What is the correct file extension for Python files?",
    options: [".py", ".python", ".pt", ".p"],
    answer: ".py"
  },
  {
    question: "3) Which symbol is used to write comments in Python?",
    options: ["//", "/* */", "#", "--"],
    answer: "#"
  },
  {
    question: "4) Which data type is used to store True/False values?",
    options: ["int", "str", "bool", "float"],
    answer: "bool"
  },
  {
    question: "5) Which function is used to get user input in Python?",
    options: ["scanf()", "input()", "read()", "gets()"],
    answer: "input()"
  }
];

// intermidiate

// ---------------- Python Intermediate Level 1 ----------------
const pythonIntermediateLevel1 = [
  {
    question: "1) What is the output of: print('5' * 3)?",
    options: ["15", "555", "error", "53"],
    answer: "555"
  },
  {
    question: "2) Which keyword is used to create a generator?",
    options: ["yield", "generate", "return", "gen"],
    answer: "yield"
  },
  {
    question: "3) What will be the type of: {1, 2, 3}?",
    options: ["list", "set", "dict", "tuple"],
    answer: "set"
  },
  {
    question: "4) What is the result of: bool([])?",
    options: ["True", "False", "None", "Error"],
    answer: "False"
  },
  {
    question: "5) Which module is used for regular expressions?",
    options: ["regex", "re", "regexp", "search"],
    answer: "re"
  },
  {
    question: "6) Which of the following is a Python built-in module?",
    options: ["os", "sys", "math", "All of these"],
    answer: "All of these"
  },
  {
    question: "7) Which operator is overloaded by __add__()?",
    options: ["+", "-", "*", "/"],
    answer: "+"
  },
  {
    question: "8) Which statement is used to handle multiple exceptions?",
    options: ["try...except", "try...except...finally", "try...(except1, except2)", "all"],
    answer: "try...(except1, except2)"
  },
  {
    question: "9) Which function returns an iterator?",
    options: ["iter()", "list()", "tuple()", "next()"],
    answer: "iter()"
  },
  {
    question: "10) Which operator checks object identity?",
    options: ["==", "is", "equals()", "==="],
    answer: "is"
  }
];

// ---------------- Python Intermediate Level 2 ----------------
const pythonIntermediateLevel2 = [
  {
    question: "1) What is the output of: list('python')?",
    options: ["['python']", "['p','y','t','h','o','n']", "['pyt','hon']", "error"],
    answer: "['p','y','t','h','o','n']"
  },
  {
    question: "2) Which method removes all items from a dictionary?",
    options: ["remove()", "delete()", "clear()", "pop()"],
    answer: "clear()"
  },
  {
    question: "3) What is the result of: {1: 'a', 2: 'b'}.keys()?",
    options: ["[1,2]", "dict_keys([1,2])", "['a','b']", "error"],
    answer: "dict_keys([1,2])"
  },
  {
    question: "4) What is the output of: 'Python'.lower()?",
    options: ["PYTHON", "python", "Error", "Python"],
    answer: "python"
  },
  {
    question: "5) Which function is used to sort a list in place?",
    options: ["sort()", "sorted()", "order()", "arrange()"],
    answer: "sort()"
  },
  {
    question: "6) What is the result of: [i for i in range(3)]?",
    options: ["[1,2,3]", "[0,1,2]", "[0,1,2,3]", "error"],
    answer: "[0,1,2]"
  },
  {
    question: "7) Which keyword is used to inherit a class?",
    options: ["inherit", "extends", "super", "class Child(Parent)"],
    answer: "class Child(Parent)"
  },
  {
    question: "8) Which of the following is a Python immutable set?",
    options: ["set", "frozenset", "tuple", "list"],
    answer: "frozenset"
  },
  {
    question: "9) What is the result of: tuple([1,2,3])?",
    options: ["[1,2,3]", "(1,2,3)", "{1,2,3}", "error"],
    answer: "(1,2,3)"
  },
  {
    question: "10) Which operator is overloaded by __eq__()?",
    options: ["==", "!=", "<", ">"],
    answer: "=="
  }
];

// ---------------- Python Intermediate Level 3 ----------------
const pythonIntermediateLevel3 = [
  {
    question: "1) Which keyword is used for anonymous functions?",
    options: ["def", "lambda", "func", "anon"],
    answer: "lambda"
  },
  {
    question: "2) What is the output of: list(map(lambda x:x*2, [1,2,3]))?",
    options: ["[2,4,6]", "[1,2,3]", "[2,3,4]", "error"],
    answer: "[2,4,6]"
  },
  {
    question: "3) Which method is used to open a file in write mode?",
    options: ["open('file','r')", "open('file','w')", "open('file','rw')", "file.open()"],
    answer: "open('file','w')"
  },
  {
    question: "4) Which statement is used with 'with' for file handling?",
    options: ["close()", "open()", "as", "using"],
    answer: "as"
  },
  {
    question: "5) Which module is used for JSON in Python?",
    options: ["json", "pickle", "marshal", "data"],
    answer: "json"
  },
  {
    question: "6) Which of the following is used for iteration?",
    options: ["next()", "iter()", "for loop", "All of these"],
    answer: "All of these"
  },
  {
    question: "7) Which method converts object to string in JSON?",
    options: ["dump()", "dumps()", "str()", "jsonify()"],
    answer: "dumps()"
  },
  {
    question: "8) Which function checks memory address of an object?",
    options: ["id()", "addr()", "hex()", "hash()"],
    answer: "id()"
  },
  {
    question: "9) Which is correct for list comprehension?",
    options: ["[x for x in range(5)]", "[for x in range(5)]", "[x -> range(5)]", "comp(range(5))"],
    answer: "[x for x in range(5)]"
  },
  {
    question: "10) What is the output of: ' '.join(['a','b','c'])?",
    options: ["abc", "a b c", "['a','b','c']", "error"],
    answer: "a b c"
  }
];

// ---------------- Python Intermediate Assignment (multi-option) ----------------
const pythonIntermediateAssignment = [
  {
    question: "1) Which keyword is used to handle exceptions in Python?",
    options: ["try", "catch", "except", "error"],
    answer: "except"
  },
  {
    question: "2) Which of the following is an immutable data type?",
    options: ["list", "set", "tuple", "dict"],
    answer: "tuple"
  },
  {
    question: "3) Which operator is used for floor division in Python?",
    options: ["/", "//", "%", "**"],
    answer: "//"
  },
  {
    question: "4) What will `len({'a':1,'b':2,'c':3})` return?",
    options: ["2", "3", "1", "Error"],
    answer: "3"
  },
  {
    question: "5) Which function is used to open a file in Python?",
    options: ["file()", "open()", "read()", "fopen()"],
    answer: "open()"
  }
];


// advanced

// ---------------- Python Advanced Level 1 ----------------
const pythonAdvancedLevel1 = [
  {
    question: "1) Which of the following is used to define an anonymous function in Python?",
    options: ["def", "lambda", "func", "function"],
    answer: "lambda"
  },
  {
    question: "2) Which module in Python supports regular expressions?",
    options: ["regex", "pyregex", "re", "expressions"],
    answer: "re"
  },
  {
    question: "3) What will be the output of: bool('False')?",
    options: ["True", "False", "Error", "None"],
    answer: "True"
  },
  {
    question: "4) Which of the following is immutable?",
    options: ["list", "dict", "set", "tuple"],
    answer: "tuple"
  },
  {
    question: "5) Which of these is used for exception handling in Python?",
    options: ["try-except", "do-catch", "handle", "try-catch"],
    answer: "try-except"
  }
];

// ---------------- Python Advanced Level 2 ----------------
const pythonAdvancedLevel2 = [
  {
    question: "1) Which keyword is used for creating a generator in Python?",
    options: ["yield", "return", "generate", "next"],
    answer: "yield"
  },
  {
    question: "2) What is the output of: list(set([1,2,2,3]))?",
    options: ["[1,2,3]", "[1,2,2,3]", "[2,3]", "Error"],
    answer: "[1,2,3]"
  },
  {
    question: "3) Which function is used to get the memory address of an object?",
    options: ["mem()", "address()", "id()", "loc()"],
    answer: "id()"
  },
  {
    question: "4) What is Python's method resolution order (MRO) used for?",
    options: ["Resolving operator precedence", "Method overloading", "Class inheritance hierarchy", "Error handling"],
    answer: "Class inheritance hierarchy"
  },
  {
    question: "5) Which module is used for multithreading in Python?",
    options: ["multiprocessing", "os", "threading", "concurrent"],
    answer: "threading"
  }
];

// ---------------- Python Advanced Level 3 ----------------
const pythonAdvancedLevel3 = [
  {
    question: "1) Which of the following is true about Python decorators?",
    options: ["They are used to modify functions", "They must return a string", "They can only be applied to classes", "They cannot accept arguments"],
    answer: "They are used to modify functions"
  },
  {
    question: "2) Which protocol is implemented by iterators in Python?",
    options: ["__next__ and __iter__", "__getitem__", "__call__", "__iteritems__"],
    answer: "__next__ and __iter__"
  },
  {
    question: "3) What does the 'with' statement in Python help with?",
    options: ["Looping", "Context management", "Exception handling", "Importing modules"],
    answer: "Context management"
  },
  {
    question: "4) What is the purpose of the 'global' keyword?",
    options: ["Declares global variables", "Imports global modules", "Deletes variables", "Creates constants"],
    answer: "Declares global variables"
  },
  {
    question: "5) Which Python module is used for working with asynchronous I/O?",
    options: ["asyncio", "io", "sys", "os"],
    answer: "asyncio"
  }
];

// ---------------- Python Advanced Assignment ----------------
const pythonAdvancedAssignment = [
  {
    question: "1) Which module in Python is used for working with regular expressions?",
    options: ["regex", "re", "express", "match"],
    answer: "re"
  },
  {
    question: "2) Which statement is true about Python generators?",
    options: [
      "They return a list",
      "They use the yield keyword",
      "They store all values in memory",
      "They cannot be iterated"
    ],
    answer: "They use the yield keyword"
  },
  {
    question: "3) Which built-in function is used to get the memory address of an object?",
    options: ["address()", "id()", "location()", "ref()"],
    answer: "id()"
  },
  {
    question: "4) Which Python feature allows multiple inheritance?",
    options: ["Abstract classes", "Interfaces", "Classes", "Method Resolution Order (MRO)"],
    answer: "Method Resolution Order (MRO)"
  },
  {
    question: "5) Which Python module is commonly used for multithreading?",
    options: ["thread", "multiprocessing", "threading", "asyncio"],
    answer: "threading"
  }
];


// ---------------- Java Beginner Level 2 ----------------
const javaBeginnerLevel2 = [
  {
    question: "1) Which data type is used to store decimal numbers in Java?",
    options: ["int", "float", "boolean", "char"],
    answer: "float"
  },
  {
    question: "2) What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    answer: "false"
  },
  {
    question: "3) Which operator is used for string concatenation in Java?",
    options: ["+", "&", "concat", "."],
    answer: "+"
  },
  {
    question: "4) Which keyword is used to create objects in Java?",
    options: ["new", "create", "make", "object"],
    answer: "new"
  },
  {
    question: "5) Which method is used to find the length of a string in Java?",
    options: ["length", "size()", "len()", "length()"],
    answer: "length()"
  }
];

// ---------------- Java Beginner Level 3 ----------------
const javaBeginnerLevel3 = [
  {
    question: "1) Which access modifier allows access only within the same package?",
    options: ["private", "public", "protected", "default"],
    answer: "default"
  },
  {
    question: "2) Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
  },
  {
    question: "3) Which statement is used to exit a loop prematurely?",
    options: ["stop", "end", "break", "exit"],
    answer: "break"
  },
  {
    question: "4) What is the size of an int in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    answer: "4 bytes"
  },
  {
    question: "5) Which of these is used to handle exceptions in Java?",
    options: ["try-catch", "do-catch", "try-handle", "error-check"],
    answer: "try-catch"
  }
];

// ---------------- Java Beginner Assignment ----------------
const javaBeginnerAssignment = [
  {
    question: "1) Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()"
  },
  {
    question: "2) Which symbol is used to end a statement in Java?",
    options: [".", ";", ":", ","],
    answer: ";"
  },
  {
    question: "3) Which keyword is used to create an object in Java?",
    options: ["create", "new", "class", "object"],
    answer: "new"
  },
  {
    question: "4) Which data type is used to store characters in Java?",
    options: ["String", "char", "Character", "text"],
    answer: "char"
  },
  {
    question: "5) Which of the following is not a primitive type in Java?",
    options: ["int", "float", "String", "boolean"],
    answer: "String"
  }
];

// intermidiate

// ---------------- Java Intermediate Level 1 ----------------
const javaIntermediateLevel1 = [
  {
    question: "1) Which of the following is used to achieve runtime polymorphism in Java?",
    options: ["Method overloading", "Method overriding", "Constructor overloading", "Static methods"],
    answer: "Method overriding"
  },
  {
    question: "2) Which keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "inherits", "super"],
    answer: "extends"
  },
  {
    question: "3) Which of these keywords is used to prevent inheritance?",
    options: ["static", "final", "private", "const"],
    answer: "final"
  },
  {
    question: "4) Which method is called automatically when an object is created?",
    options: ["main()", "start()", "constructor", "init()"],
    answer: "constructor"
  },
  {
    question: "5) Which operator is used to compare object references?",
    options: ["==", "equals()", "!=", "compare()"],
    answer: "=="
  }
];

// ---------------- Java Intermediate Level 2 ----------------
const javaIntermediateLevel2 = [
  {
    question: "1) Which interface is implemented by all collection classes in Java?",
    options: ["Collection", "List", "Iterable", "Set"],
    answer: "Iterable"
  },
  {
    question: "2) Which of these classes is synchronized?",
    options: ["ArrayList", "HashMap", "Vector", "HashSet"],
    answer: "Vector"
  },
  {
    question: "3) Which of the following is not a valid Map implementation?",
    options: ["HashMap", "TreeMap", "LinkedHashMap", "ArrayMap"],
    answer: "ArrayMap"
  },
  {
    question: "4) Which method is used to start a thread in Java?",
    options: ["run()", "execute()", "start()", "init()"],
    answer: "start()"
  },
  {
    question: "5) Which package contains the Random class?",
    options: ["java.math", "java.random", "java.util", "java.io"],
    answer: "java.util"
  }
];

// ---------------- Java Intermediate Level 3 ----------------
const javaIntermediateLevel3 = [
  {
    question: "1) Which keyword is used to refer to the parent class constructor?",
    options: ["super", "this", "parent", "base"],
    answer: "super"
  },
  {
    question: "2) Which exception is thrown when dividing by zero?",
    options: ["NullPointerException", "ArithmeticException", "NumberFormatException", "IOException"],
    answer: "ArithmeticException"
  },
  {
    question: "3) Which class is the root of all classes in Java?",
    options: ["Object", "Base", "Root", "System"],
    answer: "Object"
  },
  {
    question: "4) Which method in the Thread class is used to pause execution?",
    options: ["wait()", "sleep()", "pause()", "stop()"],
    answer: "sleep()"
  },
  {
    question: "5) Which keyword is used to implement an interface in Java?",
    options: ["extends", "implements", "interface", "inherits"],
    answer: "implements"
  }
];

// ---------------- Java Intermediate Assignment ----------------
const javaIntermediateAssignment = [
  {
    question: "1) Which concept allows a class to inherit from another class in Java?",
    options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    answer: "Inheritance"
  },
  {
    question: "2) Which keyword is used to prevent a class from being inherited?",
    options: ["stop", "final", "static", "private"],
    answer: "final"
  },
  {
    question: "3) Which access modifier makes a variable accessible within the same package?",
    options: ["private", "protected", "public", "default"],
    answer: "default"
  },
  {
    question: "4) Which of these is a wrapper class in Java?",
    options: ["int", "Integer", "number", "Num"],
    answer: "Integer"
  },
  {
    question: "5) Which interface is implemented to sort objects in natural order?",
    options: ["Serializable", "Comparable", "Comparator", "Iterable"],
    answer: "Comparable"
  }
];



//advanced
// ---------------- Java Advanced Level 1 ----------------
const javaAdvancedLevel1 = [
  {
    question: "1) Which Java keyword is used to create a custom annotation?",
    options: ["@interface", "annotation", "interface", "annotationType"],
    answer: "@interface"
  },
  {
    question: "2) Which class in Java is used to handle big decimal numbers with precision?",
    options: ["BigInteger", "BigDecimal", "Math", "NumberFormat"],
    answer: "BigDecimal"
  },
  {
    question: "3) Which mechanism is used by JVM to load classes dynamically?",
    options: ["ClassLoader", "Reflection", "Serialization", "Executor"],
    answer: "ClassLoader"
  },
  {
    question: "4) Which package provides concurrency utilities like ExecutorService?",
    options: ["java.util.concurrent", "java.thread", "java.util.stream", "java.multithreading"],
    answer: "java.util.concurrent"
  },
  {
    question: "5) Which Java API provides functional-style operations on collections?",
    options: ["Streams API", "Collections API", "Concurrency API", "IO API"],
    answer: "Streams API"
  }
];

// ---------------- Java Advanced Level 2 ----------------
const javaAdvancedLevel2 = [
  {
    question: "1) Which Java keyword is used for creating a non-capturing lambda expression?",
    options: ["->", "=>", "::", "lambda"],
    answer: "->"
  },
  {
    question: "2) Which is true about Java Streams?",
    options: ["They support lazy evaluation", "They can be parallelized", "They modify the source collection", "They always produce infinite sequences"],
    answer: "They support lazy evaluation"
  },
  {
    question: "3) Which interface is a functional interface in Java?",
    options: ["Runnable", "Comparable", "Callable", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "4) Which API is used for reactive programming in Java?",
    options: ["RxJava", "Reactor", "CompletableFuture", "Both RxJava and Reactor"],
    answer: "Both RxJava and Reactor"
  },
  {
    question: "5) Which is NOT a feature of Java 8?",
    options: ["Lambdas", "Streams", "Default methods", "Modules"],
    answer: "Modules"
  }
];

// ---------------- Java Advanced Level 3 ----------------
const javaAdvancedLevel3 = [
  {
    question: "1) Which of these is a valid Java memory area managed by JVM?",
    options: ["Heap", "Stack", "Metaspace", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "2) Which garbage collector is introduced in Java 9?",
    options: ["Serial GC", "Parallel GC", "G1 GC", "ZGC"],
    answer: "G1 GC"
  },
  {
    question: "3) Which design pattern is used in Java I/O classes?",
    options: ["Observer Pattern", "Decorator Pattern", "Factory Pattern", "Singleton Pattern"],
    answer: "Decorator Pattern"
  },
  {
    question: "4) Which reflection class is used to access private fields?",
    options: ["Class", "Method", "Field", "Constructor"],
    answer: "Field"
  },
  {
    question: "5) Which keyword allows controlling access to a package?",
    options: ["package-private", "module", "exports", "sealed"],
    answer: "exports"
  }
];

// ---------------- Java Advanced Assignment ----------------
const javaAdvancedAssignment = [
  {
    question: "1) Which Java feature is used to handle multiple threads?",
    options: ["Threading", "Concurrency", "Synchronization", "Multithreading"],
    answer: "Multithreading"
  },
  {
    question: "2) Which keyword is used to define a block that must be executed whether an exception occurs or not?",
    options: ["finally", "final", "throw", "catch"],
    answer: "finally"
  },
  {
    question: "3) Which Java concept is used to achieve runtime polymorphism?",
    options: ["Method Overloading", "Method Overriding", "Encapsulation", "Abstraction"],
    answer: "Method Overriding"
  },
  {
    question: "4) Which package in Java contains collection classes?",
    options: ["java.io", "java.util", "java.sql", "java.lang"],
    answer: "java.util"
  },
  {
    question: "5) Which type of class cannot be instantiated directly?",
    options: ["Concrete class", "Abstract class", "Final class", "Inner class"],
    answer: "Abstract class"
  }
];


// ---------------- C# Beginner Level 1 ----------------
const csharpBeginnerLevel1 = [
  {
    question: "1) Which keyword is used to define a class in C#?",
    options: ["class", "struct", "define", "object"],
    answer: "class"
  },
  {
    question: "2) What is the default value of an int in C#?",
    options: ["null", "0", "1", "undefined"],
    answer: "0"
  },
  {
    question: "3) Which method is the entry point of a C# program?",
    options: ["Start()", "Main()", "Run()", "Execute()"],
    answer: "Main()"
  },
  {
    question: "4) Which data type stores true/false values?",
    options: ["int", "bool", "string", "char"],
    answer: "bool"
  },
  {
    question: "5) Which symbol is used for single-line comments?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  }
];

// ---------------- C# Beginner Level 2 ----------------
const csharpBeginnerLevel2 = [
  {
    question: "1) Which keyword is used to create objects in C#?",
    options: ["create", "object", "new", "instance"],
    answer: "new"
  },
  {
    question: "2) Which operator is used for string concatenation?",
    options: ["+", "&", "*", "concat"],
    answer: "+"
  },
  {
    question: "3) Which loop runs at least once in C#?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
  },
  {
    question: "4) Which access modifier makes a member accessible only inside the class?",
    options: ["public", "private", "protected", "internal"],
    answer: "private"
  },
  {
    question: "5) Which keyword is used to inherit a class?",
    options: ["this", "extends", "inherits", ":"],
    answer: ":"
  }
];

// ---------------- C# Beginner Level 3 ----------------
const csharpBeginnerLevel3 = [
  {
    question: "1) Which collection allows key-value pairs in C#?",
    options: ["Array", "List", "Dictionary", "Queue"],
    answer: "Dictionary"
  },
  {
    question: "2) Which keyword is used for exception handling?",
    options: ["catch", "throw", "try", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "3) Which method converts string to integer in C#?",
    options: ["ToInt()", "Convert.ToInt32()", "ParseInt()", "Int32.Parse()"],
    answer: "Convert.ToInt32()"
  },
  {
    question: "4) What is boxing in C#?",
    options: ["Converting object to value type", "Converting value type to object", "Copying values", "None"],
    answer: "Converting value type to object"
  },
  {
    question: "5) Which keyword prevents class inheritance?",
    options: ["sealed", "const", "static", "readonly"],
    answer: "sealed"
  }
];

// ---------------- C# Beginner Assignment ----------------
const csharpBeginnerAssignment = [
  {
    question: "1) What is the file extension for a C# source code file?",
    options: [".java", ".cs", ".c", ".cpp"],
    answer: ".cs"
  },
  {
    question: "2) Which method is the entry point of a C# program?",
    options: ["Start()", "Run()", "Main()", "Execute()"],
    answer: "Main()"
  },
  {
    question: "3) Which data type is used to store true or false values?",
    options: ["int", "bool", "boolean", "bit"],
    answer: "bool"
  },
  {
    question: "4) Which symbol is used to end a statement in C#?",
    options: [".", ";", ":", ","],
    answer: ";"
  },
  {
    question: "5) Which keyword is used to create an object in C#?",
    options: ["new", "create", "class", "object"],
    answer: "new"
  }
];


// ---------------- C# Intermediate Level 1 ----------------
const csharpIntermediateLevel1 = [
  {
    question: "1) Which keyword is used for polymorphism in C#?",
    options: ["virtual", "override", "abstract", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "2) Which operator is used for null-coalescing?",
    options: ["??", "?.", "::", "!="],
    answer: "??"
  },
  {
    question: "3) Which keyword defines an interface?",
    options: ["interface", "implements", "protocol", "abstract"],
    answer: "interface"
  },
  {
    question: "4) Which is a non-generic collection?",
    options: ["ArrayList", "List<T>", "Dictionary<TKey,TValue>", "Queue<T>"],
    answer: "ArrayList"
  },
  {
    question: "5) Which statement releases unmanaged resources?",
    options: ["delete", "free", "using", "release"],
    answer: "using"
  }
];

// ---------------- C# Intermediate Level 2 ----------------
const csharpIntermediateLevel2 = [
  {
    question: "1) Which is true about structs in C#?",
    options: ["They are value types", "They support inheritance", "They can implement interfaces", "Both A and C"],
    answer: "Both A and C"
  },
  {
    question: "2) Which is NOT a feature of C# properties?",
    options: ["They can have get/set", "They are accessed like fields", "They always require backing fields", "They can be auto-implemented"],
    answer: "They always require backing fields"
  },
  {
    question: "3) Which keyword is used to define constant values?",
    options: ["const", "static", "readonly", "define"],
    answer: "const"
  },
  {
    question: "4) Which delegate represents a method that returns void?",
    options: ["Func<>", "Action<>", "Predicate<>", "EventHandler"],
    answer: "Action<>"
  },
  {
    question: "5) Which statement is correct about LINQ?",
    options: ["It works only with arrays", "It works with collections", "It works with databases", "It works with all of the above"],
    answer: "It works with all of the above"
  }
];

// ---------------- C# Intermediate Level 3 ----------------
const csharpIntermediateLevel3 = [
  {
    question: "1) Which keyword is used to implement multiple interfaces?",
    options: ["implements", ":", "with", "&"],
    answer: ":"
  },
  {
    question: "2) Which pattern is commonly used in events?",
    options: ["Observer", "Singleton", "Factory", "Adapter"],
    answer: "Observer"
  },
  {
    question: "3) Which operator is used for safe navigation in C#?",
    options: ["?.", "??", "::", "&&"],
    answer: "?."
  },
  {
    question: "4) Which keyword is used for asynchronous programming?",
    options: ["await", "async", "parallel", "task"],
    answer: "async"
  },
  {
    question: "5) Which is true about extension methods?",
    options: ["They must be static", "They extend existing types", "They require 'this' keyword", "All of the above"],
    answer: "All of the above"
  }
];

// ---------------- C# Intermediate Assignment ----------------
const csharpIntermediateAssignment = [
  {
    question: "1) Which keyword is used for inheritance in C#?",
    options: ["extends", "inherits", ":", "base"],
    answer: ":"
  },
  {
    question: "2) Which access modifier makes a member visible only within its own class?",
    options: ["protected", "private", "internal", "public"],
    answer: "private"
  },
  {
    question: "3) Which of these is a value type in C#?",
    options: ["class", "struct", "interface", "delegate"],
    answer: "struct"
  },
  {
    question: "4) Which interface is used for comparing objects in C#?",
    options: ["IEnumerable", "IComparable", "IComparer", "IDisposable"],
    answer: "IComparable"
  },
  {
    question: "5) Which keyword is used to define a constant in C#?",
    options: ["const", "final", "static", "readonly"],
    answer: "const"
  }
];

// ---------------- C# Advanced Level 1 ----------------
const csharpAdvancedLevel1 = [
  {
    question: "1) Which feature is introduced in C# 9?",
    options: ["Records", "Tuples", "LINQ", "Dynamic"],
    answer: "Records"
  },
  {
    question: "2) Which keyword prevents further overriding of a method?",
    options: ["final", "sealed", "static", "override"],
    answer: "sealed"
  },
  {
    question: "3) Which is a thread-safe collection?",
    options: ["List<T>", "ConcurrentDictionary", "Array", "Queue"],
    answer: "ConcurrentDictionary"
  },
  {
    question: "4) Which feature provides pattern matching?",
    options: ["switch expressions", "LINQ", "Delegates", "Attributes"],
    answer: "switch expressions"
  },
  {
    question: "5) Which is NOT a CLR component?",
    options: ["Garbage Collector", "JIT Compiler", "ClassLoader", "Security Engine"],
    answer: "ClassLoader"
  }
];

// ---------------- C# Advanced Level 2 ----------------
const csharpAdvancedLevel2 = [
  {
    question: "1) Which memory areas exist in .NET runtime?",
    options: ["Heap", "Stack", "Managed Heap", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "2) Which GC mode exists in .NET?",
    options: ["Workstation GC", "Server GC", "Background GC", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "3) Which operator is used for pattern matching?",
    options: ["is", "as", "==", "like"],
    answer: "is"
  },
  {
    question: "4) Which is NOT a C# async construct?",
    options: ["Task", "await", "async", "future"],
    answer: "future"
  },
  {
    question: "5) Which API is used for reactive programming?",
    options: ["Rx.NET", "TPL", "LINQ", "Entity Framework"],
    answer: "Rx.NET"
  }
];

// ---------------- C# Advanced Level 3 ----------------
const csharpAdvancedLevel3 = [
  {
    question: "1) Which is a new feature in C# 10?",
    options: ["Global using directives", "Top-level statements", "Records", "Dynamic"],
    answer: "Global using directives"
  },
  {
    question: "2) Which keyword supports immutability in records?",
    options: ["init", "readonly", "sealed", "immutable"],
    answer: "init"
  },
  {
    question: "3) Which runtime is cross-platform for .NET?",
    options: [".NET Framework", ".NET Core", "Mono", "Both .NET Core and Mono"],
    answer: "Both .NET Core and Mono"
  },
  {
    question: "4) Which design pattern is built into events?",
    options: ["Observer", "Decorator", "Singleton", "Factory"],
    answer: "Observer"
  },
  {
    question: "5) Which keyword is used for dynamic binding?",
    options: ["var", "dynamic", "object", "auto"],
    answer: "dynamic"
  }
];

// ---------------- C# Advanced Assignment ----------------
const csharpAdvancedAssignment = [
  {
    question: "1) Which keyword is used to handle exceptions in C#?",
    options: ["catch", "try", "throw", "finally"],
    answer: "catch"
  },
  {
    question: "2) Which feature allows a class to have multiple versions of the same method with different parameters?",
    options: ["Overriding", "Overloading", "Encapsulation", "Abstraction"],
    answer: "Overloading"
  },
  {
    question: "3) Which C# feature is used to release unmanaged resources?",
    options: ["Destructor", "Finalize()", "Dispose()", "GC.Collect()"],
    answer: "Dispose()"
  },
  {
    question: "4) Which keyword is used to define an abstract class in C#?",
    options: ["interface", "abstract", "virtual", "sealed"],
    answer: "abstract"
  },
  {
    question: "5) Which .NET collection type does not allow duplicate values?",
    options: ["List", "Dictionary", "HashSet", "Queue"],
    answer: "HashSet"
  }
];

// ---------------- C Beginner Level 1 ----------------
const cBeginnerLevel1 = [
  {
    question: "1) Who is the creator of the C programming language?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"],
    answer: "Dennis Ritchie"
  },
  {
    question: "2) Which symbol is used to end a statement in C?",
    options: [".", ";", ":", ","],
    answer: ";"
  },
  {
    question: "3) Which header file is required for printf() function?",
    options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
    answer: "<stdio.h>"
  },
  {
    question: "4) Which data type is used to store a single character?",
    options: ["char", "string", "int", "float"],
    answer: "char"
  },
  {
    question: "5) Which keyword is used to define a constant in C?",
    options: ["constant", "final", "#define", "const"],
    answer: "const"
  }
];

// ---------------- C Beginner Level 2 ----------------
const cBeginnerLevel2 = [
  {
    question: "1) Which operator is used to get the address of a variable?",
    options: ["*", "&", "#", "@"],
    answer: "&"
  },
  {
    question: "2) Which loop is guaranteed to execute at least once?",
    options: ["for loop", "while loop", "do-while loop", "none"],
    answer: "do-while loop"
  },
  {
    question: "3) Which format specifier is used for printing integers?",
    options: ["%d", "%c", "%s", "%f"],
    answer: "%d"
  },
  {
    question: "4) What is the size of int in C (commonly)?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    answer: "Depends on compiler"
  },
  {
    question: "5) Which function is used to find the length of a string?",
    options: ["strlen()", "strcat()", "strcpy()", "strcmp()"],
    answer: "strlen()"
  }
];

// ---------------- C Beginner Level 3 ----------------
const cBeginnerLevel3 = [
  {
    question: "1) Which keyword is used to create an infinite loop?",
    options: ["for(;;)", "while(1)", "goto", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "2) Which symbol is used for pointer declaration?",
    options: ["*", "&", "#", "%"],
    answer: "*"
  },
  {
    question: "3) What is the default return type of a C function if not specified?",
    options: ["int", "void", "float", "char"],
    answer: "int"
  },
  {
    question: "4) Which header file is required for malloc()?",
    options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<math.h>"],
    answer: "<stdlib.h>"
  },
  {
    question: "5) Which of the following is NOT a storage class in C?",
    options: ["auto", "register", "volatile", "static"],
    answer: "volatile"
  }
];

// ---------------- C Beginner Assignment ----------------
const cBeginnerAssignment = [
  {
    question: "1) What is the file extension of a C program?",
    options: [".cpp", ".java", ".c", ".cs"],
    answer: ".c"
  },
  {
    question: "2) Which function is the entry point of every C program?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()"
  },
  {
    question: "3) Which symbol is used to end a statement in C?",
    options: [".", ";", ":", ","],
    answer: ";"
  },
  {
    question: "4) Which format specifier is used to print an integer in C?",
    options: ["%c", "%s", "%f", "%d"],
    answer: "%d"
  },
  {
    question: "5) Which keyword is used to declare a constant in C?",
    options: ["final", "const", "constant", "let"],
    answer: "const"
  }
];

// ---------------- C Intermediate Level 1 ----------------
const cIntermediateLevel1 = [
  {
    question: "1) Which operator is used for conditional execution?",
    options: ["?:", "if", "switch", "else"],
    answer: "?:"
  },
  {
    question: "2) Which header file defines exit()?",
    options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<process.h>"],
    answer: "<stdlib.h>"
  },
  {
    question: "3) Which function is used to copy a string?",
    options: ["strcpy()", "strcat()", "strlen()", "strcmp()"],
    answer: "strcpy()"
  },
  {
    question: "4) What is the keyword for declaring constants?",
    options: ["constant", "final", "const", "define"],
    answer: "const"
  },
  {
    question: "5) Which is NOT a valid C operator?",
    options: ["sizeof", "typeof", "->", "++"],
    answer: "typeof"
  }
];

// ---------------- C Intermediate Level 2 ----------------
const cIntermediateLevel2 = [
  {
    question: "1) Which statement is used to jump out of a loop?",
    options: ["exit", "break", "continue", "return"],
    answer: "break"
  },
  {
    question: "2) Which operator is used for bitwise AND?",
    options: ["&", "&&", "|", "||"],
    answer: "&"
  },
  {
    question: "3) Which function compares two strings?",
    options: ["strcmp()", "strcpy()", "strlen()", "strcat()"],
    answer: "strcmp()"
  },
  {
    question: "4) Which header file is required for mathematical functions?",
    options: ["<stdio.h>", "<math.h>", "<stdlib.h>", "<string.h>"],
    answer: "<math.h>"
  },
  {
    question: "5) Which keyword is used to define a structure?",
    options: ["struct", "structure", "define", "object"],
    answer: "struct"
  }
];

// ---------------- C Intermediate Level 3 ----------------
const cIntermediateLevel3 = [
  {
    question: "1) Which keyword is used to define a union?",
    options: ["union", "struct", "combine", "object"],
    answer: "union"
  },
  {
    question: "2) Which function is used to open a file?",
    options: ["open()", "file()", "fopen()", "create()"],
    answer: "fopen()"
  },
  {
    question: "3) Which operator is used for dereferencing a pointer?",
    options: ["*", "&", "->", "%"],
    answer: "*"
  },
  {
    question: "4) Which statement is used to skip the current iteration of a loop?",
    options: ["exit", "skip", "continue", "break"],
    answer: "continue"
  },
  {
    question: "5) Which keyword is used to define enumerations?",
    options: ["enum", "enumeration", "list", "define"],
    answer: "enum"
  }
];

// ---------------- C Intermediate Assignment ----------------
const cIntermediateAssignment = [
  {
    question: "1) Which keyword is used to define a structure in C?",
    options: ["struct", "class", "record", "object"],
    answer: "struct"
  },
  {
    question: "2) Which operator is used to access members of a structure through a pointer?",
    options: [".", "->", "::", ":"],
    answer: "->"
  },
  {
    question: "3) What is the default return type of a C function if not specified?",
    options: ["int", "void", "float", "char"],
    answer: "int"
  },
  {
    question: "4) Which of the following is a valid storage class in C?",
    options: ["public", "protected", "static", "sealed"],
    answer: "static"
  },
  {
    question: "5) Which keyword is used to allocate memory dynamically in C?",
    options: ["malloc", "alloc", "new", "memory"],
    answer: "malloc"
  }
];


// ---------------- C Advanced Level 1 ----------------
const cAdvancedLevel1 = [
  {
    question: "1) Which function is used to position the file pointer?",
    options: ["fseek()", "ftell()", "rewind()", "fpos()"],
    answer: "fseek()"
  },
  {
    question: "2) Which function returns the current position of file pointer?",
    options: ["fpos()", "ftell()", "fseek()", "fopen()"],
    answer: "ftell()"
  },
  {
    question: "3) Which preprocessor directive is used to prevent multiple inclusions?",
    options: ["#ifndef", "#pragma once", "#define", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "4) Which operator is used for structure pointer access?",
    options: [".", "->", "::", "*"],
    answer: "->"
  },
  {
    question: "5) Which library is used for variable argument lists?",
    options: ["<stdio.h>", "<stdlib.h>", "<stdarg.h>", "<math.h>"],
    answer: "<stdarg.h>"
  }
];

// ---------------- C Advanced Level 2 ----------------
const cAdvancedLevel2 = [
  {
    question: "1) Which function is used to allocate memory and initialize to zero?",
    options: ["malloc()", "calloc()", "realloc()", "free()"],
    answer: "calloc()"
  },
  {
    question: "2) Which keyword is used for inline assembly in C?",
    options: ["asm", "inline", "assembly", "macro"],
    answer: "asm"
  },
  {
    question: "3) Which storage class gives a variable global life but file scope?",
    options: ["static", "extern", "register", "auto"],
    answer: "static"
  },
  {
    question: "4) Which function is used to move file pointer to beginning?",
    options: ["reset()", "rewind()", "ftell()", "fseek(0)"],
    answer: "rewind()"
  },
  {
    question: "5) Which is NOT a valid macro in C?",
    options: ["#define", "#include", "#undef", "#export"],
    answer: "#export"
  }
];

// ---------------- C Advanced Level 3 ----------------
const cAdvancedLevel3 = [
  {
    question: "1) Which memory allocation function increases existing block size?",
    options: ["malloc()", "calloc()", "realloc()", "free()"],
    answer: "realloc()"
  },
  {
    question: "2) Which function terminates a program immediately?",
    options: ["exit()", "abort()", "return", "stop()"],
    answer: "abort()"
  },
  {
    question: "3) Which keyword is used to restrict pointer aliasing in C?",
    options: ["restrict", "volatile", "const", "static"],
    answer: "restrict"
  },
  {
    question: "4) Which operator is overloaded in C for pointer arithmetic?",
    options: ["+", "-", "*", "&"],
    answer: "+ and -"
  },
  {
    question: "5) Which are predefined macros in C?",
    options: ["__FILE__", "__LINE__", "__DATE__", "All of the above"],
    answer: "All of the above"
  }
];

// ---------------- C Advanced Assignment ----------------
const cAdvancedAssignment = [
  {
    question: "1) Which header file is required for dynamic memory allocation in C?",
    options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
    answer: "<stdlib.h>"
  },
  {
    question: "2) Which function is used to deallocate dynamically allocated memory in C?",
    options: ["delete()", "free()", "remove()", "dispose()"],
    answer: "free()"
  },
  {
    question: "3) Which keyword is used to declare a function that does not return any value?",
    options: ["void", "null", "empty", "none"],
    answer: "void"
  },
  {
    question: "4) Which function is used to compare two strings in C?",
    options: ["strcmp()", "strcomp()", "compare()", "strncmp()"],
    answer: "strcmp()"
  },
  {
    question: "5) Which type of pointer points to no valid memory location?",
    options: ["wild pointer", "dangling pointer", "null pointer", "constant pointer"],
    answer: "null pointer"
  }
];



let currentQuestions = [];
let currentQuestionIndex = 0;
let startBtn = document.getElementById("start-quiz-btn");


function startQuiz(levelId) {
  //HTML  Levels
  // bigginer
  if (levelId === 'html-beginner-level1') currentQuestions = htmlLevel1Questions;
  if (levelId === 'html-beginner-level2') currentQuestions = htmlLevel2Questions;
  if (levelId === 'html-beginner-level3') currentQuestions = htmlLevel3Questions;
  if (levelId === 'html-assignment-level') currentQuestions = htmlAssignmentQuestions;
  //intermidiate
  if (levelId === 'html-intermediate-level1') currentQuestions = htmlIntermediateLevel1Questions;
  if (levelId === 'html-intermediate-level2') currentQuestions = htmlIntermediateLevel2Questions;
  if (levelId === 'html-intermediate-level3') currentQuestions = htmlIntermediateLevel3Questions;
  if (levelId === 'html-intermidiate-assignment') currentQuestions = htmlintermidiateAssignmentQuestions;
  //advanced
  if (levelId === 'html-advanced-level1') currentQuestions = htmlAdvancedLevel1Questions;
  if (levelId === 'html-advanced-level2') currentQuestions = htmlAdvancedLevel2Questions;
  if (levelId === 'html-advanced-level3') currentQuestions = htmlAdvancedLevel3Questions;
  if (levelId === 'html-advanced-assignment') currentQuestions = htmlAssignmentLevelQuestions;

  // JavaScript Levels
  // beginner
  if (levelId === 'js-beginner-level1') currentQuestions = jsLevel1Questions;
  if (levelId === 'js-beginner-level2') currentQuestions = jsLevel2Questions;
  if (levelId === 'js-beginner-level3') currentQuestions = jsLevel3Questions;
  if (levelId === 'js-assignment-level') currentQuestions = jsAssignmentQuestions;
  //intermidiate
  if (levelId === 'js-intermediate-level1') currentQuestions = jsIntermediateLevel1;
  if (levelId === 'js-intermediate-level2') currentQuestions = jsIntermediateLevel2;
  if (levelId === 'js-intermediate-level3') currentQuestions = jsIntermediateLevel3;
  if (levelId === 'js-intermidiate-assignment') currentQuestions = jsIntermediateAssignment;

  //advanced
  if (levelId === 'js-advanced-level1') currentQuestions = jsAdvancedLevel1Questions;
  if (levelId === 'js-advanced-level2') currentQuestions = jsAdvancedLevel2Questions;
  if (levelId === 'js-advanced-level3') currentQuestions = jsAdvancedLevel3Questions;
  if (levelId === 'js-advanced-assignment') currentQuestions = jsAdvancedAssignmentQuestions;

  // Python Quiz
  // beginner
  if (levelId === 'python-beginner-level1') currentQuestions = pythonBeginnerLevel1;
  if (levelId === 'python-beginner-level2') currentQuestions = pythonBeginnerLevel2;
  if (levelId === 'python-beginner-level3') currentQuestions = pythonBeginnerLevel3;
  if (levelId === 'python-assignment-level') currentQuestions = pythonBeginnerAssignment;


  //intermidiate
  if (levelId === 'python-intermediate-level1') currentQuestions = pythonIntermediateLevel1;
  if (levelId === 'python-intermediate-level2') currentQuestions = pythonIntermediateLevel2;
  if (levelId === 'python-intermediate-level3') currentQuestions = pythonIntermediateLevel3;
  if (levelId === 'python-intermidiate-assignment') currentQuestions = pythonIntermediateAssignment;

  //advanced
  if (levelId === 'python-advanced-level1') currentQuestions = pythonAdvancedLevel1;
  if (levelId === 'python-advanced-level2') currentQuestions = pythonAdvancedLevel2;
  if (levelId === 'python-advanced-level3') currentQuestions = pythonAdvancedLevel3;
  if (levelId === 'python-advanced-assignment') currentQuestions = pythonAdvancedAssignment;

  //java
  //biggner
  if (levelId === 'java-beginner-level1') currentQuestions = javaBeginnerLevel1;
  if (levelId === 'java-beginner-level2') currentQuestions = javaBeginnerLevel2;
  if (levelId === 'java-beginner-level3') currentQuestions = javaBeginnerLevel3;
  if (levelId === 'java-assignment-level') currentQuestions = javaBeginnerAssignment;


  //intermidiate
  if (levelId === 'java-intermediate-level1') currentQuestions = javaIntermediateLevel1;
  if (levelId === 'java-intermediate-level2') currentQuestions = javaIntermediateLevel2;
  if (levelId === 'java-intermediate-level3') currentQuestions = javaIntermediateLevel3;
  if (levelId === 'java-intermidiate-assignment') currentQuestions = javaIntermediateAssignment;


  //advanced
  if (levelId === 'java-advanced-level1') currentQuestions = javaAdvancedLevel1;
  if (levelId === 'java-advanced-level2') currentQuestions = javaAdvancedLevel2;
  if (levelId === 'java-advanced-level3') currentQuestions = javaAdvancedLevel3;
  if (levelId === 'java-advanced-assignment') currentQuestions = javaAdvancedAssignment;

  //Csharp
  //beginner
  if (levelId === 'csharp-beginner-level1') currentQuestions = csharpBeginnerLevel1;
  if (levelId === 'csharp-beginner-level2') currentQuestions = csharpBeginnerLevel2;
  if (levelId === 'csharp-beginner-level3') currentQuestions = csharpBeginnerLevel3;
  if (levelId === 'csharp-assignment-level') currentQuestions = csharpBeginnerAssignment;

  //intermidiate
  if (levelId === 'csharp-intermediate-level1') currentQuestions = csharpIntermediateLevel1;
  if (levelId === 'csharp-intermediate-level2') currentQuestions = csharpIntermediateLevel2;
  if (levelId === 'csharp-intermediate-level3') currentQuestions = csharpIntermediateLevel3;
  if (levelId === 'csharp-intermidiate-assignment') currentQuestions = csharpIntermediateAssignment;

  //advanced
  if (levelId === 'csharp-advanced-level1') currentQuestions = csharpAdvancedLevel1;
  if (levelId === 'csharp-advanced-level2') currentQuestions = csharpAdvancedLevel2;
  if (levelId === 'csharp-advanced-level3') currentQuestions = csharpAdvancedLevel3;
  if (levelId === 'csharp-advanced-assignment') currentQuestions = csharpAdvancedAssignment;

  //c 
  //biggnner
  if (levelId === 'c-beginner-level1') currentQuestions = cBeginnerLevel1;
  if (levelId === 'c-beginner-level2') currentQuestions = cBeginnerLevel2;
  if (levelId === 'c-beginner-level3') currentQuestions = cBeginnerLevel3;
  if (levelId === 'c-assignment-level') currentQuestions = cBeginnerAssignment;
  //intermidiate
  if (levelId === 'c-intermediate-level1') currentQuestions = cIntermediateLevel1;
  if (levelId === 'c-intermediate-level2') currentQuestions = cIntermediateLevel2;
  if (levelId === 'c-intermediate-level3') currentQuestions = cIntermediateLevel3;
  if (levelId === 'c-intermidiate-assignment') currentQuestions = cIntermediateAssignment;

  //advanced
  if (levelId === 'c-advanced-level1') currentQuestions = cAdvancedLevel1;
  if (levelId === 'c-advanced-level2') currentQuestions = cAdvancedLevel2;
  if (levelId === 'c-advanced-level3') currentQuestions = cAdvancedLevel3;
  if (levelId === 'c-advanced-assignment') currentQuestions = cAdvancedAssignment;

}

//html

// html beginner level buttons

document.querySelector(".html-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Beginner Level 1";
});

document.querySelector(".html-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Beginner Level 2";
});

document.querySelector(".html-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Beginner Level 3";
});

document.querySelector(".html-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Beginner Assignment";
});

// html intermidiate level buttons

document.querySelector(".html-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Intermediate Level 1";
});

document.querySelector(".html-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Intermediate Level 2";
});

document.querySelector(".html-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Intermediate Level 3";
});

document.querySelector(".html-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Intermediate Assignment";
});

// html advanced level buttons

document.querySelector(".html-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Advanced Level 1";
});

document.querySelector(".html-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Advanced Level 2";
});

document.querySelector(".html-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Advanced Level 3";
});

document.querySelector(".html-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "HTML : Advanced Assignment";
});

// js

// JavaScript beginner level buttons

document.querySelector(".js-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Beginner Level 1";
});

document.querySelector(".js-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Beginner Level 2";
});
document.querySelector(".js-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Beginner Level 3";
});

document.querySelector(".js-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Beginner Assignment";
});

// JavaScript intermidiate level buttons

document.querySelector(".js-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Intermediate Level 1";
});

document.querySelector(".js-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Intermediate Level 2";
});

document.querySelector(".js-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Intermediate Level 3";
});

document.querySelector(".js-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Intermediate Assignment";
});

// JavaScript advanced level buttons  

document.querySelector(".js-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Advanced Level 1";
});

document.querySelector(".js-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Advanced Level 2";
});

document.querySelector(".js-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Advanced Level 3";
});

document.querySelector(".js-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "JavaScript : Advanced Assignment";
});

// python

// Python beginner level buttons

document.querySelector(".python-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Beginner Level 1";
});

document.querySelector(".python-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Beginner Level 2";
});

document.querySelector(".python-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Beginner Level 3";
});

document.querySelector(".python-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Beginner Assignment";
});

// Python intermidiate level buttons

document.querySelector(".python-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Intermediate Level 1";
});

document.querySelector(".python-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Intermediate Level 2";
});

document.querySelector(".python-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Intermediate Level 3";
});

document.querySelector(".python-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Intermediate Assignment";
});

// Python advanced level buttons

document.querySelector(".python-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Advanced Level 1";
});

document.querySelector(".python-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Advanced Level 2";
});

document.querySelector(".python-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Advanced Level 3";
});

document.querySelector(".python-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Python : Advanced Assignment";
});

// java

// Java Beginner level buttons

document.querySelector(".java-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Beginner Level 1";
});

document.querySelector(".java-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Beginner Level 2";
});

document.querySelector(".java-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Beginner Level 3";
});

document.querySelector(".java-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Beginner Assignment";
});

// Java intermidiate level buttons

document.querySelector(".java-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Intermediate Level 1";
});

document.querySelector(".java-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Intermediate Level 2";
});

document.querySelector(".java-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Intermediate Level 3";
});

document.querySelector(".java-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Intermediate Assignment";
});

// Java advanced level buttons

document.querySelector(".java-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Advanced Level 1";
});

document.querySelector(".java-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Advanced Level 2";
});

document.querySelector(".java-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Advanced Level 3";
});

document.querySelector(".java-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "Java : Advanced Assignment";
});
// Csharp
// C# Beginner level buttons

document.querySelector(".CSharp-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Beginner Level 1";
});
document.querySelector(".CSharp-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Beginner Level 2";
});

document.querySelector(".CSharp-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Beginner Level 3";
});

document.querySelector(".CSharp-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Beginner Assignment";
});

// C# intermediate level buttons

document.querySelector(".CSharp-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Intermediate Level 1";
});

document.querySelector(".CSharp-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Intermediate Level 2";
});

document.querySelector(".CSharp-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Intermediate Level 3";
});

document.querySelector(".CSharp-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Intermediate Assignment";
});

// C# advanced level buttons

document.querySelector(".CSharp-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Advanced Level 1";
});

document.querySelector(".CSharp-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Advanced Level 2";
});

document.querySelector(".CSharp-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Advanced Level 3";
});

document.querySelector(".CSharp-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C# : Advanced Assignment";
});

// C 
// C Beginner level buttons

document.querySelector(".C-beginner-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Beginner Level 1";
});

document.querySelector(".C-beginner-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Beginner Level 2";
});

document.querySelector(".C-beginner-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Beginner Level 3";
});

document.querySelector(".C-beginner-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Beginner Assignment";
});

// C intermediate level buttons

document.querySelector(".C-intermediate-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Intermediate Level 1";
});

document.querySelector(".C-intermediate-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Intermediate Level 2";
});

document.querySelector(".C-intermediate-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Intermediate Level 3";
});

document.querySelector(".C-intermediate-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Intermediate Assignment";
});

// C advanced level buttons

document.querySelector(".C-advanced-Quiz-level-1").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Advanced Level 1";
});

document.querySelector(".C-advanced-Quiz-level-2").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Advanced Level 2";
});

document.querySelector(".C-advanced-Quiz-level-3").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Advanced Level 3";
});

document.querySelector(".C-advanced-Quiz-assignment-level").addEventListener("click", function () {
  document.getElementById("start-quiz-btn").innerText = "C : Advanced Assignment";
});


document.getElementById("start-quiz-btn").addEventListener("click", function () {
  currentQuestionIndex = 0;
  userAnswers = []; 
  score = 0;
  document.getElementById("quiz-container").style.display = "block";
  loadQuestion();
});


document.getElementById("remove").addEventListener("click", function () {
  document.getElementById("quiz-container").style.display = "none";
});

function loadQuestion() {
  if (!currentQuestions || currentQuestions.length === 0 || currentQuestionIndex === null) {
    document.getElementById("quiz-container").style.display = "none";
    alert("Please Select language level")

  }
  else {
    
    stopQuestionTimer();
    const questionObj = currentQuestions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionObj.question;
    document.getElementById("question-number").innerText =
      `Question: ${currentQuestionIndex + 1}/${currentQuestions.length}`;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = '';

    questionObj.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.onclick = () => selectOption(btn);

      const prev = userAnswers[currentQuestionIndex];
      if (prev && prev.raw === option) {
        btn.style.backgroundColor = "#e0aaff";
      }
      optionsContainer.appendChild(btn);
    });
   
    startQuestionTimer(20);
  }

}


function selectOption(button) {
  document.querySelectorAll("#options-container button").forEach(btn => btn.style.backgroundColor = "");
  button.style.backgroundColor = "#e0aaff";

  userAnswers = userAnswers || [];
  const raw = button.innerText;
  const norm = String(raw).trim().toLowerCase();
  userAnswers[currentQuestionIndex] = { raw, norm };
}
let userAnswers = [];
let score = 0;

let questionTimerInterval = null;
let questionTimeLeft = 0;

function startQuestionTimer(seconds = 20) {
  stopQuestionTimer();
  questionTimeLeft = seconds;


  let timerEl = document.getElementById('timer');
  if (!timerEl) {
    timerEl = document.createElement('div');
    timerEl.id = 'timer';
    timerEl.style.marginTop = '8px';
    timerEl.style.fontSize = '14px';
    timerEl.style.color = '#374151';
    timerEl.style.fontWeight = '600';
    const questionBox = document.querySelector('.question-box') || document.getElementById('quiz-container');
    if (questionBox) questionBox.appendChild(timerEl);
  }
  timerEl.style.display = 'block';
  timerEl.innerText = `Time left: ${questionTimeLeft}s`;

  questionTimerInterval = setInterval(() => {
    questionTimeLeft--;
    if (timerEl) timerEl.innerText = `Time left: ${questionTimeLeft}s`;
    if (questionTimeLeft <= 0) {
      stopQuestionTimer();
   
      nextQuestion();
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (questionTimerInterval) {
    clearInterval(questionTimerInterval);
    questionTimerInterval = null;
  }
}

function nextQuestion() {

  stopQuestionTimer();

  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
   
    let timerEl = document.getElementById('timer');
    if (timerEl) timerEl.style.display = 'none';

    document.getElementById("quiz-container").innerHTML = `
      <div style="text-align:center; padding:40px;">
        <h2 style="color:purple; font-size:2rem; margin:auto;margin-bottom:20px;margin-top:180px;">🎉 Quiz Completed!</h2>
        <button style="padding:10px 30px; border-radius:7px; background:#6365f1; margin-left:25px;color:white; font-size:1.1rem; border:none; cursor:pointer;" onclick='location.reload()'>Restart Quiz</button>
        <button style="padding:10px 30px; border-radius:7px; background:#6365f1; margin-left:25px;color:white; font-size:1.1rem; border:none; cursor:pointer;" id="result">View Result</button>
      </div>
    `;


    score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
      const correctRaw = (currentQuestions[i] && currentQuestions[i].answer) ? currentQuestions[i].answer : '';
      const correct = String(correctRaw).trim().toLowerCase();
      const ua = (typeof userAnswers[i] !== 'undefined' && userAnswers[i] && userAnswers[i].norm) ? userAnswers[i].norm : '';
      if (ua !== '' && ua === correct) score++;
    }

    checkResult();

  }
}


function checkResult() {
  const ansresult = document.getElementById("result");
  if (!ansresult) return;

  if (ansresult._hasHandler) return;
  ansresult._hasHandler = true;

  ansresult.addEventListener("click", function () {
    let resultBox = document.querySelector(".corr-ans");
    if (!resultBox) {
      resultBox = document.createElement('div');
      resultBox.className = 'corr-ans';
      resultBox.style.position = 'relative';
      resultBox.style.maxWidth = '900px';
      resultBox.style.margin = '20px auto';
      resultBox.style.padding = '24px';
      resultBox.style.borderRadius = '12px';
      resultBox.style.background = '#fff';
      resultBox.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      resultBox.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      document.getElementById('quiz-container').appendChild(resultBox);
    }

    const percent = currentQuestions.length ? ((score / currentQuestions.length) * 100).toFixed(2) : 0;
    let html = `
      <div style="text-align:center; margin-bottom:24px;">
      <h4 id="res-remove"style=" font-size: 1.5rem;text-align: end;padding-top: 5px;margin-right: 7px;cursor: pointer;">❌</h4>
        <div style="font-size:28px; font-weight:600; color:#9119ee; margin-bottom:16px;margin-top:15px;">Quiz Results</div>
        <div style="display:inline-flex; align-items:center; gap:24px; background:#f5f3ff; padding:16px 24px; border-radius:12px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:24px"></span>
            <div>
              <div style="font-size:24px; font-weight:600; color:#9119ee">${score}/${currentQuestions.length}</div>
              <div style="color:#6b7280; font-size:14px">Correct Answers</div>
            </div>
          </div>
          <div style="width:2px; height:40px; background:#e5e7eb"></div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:24px"></span>
            <div>
              <div style="font-size:24px; font-weight:600; color:#9119ee">${percent}%</div>
              <div style="color:#6b7280; font-size:14px">Score</div>
            </div>
          </div>
        </div>
      </div>
      `;

   
    html += '<div style="display:flex; flex-direction:column; gap:16px; margin-left:10px;margin-right:10px;">';
    currentQuestions.forEach((q, i) => {
      const selectedObj = (typeof userAnswers[i] !== 'undefined' && userAnswers[i] !== null) ? userAnswers[i] : null;
      const selectedRaw = selectedObj ? selectedObj.raw : 'No answer';
      const correct = q.answer;
      const ok = selectedObj && String(selectedObj.norm) === String(correct).trim().toLowerCase();
      html += `
          <div style="padding:16px; border-radius:12px; background:${ok ? '#f0fdf4' : '#fef2f2'}; border:1px solid ${ok ? '#86efac' : '#fecaca'}; transition:all 0.2s;">
            <div style="font-size:15px; font-weight:600; color:#1f2937; margin-bottom:12px;">
              <span style="color:${ok ? '#16a34a' : '#dc2626'}; display:inline-block; width:24px;">${ok ? '✓' : '×'}</span>
              Question ${i + 1}: ${q.question}
            </div>
            <div style="margin-left:24px; display:flex; flex-direction:column; gap:8px;">
              <div style="color:#4b5563; font-size:14px;">
                <span style="color:#6b7280; font-weight:500; display:inline-block; width:80px;">Your answer:</span>
                <span style="color:${ok ? '#16a34a' : '#dc2626'}; font-weight:500;">${selectedRaw}</span>
              </div>
              <div style="color:#4b5563; font-size:14px;">
                <span style="color:#6b7280; font-weight:500; display:inline-block; width:80px;">Correct:</span>
                <span style="color:#16a34a; font-weight:500;">${correct}</span>
              </div>
            </div>
          </div>
    
        `;
            
    });
    html += '</div>';

    resultBox.innerHTML = html;
    resultBox.style.display = 'block';
    let res_rem = document.getElementById("res-remove")
    res_rem.addEventListener("click", function () {
      const abc = document.querySelector(".corr-ans")
      abc.style.display = "none"
    })
  });

}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}




