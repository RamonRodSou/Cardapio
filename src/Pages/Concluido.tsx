import { Box, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ProductContext } from '../contextApi/ProductContext'

type Props = {}

const Concluido = (props: Props) => {

    const { dadosClient, setDadosClient, submitCount, setSubmitCount, totalCompra } = useContext(ProductContext)

    return (
        <Box 
            display={'flex'} 
            height={'70vh'} 
            flexDirection={'column'} 
            alignItems={'center'} 
            justifyContent={'space-around'} 
            margin={'4rem 2rem'} 
            gap={'1rem'}
            border={'1px solid #fff'}
            padding={'1rem'}
        >
            <Typography variant='body1' sx={{ fontSize: '2.3rem' }}>Pedido Concluído</Typography>
            <Typography variant='body1' sx={{ fontSize: '4.5rem', textAlign: 'center' }}>#{submitCount}</Typography>
            <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{dadosClient.name}</Typography>
                <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{dadosClient.phone}</Typography>
            </Grid>
            <Typography variant='body1' sx={{ fontSize: '2.5rem', color: 'var(--valor-color)' }}>Total: R$ {totalCompra.toFixed(2)}</Typography>

        </Box>
    )
}

export default Concluido