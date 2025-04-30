
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react'
import Alert from './components/Alert';
//import About from './components/About';
function App() {
  const[mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
setAlert({mess:message,type:type});
setTimeout(() => {
  setAlert(null);
},1500);
}
  const toggleMode=()=>{
    console.log({mode});
    if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode enabled","success");
  }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled","success");
    }
  }
  return (
   <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform heading="enter the text to analyze" mode={mode} showAlert={showAlert}/>
  
   </div>
   </>
  );
}

export default App;
