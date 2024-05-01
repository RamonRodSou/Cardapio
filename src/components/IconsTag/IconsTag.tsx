import Star from '../../assets/img/star.png'
import Heart from '../../assets/img/heart.png'

type Props = {
  isStar: boolean;
}

const IconsTag = (props: Props) => {

  const { isStar } = props;

  return (
    <div>
      {isStar ? (
        <img src={Star} alt='Estrela' width={20} height={20} />
      ) :
        <img src={Heart} alt='Coração' width={20} height={20} />
      }
    </div>
  )
}

export default IconsTag