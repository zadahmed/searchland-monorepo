import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { queryClient, trpcClient } from "./utils/trpc";
import { trpc } from "./utils/trpc";

function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App p-8">
          <AddUser />
          <UserList />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
