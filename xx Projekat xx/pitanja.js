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
let total = 30;
window.location.href = "result.html?points=" + points;
