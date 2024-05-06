import { Box, Typography, styled } from '@mui/material';
import RetanguloBox from '../RetanguloBox/RetanguloBox';
import React, { CSSProperties, useEffect } from 'react';
import { getProduct } from '../../server/get'
import IconsTag from '../IconsTag/IconsTag';

import { IProduct } from '../../Interface/IProduct';
import { Link } from 'react-router-dom';

type Props = {}
const containerBurguer: CSSProperties = {

  width: '160px',
  height: '220px',
  backgroundColor: 'var(--boxColor )',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: '1rem 0',
}

const TituloProduto = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: 'var(--tituloHamburguer)',
  fontSize: '1.2rem',
  fontWeight: 'bolder',
  margin: '0 1rem',
})

const ImgProduto = styled('img')({

  width: '160px',
  height: '120px',
  borderRadius: '15px'
})

const Product: React.FC<Props> = () => {


  const [products, setProducts] = React.useState<IProduct[]>([]);

  function handleSelect(product: IProduct) {
    console.log(product)
  }

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

      {products.map((product) => (
        <RetanguloBox sx={containerBurguer} key={product.id} handle={() => handleSelect(product)}>
          <Link to={`/produto/${product.id}`} style={{ textDecoration: 'none', width: '100%' }}>

            <ImgProduto src={product.image} alt={product.image} />
            <Box>
              <TituloProduto>
                {product.tipo}
              </TituloProduto>
              <Typography variant='body1' sx={{ color: 'var(--tituloHamburguer)', margin: '0 1rem' }}>
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
                <IconsTag isStar={true} />
                <Typography variant='body1' sx={{ color: 'var(--tituloHamburguer)' }}>{product.valor}</Typography>
              </Box>
              <IconsTag isStar={false} />
            </Box>
          </Link>

        </RetanguloBox>

      ))}

    </Box>
  )
}

export default Product
