import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones className='icones'>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
        // ao mudar o li para Icone e o ul Icones  
        // fica mais facil de entender as ligações com as estilizações
    )
}

export default IconesHeader;