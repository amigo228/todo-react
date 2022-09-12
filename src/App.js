import './App.css';
import Input from "./components/Input";
import {useState} from "react";
import PointHolder from "./components/Point-holder";
import Footer from "./components/Footer";

function App() {

  const [str, setStr] = useState("");
  const [filter, setFilter] = useState(0);

  return (
    <div className="App">
      <main className="main">
        <section className="section">
          <div className="logo-holder">
            <h1 className="logo">todos</h1>
          </div>
            <div className="card-holder">
          <Input str={str} setStr={setStr}/>
              <PointHolder filter={filter}/>
              <Footer setFilter={setFilter}/>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
