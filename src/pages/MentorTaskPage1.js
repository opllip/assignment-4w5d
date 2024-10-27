import StyledComponentImg from "../components/mentorSc/StyledComponentImg";
import StyledComponentText from "../components/mentorSc/StyledComponentText";
import MentorHeader from "../components/MentorHeader";

const MentorTaskPage1 = () => {
  return (
    <>
      <MentorHeader />
      <main>
        <div className="app">
          <StyledComponentImg />
          <StyledComponentText />
        </div>
      </main>
    </>
  );
};

export default MentorTaskPage1;
