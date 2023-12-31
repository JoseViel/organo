import './style.css'

const Colaborador = ({nome, descricao, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Colaborador