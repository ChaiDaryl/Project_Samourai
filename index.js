let questionsData = [
    {
      text: "Quel empire a vu naître le kebab ?",
      answers: [
        {
          text: "Rome",
          isCorrect: false
        },
        {
          text: "Ottoman",
          isCorrect: true
        },
        {
          text: "Perse",
          isCorrect: false
        }
        
      ]
    },
    {
      text: " Quels légumes le Berliner Kebab offre t-il en plus ?",
      answers: [
        {
          text: "Chou rouge - Persil - Carottes",
          isCorrect: true
        },
        {
          text: "Betterave - basilic - endives",
          isCorrect: false
        },
        {
          text: "courgettes - aubergines -chou fleur",
          isCorrect: false
        },
        {
          text: "artichaud-épinards-petit pois",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quel est la part de marché du Kebab en France?",
      answers: [
        {
          text: "25%",
          isCorrect: false
        },
        {
          text: '17%',
          isCorrect: false
        },
        {
          text: "11%",
          isCorrect: true
        }
      ]
    },
    {
      text: "Quelle viande trouve t-on généralement sur la broche ?",
      answers: [
        {
          text: "veau et poulet",
          isCorrect: true
        },
        {
          text: "boeuf et canard",
          isCorrect: false
        },
        {
          text: "saumon et cabillaud",
          isCorrect: false
        },
        {
          text: "chat et cheval",
          isCorrect: false
        }
      ]
    },
 
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz terminé! \n Ton score final: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);
  