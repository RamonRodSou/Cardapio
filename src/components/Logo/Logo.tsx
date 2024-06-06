import logo from '../../assets/img/Logo.webp';
import { Link } from 'react-router-dom';

type Props = {}

const Logo = (props: Props) => {
    return (
        <Link to={`/`} style={{ textDecoration: 'none', color: 'var(--letrasColor)' }}>
            <img src={logo} alt="Logo" width={100} height={115} />
        </Link>
    )
}

export default Logo