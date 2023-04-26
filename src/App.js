
import Home from "./Components/Home";
import './App.css'
import DataProvider from "./Context/DataProvide";

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
