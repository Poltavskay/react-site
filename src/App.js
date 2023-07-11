import Weather from "./Weather";
import Footer from "./Footer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather city="Kyiv" day="Friday" time="17:00" humidity="50" speed="5" />
      <Footer />
    </div>
  );
}

export default App;