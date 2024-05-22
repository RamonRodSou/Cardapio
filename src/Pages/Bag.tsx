import { useContext, useEffect } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { ProductContext } from '../contextApi/ProductContext'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import cancel from '../assets/img/iconCancel.png'
import iconHome from '../assets/img/iconHomer.png'
import { Link } from 'react-router-dom'

const TitlePage = styled(Typography)({
  fontFamily: 'Roboto Condensed',
  color: 'var(--title)',
  fontSize: '2rem',
  display: 'flex',
  flexDirection: 'column',
})

const TypeItem = styled(Typography)({
  fontFamily: 'Roboto Condensed',
  color: 'var(--tituloNameCinza)',
  fontSize: '1.3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

const Title = styled(Typography)({
  fontFamily: 'Roboto Condensed',
  color: 'var(--tituloProdutoNome)',
  fontSize: '1rem',
})

const ImgProduto = styled('img')({
  width: '80px',
  height: '80px',
  borderRadius: '15px'
})

const Cancel = styled(Box)({
  position: 'absolute',
  marginTop: '-25px',
  right: '7px',
  borderRadius: '15px'
})

const valorRealStye = {
  color: 'var(--retangulosOp-color)',
  fontSize: '1.96rem',
  fontWeight: '600',
}

const valorRealStyleDinheiro = {
  color: 'var(--letrasColor)',
  fontSize: '2rem',
  fontWeight: '600',
}

const Bag = () => {
  const { setTotalCompra, bag, setBag, setPageBack } = useContext(ProductContext)

  const total = bag.reduce((acc, item) => {
    const valorProdutoString = item.produto.valor.toString()
    const valorProduto = parseFloat(valorProdutoString.replace(',', '.'))
    const totalProduto = valorProduto * item.produto.count
    const totalIngredientes = item.ingredientes.reduce((accIng, ingrediente) => {
      const valorIngredienteString = ingrediente.valor.toString()
      const valorIngrediente = parseFloat(valorIngredienteString.replace(',', '.'))
      return accIng + (valorIngrediente * ingrediente.quantidade)
    }, 0)
    return acc + totalProduto + totalIngredientes
  }, 0)
  const totalNatela = total.toFixed(2).toString().replace('.', ',')

  const handleCancel = (cartId: string): void => {
    setBag(prevBag => prevBag.filter(item => item.cartId !== cartId))
  }

  useEffect(() => {
    setTotalCompra(total)
    setPageBack(false)
  }, [bag])

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'space-between'}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} margin={'0 .5rem'} >
        <Link to={'/'}>
          <img src={iconHome} alt='Icone para voltar a página inícial' />
        </Link>
        <TitlePage>Carrinho</TitlePage>

      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={'1.5rem'} justifyContent={'space-between'} margin={'.5rem .5rem'}>
        {bag.map((bagItem) => (
          <Grid key={bagItem.cartId} display={'flex'} justifyContent={'space-between'} sx={{ border: '1px solid #fff', padding: '.5rem', borderRadius: '10px' }}>
            <Cancel onClick={() => handleCancel(bagItem.cartId)}>
              <img src={cancel} alt='Botão Cancelar Produto' />
            </Cancel>
            <Grid2 display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <ImgProduto src={bagItem.produto.image} alt={bagItem.produto.name} />
              <Title sx={{ fontSize: '1rem' }}>
                {bagItem.produto.tipo}
              </Title>
              <Title>
                {bagItem.produto.name}
              </Title>
            </Grid2>
            <Grid2 display={'flex'} width={'50%'}>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} gap={'.5rem'}>
                <TypeItem width={'100%'} textAlign={'center'}>
                  Adicionar:
                </TypeItem>
                <Box display={'flex'} flexWrap={'wrap'} gap={'.3rem'} textAlign={'center'}>
                  {bagItem.ingredientes.map((ingrediente) => (
                    <Typography key={ingrediente.id}>
                      {`${ingrediente.quantidade} x ${ingrediente.name}`}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid2>
            <Grid2 display={'flex'} gap={'.2rem'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} width={'20%'}>
              <Box display={'flex'} gap={'.2rem'} alignItems={'center'}>
                <TypeItem>
                  Qtd:
                </TypeItem>
                <Title>
                  {bagItem.produto.count}
                </Title>
              </Box>
              <Box display={'flex'} gap={'.2rem'}>
                <Title sx={{ color: 'var(--retangulosOp-color)', fontSize: '1.5', fontWeight: '600' }}>
                  R$
                </Title>
                <Title>
                  {(bagItem.produto.count * parseFloat(bagItem.produto.valor.toString().replace(',', '.'))).toFixed(2).replace('.', ',')}
                </Title>
              </Box>
            </Grid2>
          </Grid>
        ))}
      </Box>

      <Box display={'flex'} flexDirection={'row'} margin={'2rem auto'} gap={'.5rem'} alignItems={'center'}>
        <Typography sx={valorRealStyleDinheiro}>Total:</Typography>
        <Grid display={'flex'} gap={1} alignItems={'center'}>
          <Typography sx={valorRealStyleDinheiro}>{totalNatela}</Typography>
          <Typography sx={valorRealStye}>R$</Typography>
        </Grid>
      </Box>
    </Box>
  )
}

export default Bag
