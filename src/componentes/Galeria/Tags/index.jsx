import tags from './tags.json'
import styled from "styled-components"

const TagsContainer = styled.div`
    display: flex;
    margin-top: 56px;
    align-items: center;
    gap: 64px;
`

const TituloEstilizado = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`

const Tag = styled.button`
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

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({ setTag }) => {
    return (
        <TagsContainer>
            <TituloEstilizado>Busque por tags:</TituloEstilizado>
            <Div>
                {tags.map(tag =>
                    <Tag
                        key={tag.id}
                        onClick={() => setTag(tag.tag)}
                    >{tag.titulo}
                    </Tag>
                )}
            </Div>
        </TagsContainer>
    )

}

export default Tags