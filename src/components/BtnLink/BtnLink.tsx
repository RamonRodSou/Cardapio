import { Link } from 'react-router-dom'
import RetanguloBox from '../RetanguloBox/RetanguloBox'

type Props = {
    handleAddCart: any
    link: string
    title: string
}

const addStyle = {
    padding: '1rem',
    borderRadius: 3,
}
const BtnLink = (props: Props) => {
    return (
        <Link to={props.link} style={{ textDecoration: 'none', color: 'var(--letrasColor)' }}>
            <RetanguloBox sx={addStyle} handle={props.handleAddCart}>
             {
                (props.title == null) ? 'Adicionar' : props.title
             }
            </RetanguloBox>
        </Link>
    )
}

export default BtnLink