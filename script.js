$(document).ready(function() {
    let holes = $('#board .hole');
    let scoreBoard = $('#score-value');
    let gameInterval = null; 
  
    let score = 0;
    for (let i = 0; i < holes.length; i++) {
        holes[i].setAttribute('id', `hole-${i}`);
        holes[i].addEventListener('click', function() {
            const mole = document.querySelector(`#mole-${i}`);
            if (mole.classList.contains('up')) {
                mole.classList.remove('up');
                score++;
                scoreBoard.text(score);
            }
        });
    }
  
    function popUp() {
        let randomIndex = Math.floor(Math.random() * holes.length);
        let randomHole = $(holes[randomIndex]);
        $('.mole').removeClass('mole');
        let taupe = $('<img>').attr('src', '/img.png').addClass('mole');
        $(randomHole).addClass('mole').append(taupe);
        setTimeout(function() {
            $(randomHole).find('.mole').remove();
        }, 10000);
    }
  
    $('.hole').click(function() {
        if ($(this).hasClass('mole')) {
            $(this).removeClass('mole');
            $(this).find('img').remove();
            score++;
            scoreBoard.text(score);
        }
    });
  
    function startGame() {
        gameInterval = setInterval(function() { // Initialisez gameInterval ici
            popUp();
        }, Math.floor(Math.random() * 1000) + 500);
    }
  
    $('#jeux').click(function() {
        startGame();
    });
  
    $('#stop').click(function() {
        stopGame();
    });
  
    $('#reset').click(function() {
      resetGame();
    });
    
  
    function stopGame() {
      if (gameInterval !== null) {
        clearInterval(gameInterval);
      }
      score = 0;
      scoreBoard.text(score);
      $('.mole').removeClass('mole');
      gameActive = false;
    }
  
    $('#stop').click(function() {
      stopGame();
    });
  
  });