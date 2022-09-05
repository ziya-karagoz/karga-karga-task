import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { SliderImages } from "./components/SliderImages/SliderImages";
import { FittedImages } from "./components/FittedImages/FittedImages";
import { DocumentSlider } from "./components/DocumentSlider/DocumentSlider";

function App() {
  return (
    <div className='bg-gray-200'>
      <Navbar />
      <div className='h-[calc(100vh-4.5rem)] my-1 p-4'>
        <SliderImages />
      </div>
      <div className='h-[100vh] my-1 p-4'>
        <FittedImages />
      </div>
      <div className='h-[100vh] my-1 p-4'>
        <DocumentSlider />
      </div>
    </div>
  );
}

export default App;
