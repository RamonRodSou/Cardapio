import React, { useEffect } from 'react'
import NameLogo from '../components/NameLogo/NameLogo'
import { Box, styled } from '@mui/material'
import { getProduct } from '../server/get'

type Props = {}

const ImgProduto = styled('img')({

    width: '300px',
    height: '300px',
  })

const ProdutoPage: React.FC<Props> = () => {

    const [product, setProduct] = React.useState<any>({})

    useEffect(() => {
        const fetchData = async () => {
          const data = await getProduct();
          setProduct(data);
        };
        fetchData();
      }, []);

      console.log( product )
    
    return (
        <Box>
            {product[0].map((product:any): any => (

                <Box key={product[0].id}>
                    <ImgProduto src={product.image} alt={product.image} />
                </Box>        
            ))}
        </Box>
    )
}

export default ProdutoPage