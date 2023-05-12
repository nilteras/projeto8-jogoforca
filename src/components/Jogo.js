export default function Jogo({imagemForca, iniciarJogo}) {


    return (
        <div className='container'>
          <img className="forca" src={imagemForca} />
          
          <div className="container-direita">
            <div className="escolherPalavra" onClick={() => iniciarJogo()}><p>Escolher Palavra</p></div>



          </div>
        </div>



    );

}