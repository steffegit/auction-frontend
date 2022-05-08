import ItemCard from "./components/ItemCard";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex flex-col mx-auto">
      <TopBar />
      <ItemCard />
    </div>
  );
}

export default App;
