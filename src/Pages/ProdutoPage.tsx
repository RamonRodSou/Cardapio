import React, { useEffect } from 'react'
import { Box, Grid, Typography, styled } from '@mui/material'
import { getProduct } from '../server/get'
import IconsTag from '../components/IconsTag/IconsTag'
import TemperaturaSlade from '../components/TemperaturaSlade/TemperaturaSlade'
import RetanguloBox from '../components/RetanguloBox/RetanguloBox'

type Props = {}


const ImgProduto = styled('img')({

    width: '100%',
    height: '330px',
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

    const [product, setProduct] = React.useState<any[]>([])
    const [count, setCount] = React.useState<number>(1)
    const [temperatura, setTemperatura] = React.useState<number>(60)


    
function handleMore():number {
    if(count >= 1) setCount(count + 1)
        return count
}

function handleTemperaturaChange (novaTemperatura: number) {
    setTemperatura(novaTemperatura);
  };

function handleLess():number {
    if(count <= 1){
        alert("1 é a quantidade mínina de produtos")
    }else{
        setCount(count - 1)
    }
    return count
}

function handleAddCart():void {
    console.log(count)
    console.log(temperatura)
}

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProduct();
            setProduct(data);
        };
        fetchData();
    }, []);

    return (
        <Box>
            {product.length > 0 && (
                <Box key={product[0].id} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>

                    {/* Imagem */}
                    <Box>
                        <ImgProduto src={product[0].image} alt={product[0].image} />
                    </Box>

                    {/* Nome / Estrelas / Tempo*/}
                    <Box display={'flex'} flexDirection={'column'} margin={'1rem .7rem .5rem .7rem'}>
                        <TituloProduto>
                            {product[0].name}
                        </TituloProduto>
                        <Grid display={'flex'} gap={.6} alignItems={'center'}>
                            <IconsTag isStar={true} />
                            <Typography variant="caption" color={'var(--tituloNameCinza)'}>{product[0].star}</Typography>
                            <Typography variant="caption" color={'var(--tituloNameCinza)'}> - {product[0].time} mins</Typography>
                        </Grid>
                    </Box>

                    {/* Descrição */}
                    <Box margin={'1rem .7rem .2rem .7rem'}>
                        <Typography variant="body2" margin={'.8rem 0'} color={'var(--letrasColor)'}>{product[0].descricao}</Typography>
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
                                <RetanguloBox sx={botoesSyle} handle={ handleLess } > - </RetanguloBox>
                                <Typography variant="body1" color={'var(--letrasColor)'}> {count} </Typography>
                                <RetanguloBox sx={botoesSyle} handle={ handleMore } > + </RetanguloBox>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Valor / Adicionar */}
                    <Box display={'flex'} justifyContent={'space-between'} margin={'1rem .7rem .5rem .7rem'} >
                        <Grid >
                            <Typography variant="body2" color={'var(--letrasColor)'}> Total </Typography>
                            <Grid display={'flex'} gap={1} alignItems={'center'}>
                                <Typography sx={valorRealStye}> R$: </Typography>
                                <Typography sx={valorRealStyleDinheiro}>{product[0].valor}  </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <RetanguloBox sx={addStyle} handle={ handleAddCart }>Adicionar</RetanguloBox>
                        </Grid>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default ProdutoPage