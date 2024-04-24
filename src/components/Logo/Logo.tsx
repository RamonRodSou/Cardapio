import { Box } from '@mui/material'
import logo from '../../assets/img/Logo.png';

type Props = {}

const Logo = (props: Props) => {
    return (
        <Box>
            <img src={logo} alt="Logo Resenha do Chefes" width={100} height={115} />
        </Box>
    )
}

export default Logo