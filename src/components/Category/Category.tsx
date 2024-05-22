import { Tabs, Typography } from '@mui/material'
import RetanguloBox from '../RetanguloBox/RetanguloBox'
import { useContext } from "react"
import * as React from 'react'
import { ProductContext } from '../../contextApi/ProductContext'

const BoxStyleSelected = {
    padding: '1rem',
}

const Category = () => {
    const { data, setSearch, setAllProduct, allProduct } = useContext(ProductContext)
    const [value, setValue] = React.useState(0)

    const [selectedIndex, setSelectedIndex] = React.useState(-1)

    const category = Array.from(new Set(data.map(e => e.tipo)))

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    function handle(index: any) {
        setSearch(category[index])
        setAllProduct(false)
        setSelectedIndex(index)
    }

    function handleAll() {
        setSearch('')
        setAllProduct(true)
        setSelectedIndex(-1)
    }

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ '& .MuiTabs-indicator': { display: 'none' } }}

        >
            <RetanguloBox
                sx={{ ...BoxStyleSelected, backgroundColor: allProduct ? 'red' : 'green'}}
                handle={handleAll}
            >
                <Typography>
                    Todos
                </Typography>
            </RetanguloBox>
            {category.map((tipo, index) => (
                <RetanguloBox
                    sx={{ ...BoxStyleSelected, backgroundColor: !allProduct && selectedIndex === index ? 'red' : 'green'}}
                    handle={() => handle(index)}
                    key={index}
                >
                    <Typography>
                        {tipo}
                    </Typography>
                </RetanguloBox>
            ))}
        </Tabs>
    )
}

export default Category
