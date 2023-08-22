import React from 'react'
import Cabecalho from '../../Components/Cabecalho'
import Conteudo from '../../Components/Conteudo'
import Rodape from '../../Components/Rodape'

function Home() {
  function primaryRequest() {
     window.addEventListener('load', () => {
        const valores = fetch('https://opentdb.com/api.php?amount=30&category=19').then(batata =>{

          batata.json().then(bacon=>{
          console.log(bacon.results)
          var txt1 = document.querySelector('#texto1')
          var txt2 = document.querySelector('#texto2')

          txt1.innerHTML = `${bacon.category}`
     })
  })
})
}
  primaryRequest()
  return (
    <div>
      <Cabecalho />
      <Conteudo />
      <section>
      <h1 id="texto1"></h1>
      <h1 id="texto2"></h1>
      </section>
      <Rodape />
    </div>
  )
}

export default Home
