

const synth = window.speechSynthesis;
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.info').addEventListener('click', value)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image' ){
          document.querySelector('.nasaImg').src = data.hdurl
          document.querySelector('iframe').src = ''
     
  
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('.nasaImg').src = ''

        }
       
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h3').innerText = data.title
        document.querySelector('h6').innerText = '*Click The Title To Listen*'
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function readMe(){
  const yellTextA = document.querySelector('h3').textContent
  let yellThisA = new SpeechSynthesisUtterance(yellTextA)
  synth.speak(yellThisA)
  const yellTextB = document.querySelector('p').textContent
  console.log(yellTextB)
  let yellThisB = new SpeechSynthesisUtterance(yellTextB)
  synth.speak(yellThisB)


}

function value(){
  if(document.querySelector('p').textContent == ''){
    alert('Pick A Date & Get Media')
  } else {
    readMe()
  }
}