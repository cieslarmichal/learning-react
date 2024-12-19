import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {
  const [executeRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

  const handleClick = () => {
    executeRemoveUser(user);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isRemovingUser}
        onClick={handleClick}
      >
        <GoTrashcan />
      </Button>
      {removingUserError && <div className="text-red-300">{removingUserError}</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
