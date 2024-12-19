import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/useThunk';

function UsersListItem({ user }) {
  const [executeRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

  const handleClick = () => {
    executeRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex items-center justify-between">
          <Button
            className="mr-3"
            loading={isRemovingUser}
            onClick={handleClick}
          >
            <GoTrashcan />
          </Button>
          {removingUserError && <div className="text-red-300">{removingUserError}</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
