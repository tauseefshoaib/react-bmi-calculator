import { useState } from "react";
import "./App.css";
function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState("");

  const handleInputChange = (event, valueType) => {
    if (valueType === "height") {
      setHeight(event.target.value);
    }
    if (valueType === "weight") {
      setWeight(event.target.value);
    }
  };

  const calculateBMI = () => {
    if (height == 0 || weight == 0) {
      setResult("Enter a valid number");
    } else if (height == null || weight == null) {
      setResult("Fields should not be empty");
    } else {
      const heightInMeters = height / 100;

      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      if (bmi < 18.5) {
        setResult("You Are Underweight, You Need To Gain Weight");
      }
      if (bmi > 18.5 && bmi < 24.9) {
        setResult("You Are Fit, You Need To Maintain This Weight");
      }
      if (bmi > 24.9) {
        setResult("You Are OverWeight, You Need To Lose Weight");
      }

      setBmi(bmi);
    }
  };

  const clearInputFields = () => {
    setHeight(null);
    setWeight(null);
    setBmi(null);
    setResult("");
  };
  return (
    <div className="Wrapper">
      <div className="Header">
        <h1 className="Header-Text">BMI Calculator</h1>
      </div>
      <div className="Input-Body">
        <input
          className="Input"
          type="number"
          placeholder="Enter Your Height In CM"
          value={height || ""}
          onChange={(event) => handleInputChange(event, "height")}
        />
        <input
          className="Input"
          type="number"
          placeholder="Enter Your Weight IN KG"
          value={weight || ""}
          onChange={(event) => handleInputChange(event, "weight")}
        />
        <div className="btn-wrapper">
          <button className="btn" onClick={() => calculateBMI()}>
            Submit
          </button>
          <button className="btn" onClick={() => clearInputFields()}>
            Clear
          </button>
        </div>
      </div>

      <div className="result-wrapper">
        {bmi && <h1 className="result-text">Your BMI is : {bmi || ""}</h1>}
        <h1 className="result-text">{result || ""}</h1>
      </div>
    </div>
  );
}

export default App;
