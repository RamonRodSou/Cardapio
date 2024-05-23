import React, { useContext, useEffect } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import IconsTag from '../components/IconsTag/IconsTag'
import TemperaturaSlade from '../components/TemperaturaSlade/TemperaturaSlade'
import RetanguloBox from '../components/RetanguloBox/RetanguloBox'
import { useParams } from 'react-router-dom'
import { getProductById } from '../server/get'
import { ProductContext } from '../contextApi/ProductContext'
import { Link } from 'react-router-dom'

type Props = {
}

const ImgProduto = styled('img')({

    width: '100%',
    height: '330px',
    borderRadius: '15px'
})
const TituloProduto = styled(Typography)({

    fontFamily: 'Roboto Condensed',
    color: 'var(--tituloProdutoNome)',
    fontSize: '1.8rem',
    fontWeight: 'inherit',

})
const botoesSyle = {

    padding: '.5rem',
    width: '20px',
    height: '20px',
    borderRadius: 2,
    fontFamily: 'Roboto Condensed',
    fontSize: '1.5rem',
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
const addStyle = {

    padding: '1rem',
    borderRadius: 3,
}

const ProdutoPage: React.FC<Props> = () => {

    const { id } = useParams<string>()
    const { setPageBack, product, setProduct, temperatura, setTemperatura, count, setCount, selectedProduct, totalNaTelaString, setTotalNaTelaString } = useContext(ProductContext)

    if (!product) {
        return <div>Carregando...</div>
    }

    function handleTemperaturaChange(novaTemperatura: number) {
        setTemperatura(novaTemperatura)
    }

    function handleMore(): number {
        (count >= 1) ? setCount(count + 1) : console.log('Não há mais unidades disponíveis')
        return count
    }

    function handleLess(): number {
        (count <= 1) ? alert("1 é a quantidade mínina de produtos") : setCount(count - 1)
        return count
    }

    function handleAddCart(): void {

        selectedProduct.temperatura = temperatura
        selectedProduct.count = count
    }

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const data = await getProductById(id)
                setProduct(data)
            }
            fetchProduct()
        }
        setPageBack(true)

    }, [id, setPageBack])

    useEffect(() => {
        if (product && typeof product.valor !== 'undefined') {
            const produto = parseFloat(product.valor.toString().replace(',', '.'))
            if (!isNaN(produto)) {
                const totalNatela = (produto * count).toFixed(2)
                const totalNaTelaString = totalNatela.toString().replace('.', ',')
                setTotalNaTelaString(totalNaTelaString)
            } else {  
                setTotalNaTelaString('0,00')
            }
        }
    }, [product, count])

    return (
        <Box>
            <Box key={product.id} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                {/* Imagem */}
                <Box>
                    <ImgProduto src={product.image} alt={product.image} />
                </Box>

                {/* Nome / Estrelas / Tempo*/}
                <Box display={'flex'} flexDirection={'column'} margin={'1rem .7rem .5rem .7rem'}>
                    <TituloProduto>
                        {product.name}
                    </TituloProduto>
                    <Grid display={'flex'} gap={.6} alignItems={'center'}>
                        <IconsTag isStar={true} />
                        <Typography variant="caption" color={'var(--tituloNameCinza)'}>{product.star}</Typography>
                        <Typography variant="caption" color={'var(--tituloNameCinza)'}> - {product.time} mins</Typography>
                    </Grid>
                </Box>

                {/* Descrição */}
                <Box margin={'1rem .7rem .2rem .7rem'}>
                    <Typography variant="body2" margin={'.8rem 0'} color={'var(--letrasColor)'}>{product.descricao}</Typography>
                </Box>

                {/* Temperatura / Quantidade */}
                <Box display={'flex'} justifyContent={'space-between'} margin={'1rem .7rem .5rem .7rem'}>
                    <Grid>
                        <Typography variant="caption" color={'var(--tituloNameCinza)'}>Temperatura</Typography>
                        <TemperaturaSlade initialValue={temperatura} onChange={handleTemperaturaChange} />
                    </Grid>
                    <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Typography variant="caption" color={'var(--letrasColor)'}>Quantidade</Typography>
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <RetanguloBox sx={botoesSyle} handle={handleLess} > - </RetanguloBox>
                            <Typography variant="body1" color={'var(--letrasColor)'}> {count} </Typography>
                            <RetanguloBox sx={botoesSyle} handle={handleMore} > + </RetanguloBox>
                        </Grid>
                    </Grid>
                </Box>

                {/* Valor / Adicionar */}
                <Box display={'flex'} justifyContent={'space-between'} margin={'1rem .7rem .5rem .7rem'} >
                    <Grid >
                        <Typography variant="body2" color={'var(--letrasColor)'}> Total </Typography>
                        <Grid display={'flex'} gap={1} alignItems={'center'}>
                            <Typography sx={valorRealStye}> R$: </Typography>
                            <Typography sx={valorRealStyleDinheiro}>{totalNaTelaString}  </Typography>
                        </Grid>
                    </Grid>
                    <Link to={`/produto/${product.id}/ingredientes`} style={{ textDecoration: 'none', color: 'var(--letrasColor)' }}>
                        <RetanguloBox sx={addStyle} handle={handleAddCart}>Adicionar</RetanguloBox>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default ProdutoPage