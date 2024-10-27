import MentorHeader from "../components/MentorHeader";

import TwImg from "../components/mentorTw/TwImg";
import TwTextArticle from "../components/mentorTw/TwTextArticle";
import TwPaymentArticle from "../components/mentorTw/TwPaymentArticle";

import star from "../images/StarFill.svg";

import "../components/mentorTw/mentorTw.css";
const MentorTaskPage2 = () => {
  return (
    <>
      <MentorHeader />
      <main>
        <div className="app">
          <TwImg />

          <div className="flex justify-between gap-4">
            <TwTextArticle />
            <TwPaymentArticle />
          </div>
        </div>
      </main>
    </>
  );
};

export default MentorTaskPage2;
