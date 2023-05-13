export default function Jogo({imagemForca, iniciarJogo, renderPalavra, corLetra, palavraAleatoria}) {


    return (
        <div className='container'>
          <img className="forca" data-test="game-image" src={imagemForca} alt=""/>
          
          <div className="container-direita">
            <div className="escolherPalavra" data-test="choose-word" onClick={() => iniciarJogo()}><p>Escolher Palavra</p></div>
            <div className={`palavra ${corLetra}`} data-test="word" data-answer={palavraAleatoria}>
                {renderPalavra}
                
            </div>



          </div>
        </div>



    );

}