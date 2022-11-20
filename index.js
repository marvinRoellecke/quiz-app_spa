const questions = [
  {
    id: 1,
    question: "Das ist Frage eins",
    answer: "Antwort eins",
    categories: ["eins", "zwei", "drei"],
    bookmarked: false,
  },
  {
    id: 2,
    question: "Das ist Frage zwei",
    answer: "Anwort Zwei",
    categories: ["eins", "zwei", "drei"],
    bookmarked: true,
  },

  {
    id: 3,
    question:
      "Dies ist eine sehr lange Frage, um zu testen, ob und wie die Darstellung einer solchen letztlich dem Gesamtstyle schadet.",
    answer:
      "Die Antwort wiederum ist im Vergleich zu Frage recht kurz geraten. Belassen wir es doch dabei!",
    categories: ["eins", "zwei", "drei"],
    bookmarked: false,
  },
];

const main = document.querySelector('[data-js="main"]');

function createQuizCard(question) {
  const section = document.createElement("section");
  section.classList.add("card");
  section.innerHTML = ` <button
  type="button"
  class="button__bookmark"
  data-js="quiz-card__button-bookmark"
>
  <svg
    data-js="quiz-card__bookmark"
    class="quiz-card__bookmark"
    height="24"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</button>

<p class="p__question">
 ${question.question}
</p>
<p class="p__answer show-answer" data-js="p__answer">${question.answer}</p>
<button type="button" class="button__answer" data-js="btnAnswer">
  Show Answer
</button>
<aside class="quiz-card__tag">
  <span>${question.categories}</span>
</aside>`;
  main.append(section);
}

questions.forEach((question) => {
  createQuizCard(question);
});
