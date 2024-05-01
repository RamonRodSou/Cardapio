import { Box, Tab, Tabs, Typography } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import * as React from 'react';
type Props = {}


const BoxStyleSelected = {
    padding: '1rem',

}

const BoxStyle = {

    padding: '1rem',
    backgroundColor: 'var(--boxColor )',
    color: 'var(--tituloNameCinza)'
}

const Category = (props: Props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function handle () {

        console.log('teste')
    }
    
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >

            <RetanguloBox sx={BoxStyleSelected} handle={handle}>
                <Typography>
                    Todos
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle} handle={handle}>
                <Typography>
                    Combos
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle} handle={handle}>
                <Typography>
                    Rodizio
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle} handle={handle}>
                <Typography>
                    Bebidas
                </Typography>
            </RetanguloBox>
        </Tabs>

    )
}

export default Category