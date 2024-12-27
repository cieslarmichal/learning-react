import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { useRemoveAlbumMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={results.isLoading}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      {results.error && <div className="text-red-300">{results.error}</div>}
      {album.title}
    </>
  );

  return <ExpandablePanel header={header}>List of photos for album {album.title}</ExpandablePanel>;
}

export default AlbumsListItem;
