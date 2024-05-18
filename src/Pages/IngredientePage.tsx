import { useContext, useEffect, useState } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import ilustracaoHamburguer from '../assets/img/burguer.webp'
import ilustracaoCachorro from '../assets/img/hot.webp'
import ilustracaoCombo from '../assets/img/combo.webp'
import ilustracaoPizza from '../assets/img/pizza.webp'
import iconAdd from '../assets/img/iconAdd.webp'
import iconLess from '../assets/img/iconLess.webp'
import { ProductContext } from '../contextApi/ProductContext'
import RetanguloBox from '../components/RetanguloBox/RetanguloBox'
import { Link } from 'react-router-dom'
import Ingredientes from '../Class/Ingredientes'

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
  width: '100px',
})
const ImgIlustracao = styled('img')({

  height: '230px',
  borderRadius: '20px'
})


const ImgIngrediente = styled('img')({
  borderRadius: '10px 10px 15px 15px',
  width: '100px',
  height: '80px'
})

const ImgAdd = styled('img')({})

const addStyle = {

  padding: '1rem',
  borderRadius: 3,
}
const valorRealStye = {

  color: 'var(--retangulosOp-color)',
  fontSize: '1.56rem',
  fontWeight: '600',
}
const valorRealStyleDinheiro = {

  color: 'var(--letrasColor)',
  fontSize: '2.2rem',
  fontWeight: '600',
}


const IngredientePage = () => {
  const { newIngrediente, setNewIngrediente, selectedProduct, setTotalCompra, bag, count} = useContext(ProductContext)

  const ingredientes: Ingredientes[] = selectedProduct.ingredientes || ([] as Ingredientes[])
  const [countIngredientes, setCountIngredientes] = useState<{ [key: string]: number }>({})
  const [cartUpdated, setCartUpdated] = useState<boolean>(false)



  function moreIngrediente(ingrediente: Ingredientes) {
    setCountIngredientes(prevCounts => ({
      ...prevCounts,
      [ingrediente.id]: (prevCounts[ingrediente.id] || 0) + 1,
    }))
    return countIngredientes
  }


  function lessIngrediente(ingrediente: Ingredientes) {
    setCountIngredientes(prevCounts => ({
      ...prevCounts,
      [ingrediente.id]: (prevCounts[ingrediente.id] || 0) - 1,
    }))
    return countIngredientes
  }



  const valorIng = newIngrediente.reduce((total, ingrediente) => {
    const valorString = ingrediente.valor.toString()
    const valorFloat = parseFloat(valorString.replace(',', '.'))
    return total + valorFloat * count
  }, 0)

  const typeLanch = selectedProduct.tipo

  const produto = parseFloat(selectedProduct.valor.toString().replace(',', '.'))
  const total = produto * count + valorIng
  const totalNatela = (produto * count).toFixed(2)
  const totalNaTelaString = totalNatela.toString().replace('.', ',')


  function handleAddCart(): Ingredientes[] {
    const addedIngredients: Ingredientes[] = []
    for (const ingrediente of ingredientes) {
      const count = countIngredientes[ingrediente.id] || 0
      if (count) {
        addedIngredients.push({
          id: ingrediente.id,
          image: ingrediente.image,
          name: ingrediente.name,
          valor: ingrediente.valor,
          quantidade: count
        })
      }
    }

    setNewIngrediente(addedIngredients)
    setCartUpdated(true)

    bag.push(selectedProduct)

    return addedIngredients

  }


  useEffect(() => {
    if (cartUpdated) {
      setCartUpdated(false)
      setTotalCompra(total)
    }
  }, [newIngrediente, cartUpdated])



  return (
    <Container>
      {typeLanch == "Hamburguer" ? (
        <ImgIlustracao src={ilustracaoHamburguer} alt='Hamburguer Ilustração' />
      ) :
        typeLanch == "HotDog" ? (
          <ImgIlustracao src={ilustracaoCachorro} alt='Cachorro Ilustração' />
        ) :
          typeLanch == "Pizza" ? (
            <ImgIlustracao src={ilustracaoPizza} alt='Cachorro Ilustração' />
          ) :
            (
              <ImgIlustracao src={ilustracaoCombo} alt='Cachorro Ilustração' />
            )
      }

      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={1} flexWrap={'wrap'}>
        {count > 1 ? (
          <Typography variant='body1' sx={{ color: 'var(--letrasColor)', margin: '1rem' }}>
            Estará adicionando os ingredientes para todos os produtos.
          </Typography>
        ) :
          <>
          </>
        }
        {ingredientes.map((ingrediente: Ingredientes) => (
          <Ingrediente key={ingrediente.id}>
            <Grid display={'flex'} justifyContent={'center'}>
              <Box>
                <Typography variant='body1' sx={{ color: 'var(--letrasColor)', position: 'absolute', margin: '-4px',padding: '2px 5px',   backgroundColor: 'var(--containerIngrediente)', borderRadius: '6px' }}>
                  {countIngredientes[ingrediente.id] || 0}
                </Typography>
              </Box>
              <ImgIngrediente src={ingrediente.image} alt={ingrediente.name} width={'80px'} />
            </Grid>
            <Box display={'flex'} flexDirection={'row'}  justifyContent={'space-around'} alignItems={'center'} width={'100%'} margin={0.4}>
              <Grid display={'flex'} flexDirection={'column'}>
                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  {ingrediente.name}
                </Typography>


                <Typography variant='caption' sx={{ color: 'var(--letrasColor)' }}>
                  R$ {ingrediente.valor}
                </Typography>
              </Grid>
              <Box >
              <Grid onClick={() => (moreIngrediente(ingrediente))} sx={{ cursor: 'pointer' }}>
                <ImgAdd src={iconAdd} alt='Botão adicionar produto' width={25} />
              </Grid>

              <Grid onClick={() => (lessIngrediente(ingrediente))} sx={{ cursor: 'pointer' }}>
                <ImgAdd src={iconLess} alt='Botão adicionar produto' width={25}/>
              </Grid>
            </Box>
            </Box>
          </Ingrediente>
        ))}
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} margin={'1rem .7rem .5rem .7rem'} >
        <Grid >
          <Typography variant="body2" color={'var(--letrasColor)'}> Total </Typography>
          <Grid display={'flex'} gap={1} alignItems={'center'}>
            <Typography sx={valorRealStye}> R$: </Typography>
            <Typography sx={valorRealStyleDinheiro}>{totalNaTelaString}</Typography>
          </Grid>
        </Grid>
        <Link to={`/produto/bag`} style={{ textDecoration: 'none', color: 'var(--letrasColor)' }}>
          <RetanguloBox sx={addStyle} handle={handleAddCart}>Adicionar</RetanguloBox>
        </Link>
      </Box>
    </Container >
  )
}

export default IngredientePage