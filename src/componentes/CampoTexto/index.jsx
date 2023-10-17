import styled from "styled-components"
import search from '/imagens/Lupa.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const CampoTextoEstilizado = styled.input`
    width: 566px;
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border-width: 2px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const Lupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({ setFiltrar }) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" onChange={(evento) => { setFiltrar(evento.target.value) }} type="text" />
            <Lupa src={search} alt="icone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto