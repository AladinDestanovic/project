// let bodovi = 0;
// document.getElementById("ADiv").addEventListener("click", function () {
//   document.getElementById("ADiv").style.backgroundColor = "green";
//   if (bodovi < 1) {
//     bodovi = bodovi + 10;
//     console.log(bodovi);
//   } else {
//   }
// });
// document.getElementById("BDiv").addEventListener("click", function () {
//   document.getElementById("ADiv").style.backgroundColor = "green";
//   document.getElementById("BDiv").style.backgroundColor = "red";

//   if (bodovi < 1) {
//     bodovi = bodovi + 5;
//     console.log(bodovi);
//   } else {
//   }
// });
// document.getElementById("CDiv").addEventListener("click", function () {
//   document.getElementById("ADiv").style.backgroundColor = "green";
//   document.getElementById("CDiv").style.backgroundColor = "red";

//   if (bodovi < 1) {
//     bodovi = bodovi + 5;
//     console.log(bodovi);
//   } else {
//   }
// });
// document.getElementById("DDiv").addEventListener("click", function () {
//   document.getElementById("ADiv").style.backgroundColor = "green";
//   document.getElementById("DDiv").style.backgroundColor = "red";

//   if (bodovi < 1) {
//     bodovi = bodovi + 5;
//     console.log(bodovi);
//   } else {
//   }
// });
// document.getElementById("seeResults").addEventListener("click", () => {
//   if (bodovi < 1) {
//     alert("niste odgovorili na dato pitanje");
//   } else {
//     window.location.href = "results.html";
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const showButton = document.getElementById("show");
//   const pointsElement = document.getElementById("points");

//   showButton.addEventListener("click", () => {
//     pointsElement.textContent = bodovi + "/10";
//   });
// });

let points = 0;
const arr = [
  {
    id: "1",
    question: "ko je napisao Romeo i Julia",
    answers: ["sekspir", "tolstoj", "dostojevski"],
    corect: "sekspir",
    poeni: 1,
  },
  {
    id: "2",
    question: "ko je napisao Ana Karenjina",
    answers: ["sekspir", "tolstoj", "dostojevski"],
    corect: "tolstoj",
    poeni: 10,
  },
  {
    id: "3",
    question: "ko je napisao Zlocin i kazna",
    answers: ["sekspir", "tolstoj", "dostojevski"],
    corect: "dostojevski",
    poeni: 10,
  },
];
///
// console.log(arr[0].answers[0]);
let questionn;
const startTest = () => {
  document.getElementById("pitanje").textContent = arr[0].question;
  document.getElementById("a").textContent = arr[0].answers[0];
  document.getElementById("b").textContent = arr[0].answers[1];
  document.getElementById("c").textContent = arr[0].answers[2];
};
startTest();

///
// const click = () => {
//   let i = 0;
//   document.getElementById("a").addEventListener("click", () => {
//     submitAnswer(arr[0].id, arr[0].answers[0]);
//     question = arr[0];
//   });
//   document.getElementById("b").addEventListener("click", () => {
//     submitAnswer(arr[0].id, arr[0].answers[1]);
//     question = arr[0];
//   });
//   document.getElementById("b").addEventListener("click", () => {
//     submitAnswer(arr[0].id, arr[0].answers[2]);
//     question = arr[0];
//   });
// };
let i = 0;

questionn = arr[i];
const submitAnswer = (id, ans) => {
  if (id === questionn.id) {
    if (ans === questionn.corect) {
      points = points + questionn.poeni;
      console.log(points);

      if (i <= 2) {
        i = i + 1;

        questionn = arr[i];
      }
      if (i > 2) {
        setTimeout(() => {
          window.location.href = "results.html";
        }, 2000);
      }
      document.getElementById("pitanje").textContent = arr[i].question;
      document.getElementById("a").textContent = arr[i].answers[0];
      document.getElementById("b").textContent = arr[i].answers[1];
      document.getElementById("c").textContent = arr[i].answers[2];
    }
    ////
    else {
      if (i <= 2) {
        i = i + 1;

        questionn = arr[i];
      }
      if (i > 2) {
        setTimeout(() => {
          window.location.href = "results.html";
        }, 2000);
      }
      document.getElementById("pitanje").textContent = arr[i].question;
      document.getElementById("a").textContent = arr[i].answers[0];
      document.getElementById("b").textContent = arr[i].answers[1];
      document.getElementById("c").textContent = arr[i].answers[2];
    }
  }
};
//   question = arr[0]

document.getElementById("a").addEventListener("click", () => {
  const ans = document.getElementById("a").textContent;
  submitAnswer(questionn.id, ans);
});
document.getElementById("b").addEventListener("click", () => {
  const ans = document.getElementById("b").textContent;
  submitAnswer(questionn.id, ans);
});
document.getElementById("c").addEventListener("click", () => {
  const ans = document.getElementById("c").textContent;
  submitAnswer(questionn.id, ans);
});
// };
// startTest();

// const submitAnswer = (id, ans) => {
// 1. Uporedi da li je id za koji smo submitovali odgovor i id trenutnog pitanja isti
// question.id === id

// 2. Da li je nas "ans" jednak "correct"

// 3. Ako jeste dodaj bodove

// 4. Ako postoji sledece pitanje prikazi ga i sacuvaj to pitanje u varijabli "question"

// 5. Ako ne postoji novo pitanje, onda me odvedi na success page
// }+

// document.getElementById("ans4").addEventListener("click", () => {
//   const ans = document.getElementById("ans4").textContent;
//   submitAnswer(question.id, ans);
// });
let total = 30;
