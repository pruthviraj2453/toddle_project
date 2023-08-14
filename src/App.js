import AppNavbar from "./Components/AppNavbar";
import MyBoards from "./Components/MyBoard";
import AppStoreProvider from "./appStore";

export const getRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

function App() {
  return (
    <div className="App">
      <AppStoreProvider>
        <AppNavbar />
        <MyBoards />
      </AppStoreProvider>
    </div>
  );
}

export default App;
