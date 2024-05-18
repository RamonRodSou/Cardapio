import { Box, Grid, Typography, styled } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../contextApi/ProductContext'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

type Props = {}

const TypeItem = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: 'var(--containerIngrediente)',
  fontSize: '1.8rem',
  fontWeight: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'

})



const TituloProduto = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: 'var(--tituloProdutoNome)',
  fontSize: '1.8rem',
  fontWeight: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'

})

const TituloProdutoPrincipal = styled(Typography)({

  fontFamily: 'Roboto Condensed',
  color: 'var(--titulo-color)',
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'

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


const Bag = (props: Props) => {


  const { selectedProduct, count, setTotalCompra, newIngrediente } = useContext(ProductContext)


  const valorIng = newIngrediente.reduce((total, ingrediente) => {
    const valorString = ingrediente.valor.toString()
    const valorFloat = parseFloat(valorString.replace(',', '.'))
    return total + valorFloat * count
  }, 0)
  const array = newIngrediente.map((e) => `${e.quantidade} x ${e.name}, `)
  const produto = parseFloat(selectedProduct.valor.toString().replace(',', '.'))
  const total = produto * count + valorIng

  const totalNatela = total.toFixed(2).toString().replace('.', ',')

  useEffect(() => {

    setTotalCompra(total)
  }, [newIngrediente])

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'1rem'} justifyContent={'space-between'} >
      <Grid display={'flex'} flexDirection={'column'} gap={'.5rem'} justifyContent={'space-between'} margin={'3rem .5rem'}>
        <Grid2 display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography sx={valorRealStyleDinheiro}>Simulando Pedido</Typography>
        </Grid2>
        <Grid display={'flex'} flexDirection={'column'} margin={'2rem auto'} gap={'.5rem'}>
          <Grid2 display={'flex'} gap={'1rem'}>
            <TypeItem>
              Tipo:
            </TypeItem>
            <TituloProduto>
              {selectedProduct.tipo}
            </TituloProduto>
          </Grid2>

          <Grid2 display={'flex'} gap={'1rem'}>
            <TypeItem>
              Lanche:
            </TypeItem>
            <TituloProduto>
              {selectedProduct.name}
            </TituloProduto>
          </Grid2>

          <Grid2 display={'flex'} gap={'1rem'}>
            <TypeItem>
              Quantidade:
            </TypeItem>
            <TituloProduto>
              {count}
            </TituloProduto>
          </Grid2>

          <Grid2 display={'flex'} gap={'1rem'}>
            <TypeItem>
              Temperatura:
            </TypeItem>
            <TituloProduto>
              {selectedProduct.temperatura}
            </TituloProduto>
          </Grid2>
          {
            valorIng ? (

              <Grid2 display={'flex'} gap={'1rem'} flexDirection={'column'} >
                <TypeItem>
                  Adicionar:
                </TypeItem>
                <TituloProduto>
                  {array}
                </TituloProduto>
              </Grid2>
            ) :
              <>
              </>
          }
        </Grid>
      </Grid>

      <Grid display={'flex'} flexDirection={'row'} margin={'2rem auto'} gap={'.5rem'}>
      <Typography sx={valorRealStyleDinheiro}> Total:</Typography>
        <Grid display={'flex'} gap={1} alignItems={'center'} >
          <Typography sx={valorRealStyleDinheiro}> {totalNatela} </Typography>
          <Typography sx={valorRealStye}> R$</Typography>

        </Grid>
      </Grid>
    </Box>
  )
}



//       console.log('Tipo: ' + selectedProduct.tipo + '\nLanche: ' + selectedProduct.name + '\nQuantidade: '
//  + count + '\nTemperatura: ' + selectedProduct.temperatura + '\nAdicionar: ' + array + '\nTotal: ' + total.toFixed(2))

export default Bag