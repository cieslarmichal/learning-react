import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import useThunk from '../hooks/useThunk';
import UsersListItem from './UsersListItem';

function UsersList() {
  const [executeFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

  const [executeAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    executeFetchUsers();
  }, [executeFetchUsers]);

  const handleAddUser = () => {
    executeAddUser();
  };

  let content;

  if (isLoadingUsers) {
    content = (
      <Skeleton
        times={5}
        className="h-10 w-full"
      />
    );
  } else if (loadingUsersError) {
    content = <div>Error fetching data.</div>;
  } else {
    content = data.map((user) => {
      return (
        <UsersListItem
          key={user.id}
          user={user}
        />
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl ">Users</h1>
        <Button
          loading={isCreatingUser}
          onClick={handleAddUser}
        >
          + Add User
        </Button>
        {creatingUserError && 'Error creating user.'}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
