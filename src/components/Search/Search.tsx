import { Box, TextField, Typography, styled } from '@mui/material'
import '../../Variavel/_color.css';
import Lupa from '../../assets/img/Lupa.png'

// import RetanguloBox from '../RetanguloBox/RetanguloBox';
// import settings from '../../assets/img/settings-sliders.png'

type Props = {
    search:string 
    setSearch:any
}

const SearchBox = styled(TextField)({

    backgroundColor: 'var(--boxColor)',
    width: '100%',
    borderRadius: '20px',
    margin:'.5rem'
})

const labelDiv = {
    color: 'var(--tituloNameCinza)',
    fontSize: '1.2rem',
    fontFamily: 'Roboto Condensed',
    display: 'flex',
    gap: '.5rem',
}

const Search: React.FC<Props> = ({search, setSearch}) => {


    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='space-around'
        >
            <SearchBox
                value={search}
                onChange={setSearch}
                 label={
                    <div style={labelDiv}>
                        <img src={Lupa} alt="Lupa de Pesquisa" />
                        <Typography> Pesquise</Typography>
                    </div>
                }

            />
{/* 
            <RetanguloBox sx={{ width: 60, height: 60 }} handle={() => ('')}>
                <img src={settings} alt="Configurações para filtro" />
            </RetanguloBox> */}

        </Box >
    )
}

export default Search