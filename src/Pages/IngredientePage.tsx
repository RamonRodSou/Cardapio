import { useContext } from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import iconAdd from '../assets/img/iconAdd.png';
import { ProductContext } from '../contextApi/ProductContext'
import { IIngredientes } from '../Interface/IProduct'

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

const ImgAdd = styled('img')({})

const ImgIngrediente = styled('img')({
  borderRadius: '10px 10px 15px 15px',
  width: '90px',
  height: '73px'
})

const IngredientePage = () => {
  const { selectedProduct } = useContext(ProductContext)
  const ingredientes: IIngredientes[] = selectedProduct.ingredientes || ([] as IIngredientes[]);

  return (
    <Container>
      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={1} flexWrap={'wrap'}>
        {ingredientes.map((ingrediente: IIngredientes) => (
          <Ingrediente key={ingrediente.id}>
            <Grid display={'flex'} justifyContent={'center'}>
              <ImgIngrediente src={ingrediente.image} alt={ingrediente.nome} width={'80px'} />
            </Grid>
            <Box display={'flex'} justifyContent={'space-around'} alignItems={'end'} width={'100%'} margin={0.4}>
              <Grid display={'flex'} flexDirection={'column'}>
                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  {ingrediente.nome}
                </Typography>
                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  {ingrediente.valor}
                </Typography>
              </Grid>
              <Grid onClick={() => console.log('Adicionar ' + ingrediente.nome)} sx={{ cursor: 'pointer' }}>
                <ImgAdd src={iconAdd} alt='Botão adicionar produto' />
              </Grid>
            </Box>
          </Ingrediente>
        ))}
      </Box>
    </Container>
  )
}

export default IngredientePage
