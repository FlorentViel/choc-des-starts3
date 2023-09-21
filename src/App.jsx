import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  
} from "./components";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <h1 className="text-end">Choc des starts - Personnel</h1>
            {/* <Hero /> */}
          </div>
           <About />
          {/*<Experience /> */}

          {/* <Tech /> */}
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
             <Contact />
            <StarsCanvas /> 
          </div>
          <Tech></Tech>


         <div>
         </div>

        </div>

      </BrowserRouter>
    
  );
};

export default App;
