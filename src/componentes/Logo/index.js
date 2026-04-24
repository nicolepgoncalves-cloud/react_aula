import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const Logoimg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Logoimg src={logo} alt='logo'></Logoimg>
            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo