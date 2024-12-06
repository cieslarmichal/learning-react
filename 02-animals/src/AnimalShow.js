import './AnimalShow.css';

import BirdImage from './images/bird.svg';
import CatImage from './images/cat.svg';
import CowImage from './images/cow.svg';
import DogImage from './images/dog.svg';
import GatorImage from './images/gator.svg';
import HorseImage from './images/horse.svg';
import HeartImage from './images/heart.svg';

import { useState } from 'react';

const imagesMapping = {
  bird: BirdImage,
  cat: CatImage,
  cow: CowImage,
  dog: DogImage,
  gator: GatorImage,
  horse: HorseImage,
};

function AnimalShow({ type, index }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div
      className="animal-show"
      onClick={handleClick}
    >
      <img
        className="animal"
        src={imagesMapping[type]}
        alt={type}
      />
      <img
        className="heart"
        src={HeartImage}
        alt="heart"
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default AnimalShow;
