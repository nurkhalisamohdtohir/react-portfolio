import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./components/Home.js";
import WorkDetails from './components/WorkDetails';
import WorkCardData from "./components/WorkCardData.js";
import PdfViewer from "./components/PdfViewer.js";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/project/:id" element={<WorkDetails projects={WorkCardData} />} />
          <Route path="/pdf" element={<PdfViewer />} />*/}
        </Routes>
    </Router>
  );
}

export default App;
