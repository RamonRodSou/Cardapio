import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import ilustracaoHamburguer from '../assets/img/burguer.webp'
import ilustracaoCachorro from '../assets/img/hot.webp'
import iconAdd from '../assets/img/iconAdd.png'
import iconLess from '../assets/img/iconLess.png'
import { ProductContext } from '../contextApi/ProductContext'
import { IIngredientes } from '../Interface/IProduct'
import RetanguloBox from '../components/RetanguloBox/RetanguloBox'
// import { Link } from 'react-router-dom'

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

const Ingrediente = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'var(--containerIngrediente)',
  borderRadius: '10px',
  width: '90px',
})
const ImgIlustracao = styled('img')({

  height: '230px',
  borderRadius: '20px'
})


const ImgIngrediente = styled('img')({
  borderRadius: '10px 10px 15px 15px',
  width: '90px',
  height: '73px'
})

const ImgAdd = styled('img')({})

const addStyle = {

  padding: '1rem',
  borderRadius: 3,
}



const IngredientePage = () => {
  const { selectedProduct } = useContext(ProductContext)
  const ingredientes: IIngredientes[] = selectedProduct.ingredientes || ([] as IIngredientes[])
  const [countIngredientes, setCountIngredientes] = useState<{ [key: string]: number }>({})

  const [newIngrediente, setNewIngrediente] = React.useState<{ nome: string; quantidade: number }[]>([])


  function moreIngrediente(ingrediente: IIngredientes): void {
    setCountIngredientes(prevCounts => ({
      ...prevCounts,
      [ingrediente.id]: (prevCounts[ingrediente.id] || 0) + 1,
    }));

    // console.log(countIngredientes)
  }


  function lessIngrediente(ingrediente: IIngredientes): void {
    setCountIngredientes(prevCounts => ({
      ...prevCounts,
      [ingrediente.id]: (prevCounts[ingrediente.id] || 0) - 1,
    }));

    // console.log(countIngredientes)
  }

  const hamburgueres = selectedProduct.tipo

  function handleAddCart(): void {
    const addedIngredients: { nome: string; quantidade: number }[] = [];
    for (const ingrediente of ingredientes) {
      const count = countIngredientes[ingrediente.id] || 0;
      if (count) {
        addedIngredients.push({ nome: ingrediente.nome, quantidade: count });
      }
      
    }

    setNewIngrediente(addedIngredients)

  }

  useEffect(() => {
    const array = newIngrediente.map((e) => `+ ${e.nome} x ${e.quantidade}`)
    console.log(array)
  }, [newIngrediente])

  return (
    <Container>
      {hamburgueres == "Hamburguer" ? (
        <ImgIlustracao src={ilustracaoHamburguer} alt='Hamburguer Ilustração' />
      )
        : (
          <ImgIlustracao src={ilustracaoCachorro} alt='Cachorro Ilustração' />
        )}

      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={1} flexWrap={'wrap'}>
        {ingredientes.map((ingrediente: IIngredientes) => (
          <Ingrediente key={ingrediente.id}>
            <Grid display={'flex'} justifyContent={'center'}>
              <Box>
                <Typography variant='body1' sx={{ color: 'var(--letrasColor)', position: 'absolute', padding: '2px 5px', backgroundColor: 'var(--quantidadeIngrediente) ', borderRadius: '30px' }}>
                  {countIngredientes[ingrediente.id] || 0}
                </Typography>
              </Box>
              <ImgIngrediente src={ingrediente.image} alt={ingrediente.nome} width={'80px'} />
            </Grid>
            <Box display={'flex'} justifyContent={'space-around'} alignItems={'end'} width={'100%'} margin={0.4}>
              <Grid display={'flex'} flexDirection={'column'}>
                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  {ingrediente.nome}
                </Typography>


                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  R$ {ingrediente.valor}
                </Typography>
              </Grid>
              <Box>

                <Grid onClick={() => (moreIngrediente(ingrediente))} sx={{ cursor: 'pointer' }}>
                  <ImgAdd src={iconAdd} alt='Botão adicionar produto' />
                </Grid>

                <Grid onClick={() => (lessIngrediente(ingrediente))} sx={{ cursor: 'pointer' }}>
                  <ImgAdd src={iconLess} alt='Botão adicionar produto' />
                </Grid>
              </Box>

            </Box>
            {/* <Link to={} style={{ textDecoration: 'none', color: 'var(--letrasColor)' }}> */}
            {/* </Link> */}
          </Ingrediente>
        ))}
      </Box>
      <RetanguloBox sx={addStyle} handle={handleAddCart}>Carrinho</RetanguloBox>

    </Container>
  )
}

export default IngredientePage
