import { styled } from "styled-components";

function StartPage() {
  return (
    <main>
      <div className="app">
        <StartHeaderUl>
          <StartHeaderLi>
            <a href="/mentorSC" target="_self">
              사수님 요청 업무 문제 - 스타일링
            </a>
          </StartHeaderLi>
          <StartHeaderLi>
            <a href="/budget" target="_self">
              팀장님 지시 업무 문제 - 가계부
            </a>
          </StartHeaderLi>
          <StartHeaderLi>
            <a href="/weekend" target="_self">
              팀장님 프로젝트 - 주말과제
            </a>
          </StartHeaderLi>
        </StartHeaderUl>
      </div>
    </main>
  );
}

export default StartPage;

const StartHeaderUl = styled.ul`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Jua", sans-serif;
  font-weight: 400;
`;

const StartHeaderLi = styled.li`
  width: 45%;
  height: 40vh;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: rgba(49, 128, 225, 0.544);
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    &:hover {
      background-color: rgba(90, 49, 225, 0.544);
    }
  }
`;
