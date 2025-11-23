import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Firstsection from "./Components/firstsection";
import ImageSlider from "./Components/imageslider";
import ImageSection from "./Components/imagesection";
import ServiceSection from "./Components/servicesesction";
import StorySection from "./Components/storysection";
import QASection from "./Components/qasection";
import CreativeSection from "./Components/creativesection";
import ProjectDetails from "./Components/ProjectDetails";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="wrapper">
                <div className="inside-wrapper">
                  <div className="main-container">
                    <div className="body-wrapper">
                      <Firstsection />
                      <ImageSlider />
                    </div>
                    <div className="second-wrapper">
                      <ImageSection />
                    </div>
                    <div className="third-wrapper">
                      <ServiceSection />
                    </div>
                    <div className="fourth-wrapper">
                      <StorySection />
                    </div>
                    <div className="fifth-wrapper">
                      <QASection />
                    </div>
                    <div className="sixth-wrapper">
                      <CreativeSection />
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        />

        {/* Project Details Page */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
