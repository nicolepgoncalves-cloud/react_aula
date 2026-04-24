import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoe = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`
const Opcoes = styled.ul`
  display: flex;
`

function OpcoesHeader() {
    return (
        <Opcoes className='opcoes'>
            {textoOpcoes.map((texto) => (
                <Opcoe className='opcao'><p>{texto}</p></Opcoe>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader