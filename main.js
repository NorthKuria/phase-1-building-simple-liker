// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', mainFunc)

const errorModal = document.getElementById('modal')
errorModal.classList.add('hidden')

function mainFunc() {
  const hearts = document.querySelectorAll('.like')

  hearts.forEach((item) => {
    item.addEventListener('click', (event) => {
      if (item.classList.contains('activated-heart')) {
        item.innerHTML = 'Like! <span class="like-glyph">♡</span>'
        item.classList.remove('activated-heart')
      } else {
        mimicServerCall()
          .then(function (response) {
            item.innerHTML = 'Like! <span class="like-glyph">♥</span>'
            item.classList.add('activated-heart')
          })
          .catch((error) => {
            errorModal.classList.remove('hidden')
            document.getElementById('modal-message').innerText = error.message

            setTimeout(() => {
              errorModal.classList.add('hidden')
            }, 3000)
          })
      }
    })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject('Random server error. Try again.')
      } else {
        resolve('Pretend remote server notified of action!')
      }
    }, 300)
  })
}
