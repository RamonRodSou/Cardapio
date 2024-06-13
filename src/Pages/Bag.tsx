import { useContext, useEffect } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { ProductContext } from '../contextApi/ProductContext'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import cancel from '../assets/img/iconCancel.png'
import iconHome from '../assets/img/iconHomer.png'
import { Link } from 'react-router-dom'
import BtnLink from '../components/BtnLink/BtnLink'

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


  function handleAddCart() {
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
                  {(bagItem.produto.count * parseFloat(bagItem.produto.valor.toString().replace(',', '.')) +
                    bagItem.ingredientes.reduce((acc, ingrediente) => acc + (parseFloat(ingrediente.valor.toString().replace(',', '.')) *
                      ingrediente.quantidade), 0)).toFixed(2).toString().replace('.', ',')}

                </Title>
              </Box>
            </Grid2>
          </Grid>
        ))}
      </Box>

      <Box display={'flex'} flexDirection={'column'} margin={'.5rem'} gap={'.5rem'} alignItems={'flex-end'}  >
        <Grid display={'flex'} flexDirection={'row'} gap={'.5rem'} alignItems={'center'} margin={'0 .5rem'}>
          <Typography sx={valorRealStye}>R$</Typography>
          <Typography sx={valorRealStyleDinheiro}>{totalNatela}</Typography>
        </Grid>
        <Grid display={'flex'} flexDirection={'row'} gap={'.5rem'} alignItems={'center'} justifyContent={'space-between'} >
          <BtnLink link={`/`} title={'Continuar'} />
          <BtnLink link={`/produto/bag/pagamento`} title={'Finalizar'} />
        </Grid>
      </Box>

    </Box>
  )
}

export default Bag
