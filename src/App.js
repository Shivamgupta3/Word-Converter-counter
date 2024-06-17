import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); // Wheather dark mode is enabled or not!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          Aboutus="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        <Routes>
          <Route exact path="/About" element={<About mode={mode} />}></Route>
          <Route
            exact
            path="/Home"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter, UpperCase to lowerCase and lowerCase to UpperCase!"
                showAlert={showAlert}
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
