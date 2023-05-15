export default function Chute({ tentativa, setTentativa, desativado, chutarPalavra }) {
    return (
        <div className="chute">
            <h1>Já sei a palavra!</h1>
            <input
                type="text" placeholder=""
                data-test="guess-input"
                className="input-digitar"
                onChange={(event) => setTentativa(event.target.value)}
                value={tentativa}
                disabled={(desativado === true) ? true : false}

            />

            <button className="botaoChutar" data-test="guess-button" onClick={() => chutarPalavra()}>Chutar</button>

        </div>
    );
}


