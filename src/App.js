import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./course/AddCourse";
import EditCourse from "./course/EditCourse";
import ViewCourse from "./course/ViewCourse";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addCourse" element={<AddCourse/>} />
          <Route exact path="/editCourse/:course_id" element={<EditCourse/>} />
          <Route exact path="/viewCourse/:course_id" element={<ViewCourse/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
