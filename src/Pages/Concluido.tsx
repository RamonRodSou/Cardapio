import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ProductContext } from '../contextApi/ProductContext'

type Props = {}

const Concluido = (props: Props) => {

    const { dadosClient, setDadosClient, submitCount, setSubmitCount, totalCompra } = useContext(ProductContext)

    return (
        <Box
            display={'flex'}
            height={'60vh'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'space-around'}
            margin={'4rem 2rem'}
            gap={'1rem'}
            border={'1px solid #fff'}
            padding={'1rem'}
        >
            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography variant='body1' sx={{ fontSize: '2.3rem' }}>Pedido</Typography>
                <Typography variant='body1' sx={{ fontSize: '2.3rem' }}>Concluído</Typography>

            </Grid>
            <Typography variant='body1' sx={{ fontSize: '4.5rem', textAlign: 'center' }}>#{submitCount}</Typography>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{dadosClient.name}</Typography>
                <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{dadosClient.phone}</Typography>
            </Grid>
            <Grid display={'flex'} gap={'1rem'} alignItems={'center'}>
                <Typography variant='body1' sx={{ fontSize: '2.7rem', fontWeight: 600, color: 'var(--valor-color)' }}>R$</Typography>
                <Typography variant='body1' sx={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--letrasColor)' }}>{totalCompra.toFixed(2).toString().replace('.', ',')}</Typography>

            </Grid>

        </Box>
    )
}

export default Concluido
