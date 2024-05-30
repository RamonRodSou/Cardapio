import { Box, styled } from '@mui/material'
import {CSSProperties } from 'react'

type Props = {

    children: any
    sx?: CSSProperties
    handle(): any
}

const Filter = styled(Box)({

    backgroundColor: 'var(--retangulosOp-color)',
    borderRadius: 20,
    margin: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
})


const RetanguloBox = (props: Props) => {
    return (
        <Filter sx={props.sx}  onClick={props.handle}>
            {props.children}
        </Filter>
    )
}

export default RetanguloBox