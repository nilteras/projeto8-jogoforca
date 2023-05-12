import style from './css/style.css'
import palavras from './Palavras'
import Letras from './components/Letras'
import Jogo from './components/Jogo'
import { useState } from 'react'

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const [imagemForca, setimagemForca] = useState("assets/forca0.png");

  function iniciarJogo(){

  }

  

  return (
    <div className="container-geral">
        <Jogo 
          imagemForca={imagemForca}
          iniciarJogo={iniciarJogo}

        />
      
        <Letras 
          alfabeto={[alfabeto]}
        />
    </div>
  );
}

