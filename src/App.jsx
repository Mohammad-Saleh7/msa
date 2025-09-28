import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import NotFound from "./pages/NotFound";
import NavComponent from "./components/Nav";
import FooterComponent from "./components/Footer";
import CreateCourse from "./pages/CreateCourse";
import MangeCourse from "./pages/ManageCourse";
import Auth from "./pages/Auth";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/course/:slug" element={<MangeCourse />} />

          <Route path="/auth/" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Register />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
