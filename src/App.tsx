import Lottie from "lottie-react";

// Assets
import workingOnIt from './assets/lottie/workingOnIt.json';

import './App.css'

function App() {
 
  return (
    <>
      <div className="animation">
        <Lottie 
          animationData={workingOnIt} 
          loop={false}
        />
      </div>
      <p className="read-the-docs">
        Something great coming....
      </p>
    </>
  )
}

export default App
