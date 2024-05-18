import { Tabs, Typography } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import { useContext } from "react"
import * as React from 'react'
import { ProductContext } from '../../contextApi/ProductContext'
import { getProduct } from '../../server/get'

type Props = {}

const BoxStyleSelected = {
    padding: '1rem',
}

const Category = (props: Props) => {
    const { data, setSearch } = useContext(ProductContext)
    const [value, setValue] = React.useState(0)

    const category = Array.from(new Set(data.map(e => e.tipo)))

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    function handle(index: any) {
        console.log(category[index])
        setSearch(category[index])
    }

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            {category.map((tipo, index) => (
                <RetanguloBox sx={BoxStyleSelected} handle={() => handle(index)} key={index}>
                    <Typography>
                        {tipo}
                    </Typography>
                </RetanguloBox>
            ))}
        </Tabs>
    )
}

export default Category
