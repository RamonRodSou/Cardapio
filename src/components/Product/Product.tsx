import { Box, Typography, styled } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import Star from '../../assets/img/star.png'
import Heart from '../../assets/img/heart.png'
import React, { CSSProperties, useEffect } from 'react';
import { getProduct } from '../../server/get'

type Props = {}

const containerBurguer: CSSProperties = {

  width: '160px',
  height: '220px',

  backgroundColor: '#fff',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',


}

const TituloProduto = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: '#3C2F2F',
  fontSize: '1.2rem',
  fontWeight: 'bolder',
  margin: '0 1rem'

})

const ImgProduto = styled('img')({

  width: '160px',
  height: '120px',
  borderRadius: '15px'
})

const Product: React.FC<Props> = () => {


  const [products, setProducts] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Box
      display='flex'
      justifyContent='space-around'
      margin='1rem 0'
      flexWrap='wrap'
    >
      {products.map((product): any => (
        <RetanguloBox sx={containerBurguer} key={product.id}>
          <ImgProduto src={product.image} alt={product.image} />
          <Box>
            <TituloProduto>
              {product.tipo}
            </TituloProduto>
            <Typography variant='body1' sx={{ color: '#3C2F2F', margin: '0 1rem' }}>
              {product.name}
            </Typography>
          </Box>
          <Box
            display='flex'
            gap='3rem'
            alignItems='center'
            margin='.5rem 1rem'
          >
            <Box
              display='flex'
              gap='.5rem'
            >
              <img src={Star} alt='Estrela' width={20} height={20} />
              <Typography variant='body1' sx={{ color: '#3C2F2F' }}>{product.valor}</Typography>
            </Box>
            <img src={Heart} alt='Estrela' width={20} height={20} />
          </Box>
        </RetanguloBox>
      ))
      }
    </Box >
  )
}

export default Product