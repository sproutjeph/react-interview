import Header from "./components/Header";
import UserContactList from "./components/UserContactList";
import useContactList from "./customHooks/useContactList";

function App() {
  const { isSyncing, list, syncData, onFilter } = useContactList();
  return (
    <div className="m-8">
      <Header isSyncing={isSyncing} sync={syncData} onFilter={onFilter} />

      <UserContactList contactList={list} />
    </div>
  );
}

export default App;
