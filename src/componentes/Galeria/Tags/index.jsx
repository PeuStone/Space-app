import tags from './tags.json'
import styled from "styled-components"

const TagsContainer = styled.div`
    display: flex;
    margin-top: 56px;
    align-items: center;
    gap: 24px;
`

const TituloEstilizado = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    margin: 0;
    width: 219px;
    padding-right: 17px;

`

const BotaoTagEstilizado = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.3);
    cursor: pointer;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ;    
    transition: background-color 0.3s ease;
    &:hover{
        border-color: #C98CF1;
    }
`

const Tags = () => {
    return (
        <TagsContainer>
            <TituloEstilizado>Busque por tags:</TituloEstilizado>
            {tags.map(tag => <BotaoTagEstilizado key={tag.id}>{tag.titulo}</BotaoTagEstilizado>)}
        </TagsContainer>
    )

}

export default Tags