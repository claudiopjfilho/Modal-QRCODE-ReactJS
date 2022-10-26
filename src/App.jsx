import InputQrCode from "./components/InputQrCode";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <div>
        <InputQrCode />
      </div>
    </div>
  );
}

export default App;
