const questionIconsTwo = document.querySelectorAll(".questionIcon_two");
const questionButtons = document.querySelectorAll(".question__button");
const questionsItemAnswers = document.querySelectorAll(
  ".questions__item_answer"
);

// questionButton.addEventListener("click", () => {
//   questionIconTwo.classList.toggle("questionButtonOpen");
//   questionIconTwo.classList.toggle("questionButtonClose");
//   questionsItemAnswer.classList.toggle("questionAnswerOpen");
//   questionsItemAnswer.classList.toggle("questionAnswerClose");
// });

for (let questionButton of questionButtons) {
  questionButton.addEventListener("click", () => {
    let questionButtonAtr = questionButton.getAttribute("data-question");
    for (let questionsItemAnswer of questionsItemAnswers) {
      let questionsItemAnswerAtr =
        questionsItemAnswer.getAttribute("data-question");
      if (questionButtonAtr === questionsItemAnswerAtr) {
        questionsItemAnswer.classList.toggle("questionAnswerOpen");
        questionsItemAnswer.classList.toggle("questionAnswerClose");
      }
    }

    for (let questionIconTwo of questionIconsTwo) {
      let questionIconTwoAtr = questionIconTwo.getAttribute("data-question");
      if (questionButtonAtr === questionIconTwoAtr) {
        questionIconTwo.classList.toggle("questionButtonOpen");
        questionIconTwo.classList.toggle("questionButtonClose");
      }
    }
  });
}
