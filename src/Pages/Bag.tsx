import { Box, Grid, Typography, styled } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ProductContext } from '../contextApi/ProductContext'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import cancel from '../assets/img/iconCancel.png'

const TitlePage = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: 'var(--title)',
  fontSize: '2.3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'

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


  const { count, setTotalCompra, newIngrediente, bag } = useContext(ProductContext)

  const valorIng = newIngrediente.reduce((total, ingrediente) => {
    const valorString = ingrediente.valor.toString()
    const valorFloat = parseFloat(valorString.replace(',', '.'))
    return total + valorFloat * count
  }, 0)

  const total = bag.reduce((acc, element) => {
    const valorString = element.valor.toString()
    const produto: number = parseFloat(valorString.replace(',', '.'))
    const count: number = element.count
    const totalProduct: number = produto * count
    return acc + totalProduct
  }, 0)

  const totalNatela = total.toFixed(2).toString().replace('.', ',')

  function handleCancel(bagProduct: any): void {
    console.log("Cancelar Produto" + bagProduct)
  }

  useEffect(() => {

    setTotalCompra(total)
  }, [newIngrediente])

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'space-between'} >
      <Box display={'flex'} flexDirection={'column'} gap={'.5rem'} justifyContent={'space-between'} margin={'.5rem .5rem'}>
        <TitlePage> Carrinho </TitlePage>
        {bag.map((bagProduct, index) => (
          <Grid key={index} display={'flex'} justifyContent={'space-between'} sx={{ border: '1px solid #fff', padding: '.5rem', borderRadius: '10px' }}>
            <Cancel onClick={() => handleCancel(bagProduct.id)}>
              <img src={cancel} alt='Botão Cancelar Produto' />
            </Cancel>
            <Grid2 display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <ImgProduto src={bagProduct.image} alt={bagProduct.name} />
              <Title sx={{ fontSize: '1rem' }}>
                {bagProduct.tipo}
              </Title>
              <Title>
                {bagProduct.name}
              </Title>
            </Grid2>
            <Grid2 display={'flex'} width={'50%'}>
              {valorIng ? (
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} gap={'.5rem'}>
                  <TypeItem width={'100%'} textAlign={'center'}>
                    Adicionar:
                  </TypeItem>
                  <Box display={'flex'} flexWrap={'wrap'} gap={'.3rem'} textAlign={'center'}>
                    {bagProduct.ingredientes.map((e, index) => (
                      <Title key={index} sx={{ fontSize: '.8rem', whiteSpace: 'pre-wrap' }} width={'calc(50% - .5rem)'}>
                        {`${e.quantidade} x ${e.name}`}
                      </Title>
                    ))}
                  </Box>
                </Box>
              ) : null}
            </Grid2>
            <Grid2 display={'flex'} gap={'.2rem'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'} width={'20%'}>
              <Box display={'flex'} gap={'.2rem'} alignItems={'center'}>
                <TypeItem>
                  Qtd:
                </TypeItem>
                <Title>
                  {bagProduct.count}
                </Title>
              </Box>
              <Box display={'flex'} gap={'.2rem'}>
                <Title sx={{ color: 'var(--retangulosOp-color)', fontSize: '1.5', fontWeight: '600' }}>
                  R$
                </Title>
                <Title>
                {(bagProduct.count * parseFloat(bagProduct.valor.toString().replace(',', '.'))).toFixed(2).replace('.', ',')}
                </Title>
              </Box>
            </Grid2>
          </Grid>
        ))}
      </Box>

      <Box display={'flex'} flexDirection={'row'} margin={'2rem auto'} gap={'.5rem'} alignItems={'center'}>
        <Typography sx={valorRealStyleDinheiro}> Total:</Typography>
        <Grid display={'flex'} gap={1} alignItems={'center'} >
          <Typography sx={valorRealStyleDinheiro}> {totalNatela} </Typography>
          <Typography sx={valorRealStye}> R$</Typography>

        </Grid>
      </Box>
    </Box>
  )
}
export default Bag
