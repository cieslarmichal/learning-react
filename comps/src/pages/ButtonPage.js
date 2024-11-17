import {GoBell, GoCloudDownload, GoDatabase, GoHeart} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage () {
  const handleClick = () => {}

  return (
    <div>
      <div>
        <Button primary outline onClick={handleClick}><GoBell/>Buy now!</Button>
      </div>
      <div>
        <Button secondary><GoCloudDownload/>Go to the cart</Button>
      </div>
      <div>
        <Button warning><GoDatabase/>No items in cart</Button>
      </div>
      <div>
        <Button danger><GoHeart/>Add to wishlist</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
