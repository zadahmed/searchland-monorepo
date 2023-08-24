import { useState } from "react";
import { queryClient, trpc } from "../utils/trpc";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const mutation = trpc.createUser.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(["getUsers"]);
    },
  });

  const handleSubmit = () => {
    if (name && age) {
      mutation.mutate({ name, age: parseInt(age, 10) });
      setName("");
      setAge("");
    }
  };

  return (
    <div className="p-8 mb-6 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-4">Add a new user</h3>
      <div className="flex items-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 flex-1 mr-2"
          placeholder="User name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 w-20 mr-2"
          placeholder="Age"
        />
        <button
          onClick={handleSubmit}
          className="bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddUser;
