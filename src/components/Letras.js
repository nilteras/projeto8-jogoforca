export default function Letras({alfabeto, clicarLetra, letraClicada, desativado, qtdErros}) {

    return (
        
        <div className="letras">
            {alfabeto.map((l, index) => <button disable={(letraClicada.includes(l)) || (desativado === true) || (qtdErros === 6) ? true : false} 
            onClick={() => clicarLetra(l)}
            data-test="letter"
            className={`${(desativado === true) || (letraClicada.includes(l)) ? "letra" : "habilitada"}`}
            key={index}> {l.toUpperCase()} </button>
            )    
        }
         
        </div>

    );

}