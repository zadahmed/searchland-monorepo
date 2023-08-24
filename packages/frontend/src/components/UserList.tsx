import { trpc } from "../utils/trpc";

const UserList = () => {
  const userQuery = trpc.getUsers.useQuery();

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
          <div key={user.id} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-xl font-medium mb-2">{user.name}</p>
            <p className="text-gray-600">Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
