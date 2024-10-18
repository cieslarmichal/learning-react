import BirdImage from './images/bird.svg';
import CatImage from './images/cat.svg';
import CowImage from './images/cow.svg';
import DogImage from './images/dog.svg';
import GatorImage from './images/gator.svg';
import HorseImage from './images/horse.svg';
import HeartImage from './images/heart.svg';

const imagesMapping = {
  bird: BirdImage,
  cat: CatImage,
  cow: CowImage,
  dog: DogImage,
  gator: GatorImage,
  horse: HorseImage,
};

function AnimalShow({type, index}) {
  return (
    <div>
      <img src={imagesMapping[type]} alt={type} />
    </div>
  );
}

export default AnimalShow;
