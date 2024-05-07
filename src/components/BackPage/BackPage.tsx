import { useContext } from 'react'
import iconBack from '../../assets/img/iconBack-arrow.png'
import { ProductContext } from '../../contextApi/ProductContext'
import { styled } from '@mui/material'


const BackPage = () => {

    const { pageBack } = useContext(ProductContext)
    const BackDiv = styled('div')({
        position:'absolute',
    })

    const handleGoBack = () => {
        window.history.back();
    
    };
    return (

        pageBack ?
            <BackDiv onClick={handleGoBack}>
                <img src={iconBack} alt='Icone para voltar de página' width={25} />
            </BackDiv> :
            <></>

    )
}

export default BackPage 