function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


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
  

//butontop
window.addEventListener('scroll', function(){
    const scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// Carousel

// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}
