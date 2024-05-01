import { Box, Typography, styled } from '@mui/material'
import '../../Variavel/_color.css';
import settings from '../../assets/img/settings-sliders.png'
import Lupa from '../../assets/img/Lupa.png'
import RetanguloBox from '../RetanguloBox/RetanguloBox';

type Props = {}

const SearchBox = {

    width: '70%',
    height: 60,
    backgroundColor: 'var(--boxColor)',


    justifyContent: 'flex-start',
    padding: '0 1rem'
}

const Pesquisar = styled(Typography)({
    color: 'var(--tituloNameCinza)',
    fontSize: '1.2rem',
    fontFamily: 'Roboto Condensed',
    margin: '0 1rem'

})


const Search = (props: Props) => {
    return (
        <Box
            display='flex'
        >
            <RetanguloBox sx={SearchBox}>
                <img src={Lupa} alt="Lupa de Pesquisa" />
                <Pesquisar>
                    Pesquisar
                </Pesquisar>
            </RetanguloBox>
            <RetanguloBox sx={{ width: 60, height: 60 }}>
                <img src={settings} alt="Configurações para filtro" />
            </RetanguloBox>

        </Box >
    )
}

export default Search