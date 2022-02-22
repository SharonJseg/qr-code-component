import './Card.css';
import cardImge from '../../images/image-qr-code.png';

const Card = () => {
  return (
    <div className='card'>
      <figure>
        <img className='card__image' src={cardImge} alt='qr' />
      </figure>
      <h2 className='card__title'>
        Improve your front-end skills by building projects
      </h2>
      <p className='card__text'>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default Card;
