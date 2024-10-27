import StartPage from "./pages/StartPage";
import MentorTask1 from "./pages/MentorTaskPage1"; //사수과제
import MentorTask2 from "./pages/MentorTaskPage2"; //사수과제
import Managertask from "./pages/managerTaskPage"; //팀장과제 -가계부
import Weekend from "./pages/WeekendPage"; //주말과제
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<StartPage />} />
        {/* 사수과제 - styled component  */}
        <Route path="/mentorSC" element={<MentorTask1 />} />
        {/* 사수과제 - tailwind  */}
        <Route path="/mentorTW" element={<MentorTask2 />} />
        {/* 팀장과제 - 가계부 */}
        <Route path="/budget" element={<Managertask />} />
        {/* 팀장과제 - 주말 */}
        <Route path="/weekend" element={<Weekend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
