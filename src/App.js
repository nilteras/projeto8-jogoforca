
import palavras from './palavras'
import Letras from './components/Letras'
import Jogo from './components/Jogo'
import { useState } from 'react'

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [imagemForca, setimagemForca] = useState("assets/forca0.png");
  const [desativado, setDesativado] = useState(true)
  const [palavraEscolhida, setpalavraEscolhida] = useState([])
  const [letraClicada, setletraClicada] = useState([])
  const [qtdErros, setqtdErros] = useState(0)
  const [corLetra, setcorLetra] = useState("")
 // let [tentativa, setTentativa] = useState("")

  const renderPalavra = palavraEscolhida.map((l, index) => letraClicada.includes(palavraEscolhida[index]) ? l : " _")
  const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]

  //const [palavraChute, setpalavraChute] = useState(null)


  function iniciarJogo() {
    const arrayPalavra = [...palavraAleatoria]
    setpalavraEscolhida(arrayPalavra)
    setDesativado(false)
    //setTentativa("")
    setcorLetra("")
    setimagemForca("assets/forca0.png")
    setqtdErros(0)
    setletraClicada([])

  }

  function clicarLetra(caracter) {
    const novoArray = [...letraClicada, caracter]
    setletraClicada(novoArray)

    if (!palavraEscolhida.includes(caracter)) {
      let errosAtual = qtdErros + 1
      setqtdErros(errosAtual)


      if (errosAtual === 1) {
        setimagemForca("assets/forca1.png")
      } else if (errosAtual === 2) {
        setimagemForca("assets/forca2.png")
      } else if (errosAtual === 3) {
        setimagemForca("assets/forca3.png")
      } else if (errosAtual === 4) {
        setimagemForca("assets/forca4.png")
      } else if (errosAtual === 5) {
        setimagemForca("assets/forca5.png")
      } else if (errosAtual === 6) {
        jogadorPerdeu()
      }
    }
  }

  if(desativado === false){
    if(renderPalavra.join("") === palavraEscolhida.join("")) {
      jogadorGanhou()
    }
  }

  function jogadorGanhou(){
    setpalavraEscolhida(palavraEscolhida)
    setcorLetra("correta")
    setDesativado(true)
  }

  function jogadorPerdeu() {
    setpalavraEscolhida(palavraEscolhida)
    setcorLetra("incorreta")
    setimagemForca("assets/forca6.png")
    setDesativado(true)
  }


  return (
    <div className="container-geral">
      <Jogo
        imagemForca={imagemForca}
        renderPalavra={renderPalavra}
        iniciarJogo={iniciarJogo}
        corLetra={corLetra}
        palavraAleatoria={palavraAleatoria}



      />

      <Letras
        alfabeto={alfabeto}
        clicarLetra={clicarLetra}
        palavras={palavras}
        letraClicada={letraClicada}
        desativado={desativado}
        qtdErros={qtdErros}
      />
    </div>
  );
}

