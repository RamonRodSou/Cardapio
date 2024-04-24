import { Box, Tab, Tabs, Typography } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import * as React from 'react';
type Props = {}


const BoxStyleSelected = {

    padding: '1rem',
}

const BoxStyle = {

    padding: '1rem',
    backgroundColor: '#fff',
    color: '#6A6A6A'
}

const Category = (props: Props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >

            <RetanguloBox sx={BoxStyleSelected}>
                <Typography>
                    Todos
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle}>
                <Typography>
                    Combos
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle}>
                <Typography>
                    Rodizio
                </Typography>
            </RetanguloBox>

            <RetanguloBox sx={BoxStyle}>
                <Typography>
                    Bebidas
                </Typography>
            </RetanguloBox>
        </Tabs>

    )
}

export default Category