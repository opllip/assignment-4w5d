import LeftImage from "../../images/left.png";
import RightImage from "../../images/right.png";
import MiddleTopImage from "../../images/md-top.png";
import MiddleBottomImage from "../../images/md-bottom.png";
import { styled } from "styled-components";

const StyledComponent = () => {
  return (
    <>
      <Nav>
        <ul>
          <li>투데이특가</li>
          <li>상의</li>
          <li>셔츠&블라우스</li>
        </ul>
      </Nav>

      <ImageArea>
        <div>
          <img src={LeftImage} className="App-logo" alt="왼쪽이미지" />
        </div>
        <ImageAreaMiddle>
          <img src={MiddleTopImage} alt="중간 위쪽 이미지" />
          <img src={MiddleBottomImage} alt="중간 아래쪽 이미지" />
        </ImageAreaMiddle>
        <div>
          <img src={RightImage} className="App-logo" alt="오른쪽이미지" />
        </div>
      </ImageArea>
    </>
  );
};

export default StyledComponent;
//nav영역
const Nav = styled.nav`
  margin: 0.5rem 0;
  & > ul {
    display: flex;
    justify-content: start;
    align-items: center;
    list-style-type: none;
    gap: 1rem;
    padding: 0.5rem 0;
    & > li {
      position: relative;
      &:after {
        content: "|";
        margin-left: 0.5rem;
        position: absolute;
        top: -2px;
      }
    }
    & > li:last-child {
      color: #888;
      font-weight: bold;
      &:after {
        content: "";
        margin-left: 0;
      }
    }
  }
`;
// 이미지 영역
const ImageArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31rem;
  overflow: hidden;
  gap: 1rem;
  margin-bottom: 2.5rem;
  width: 100%;
  & img {
    display: block;
    object-fit: scale-down;
    height: 100%;
  }
`;
const ImageAreaMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
