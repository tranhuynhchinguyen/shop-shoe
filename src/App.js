import "./global.scss";
import { Button } from "antd";
import HomePage from "./pages/HomePage";
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
function App() {
  return (
    <div className="appShoe">
      <Header/>
      <HomePage></HomePage>
      <Footer/>
    </div>
  );
}

export default App;
//35
