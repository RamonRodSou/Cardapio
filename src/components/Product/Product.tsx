import { Box, Typography, styled } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import LaEle from '../../assets/img/Huburguer-LaEle.png'
import Star from '../../assets/img/star.png'
import Heart from '../../assets/img/heart.png'


import { CSSProperties } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

type Props = {}

const containerBurguer: CSSProperties = {

  width: '160px',
  height: '220px',

  backgroundColor: '#fff',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const TituloProduto = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: '#3C2F2F',
  fontSize: '1.2rem',
  fontWeight: 'bolder',
  margin:'0 1rem'

})

const Product = (props: Props) => {

  return (
    <Box
      display='flex'
      justifyContent='space-around'
      margin='1rem 0'
      flexWrap='wrap'
    >
      <RetanguloBox sx={containerBurguer}>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
        >
          <img src={LaEle} alt='Hamburguer Lá ele' />
        </Box>
        <Box
          // padding='.5rem 1rem'
          width='100%'
          justifyContent='space-around'

        >
          <TituloProduto>
            Hamburguer
          </TituloProduto>
          <Typography variant='body1' sx={{ color: '#3C2F2F', margin:'0 1rem' }}>
            La ele
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            margin='.4rem 1rem'
            
          >
            <Box
              display='flex'
              gap='.5rem'
            >
              <img src={Star} alt='Estrela' width={20} height={20} />
              <Typography variant='body1' sx={{ color: '#3C2F2F' }}> 4.9</Typography>
            </Box>
            <img src={Heart} alt='Estrela' width={20} height={20}/>
          </Box>
        </Box>
      </RetanguloBox>


      <RetanguloBox sx={containerBurguer}>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
        >
          <img src={LaEle} alt='Hamburguer Lá ele' />
        </Box>
        <Box
          // padding='.5rem 1rem'
          width='100%'
          justifyContent='space-around'

        >
          <TituloProduto>
            Hamburguer
          </TituloProduto>
          <Typography variant='body1' sx={{ color: '#3C2F2F', margin:'0 1rem' }}>
            Simpes
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            margin='.4rem 1rem'
            
          >
            <Box
              display='flex'
              gap='.5rem'
            >
              <img src={Star} alt='Estrela' width={20} height={20} />
              <Typography variant='body1' sx={{ color: '#3C2F2F' }}> 4.9</Typography>
            </Box>
            <img src={Heart} alt='Estrela' width={20} height={20}/>
          </Box>
        </Box>
      </RetanguloBox>

      <RetanguloBox sx={containerBurguer}>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
        >
          <img src={LaEle} alt='Hamburguer Lá ele' />
        </Box>
        <Box
          // padding='.5rem 1rem'
          width='100%'
          justifyContent='space-around'

        >
          <TituloProduto>
            Hamburguer
          </TituloProduto>
          <Typography variant='body1' sx={{ color: '#3C2F2F', margin:'0 1rem' }}>
            La ele
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            margin='.4rem 1rem'
            
          >
            <Box
              display='flex'
              gap='.5rem'
            >
              <img src={Star} alt='Estrela' width={20} height={20} />
              <Typography variant='body1' sx={{ color: '#3C2F2F' }}> 4.9</Typography>
            </Box>
            <img src={Heart} alt='Estrela' width={20} height={20}/>
          </Box>
        </Box>
      </RetanguloBox>


      <RetanguloBox sx={containerBurguer}>
        <Box
          display='flex'
          justifyContent='center'
          width='100%'
        >
          <img src={LaEle} alt='Hamburguer Lá ele' />
        </Box>
        <Box
          // padding='.5rem 1rem'
          width='100%'
          justifyContent='space-around'

        >
          <TituloProduto>
            Hamburguer
          </TituloProduto>
          <Typography variant='body1' sx={{ color: '#3C2F2F', margin:'0 1rem' }}>
            Simpes
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            margin='.4rem 1rem'
            
          >
            <Box
              display='flex'
              gap='.5rem'
            >
              <img src={Star} alt='Estrela' width={20} height={20} />
              <Typography variant='body1' sx={{ color: '#3C2F2F' }}> 4.9</Typography>
            </Box>
            <img src={Heart} alt='Estrela' width={20} height={20}/>
          </Box>
        </Box>
      </RetanguloBox>

    </Box>
  )
}

export default Product