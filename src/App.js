// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let name = "Harry bhaiya";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleModeFn = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.color='white'
      document.body.style.backgroundColor = "#46255c";
      showAlert("success", "Dark Mode Enabled");
      document.title = "TextUtils | Dark Mode";
    } else {
      setMode("light");
      // document.body.style.color='black'
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode Disabled");
      document.title = "TextUtils";
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleModeFn}
      />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element = { <About mode={mode}/>}>
        </Route>
        <Route path="/" element={<TextForm
            heading="Enter Your Text to Analyze"
            mode={mode}
            // aboutText = "About TextUtils"
            showAlert={showAlert}
          />}>
         
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
