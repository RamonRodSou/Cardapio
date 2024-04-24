import { Box, styled } from '@mui/material'
import {CSSProperties, ReactNode } from 'react'

type Props = {

    children: ReactNode;
    sx?: CSSProperties;

}

const Filter = styled(Box)({

    backgroundColor: 'var(--retangulosOp-color)',
    borderRadius: 20,
    margin: '.5rem .5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
})

const RetanguloBox = (props: Props) => {
    return (
        <Filter sx={props.sx}>
            {props.children}
        </Filter>
    )
}

export default RetanguloBox