import { trpc } from "../utils/trpc";

const UserList = () => {
  const userQuery = trpc.getUsers.useQuery();
  const deleteUserMutation = trpc.deleteUser.useMutation();

  const handleDeleteUser = (userId: number) => {
    deleteUserMutation.mutate(userId, {
      onSuccess: () => {
        userQuery.refetch(); 
      }
    });
  };

  if (userQuery.isLoading) {
    return <div className="flex justify-center items-center min-h-screen text-xl font-semibold">Loading...</div>;
  }

  if (userQuery.isError) {
    return <div className="flex justify-center items-center min-h-screen text-xl text-red-600 font-semibold">Error: {userQuery.error?.message || 'An error occurred'}</div>;
  }

  if (!userQuery.data || userQuery.data.length === 0) {
    return <div className="flex justify-center items-center min-h-screen text-xl font-semibold">No data available.</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userQuery.data.map((user) => (
          <div key={user.id} className="relative border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <button 
              className="absolute top-2 right-2  p-2 rounded-full hover:bg-gray-700 focus:outline-none"
              onClick={() => handleDeleteUser(user.id)}
            >
              <span className="text-gray-300 font-bold">X</span>
            </button>
            <p className="text-xl font-medium mb-2">{user.name}</p>
            <p className="text-gray-600">Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
