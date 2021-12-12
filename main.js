// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errModal = document.getElementById('modal')
  errModal.className = 'hidden'

document.addEventListener('DOMContentLoaded', () => {
  

  const hearts = document.getElementsByClassName('like-glyph')

  for (const heart of hearts) {
    heart.addEventListener('click', () => {
      mimicServerCall()
      .then(response => {
        if (response) {
          if (heart.innerText === '♡') {
            heart.classList.add('activated-heart')
            heart.innerText = FULL_HEART
          } else {
            heart.classList.remove('activated-heart')
            heart.innerText = EMPTY_HEART
          }
        }
      })
      .catch(err => {
        errModal.classList.remove('hidden')
        errModal.children[1].innerText = err

        setTimeout(() => {
          errModal.classList.add('hidden') 
        }, 3000)
      })

    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}