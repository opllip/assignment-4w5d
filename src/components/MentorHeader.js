import { styled } from "styled-components";

function MentorHeader() {
  return (
    <header>
      <MheaderUl>
        <li>
          <MheaderUlA href="/mentorSC" target="_self">
            styled components
          </MheaderUlA>
        </li>
        <li>
          <MheaderUlA href="/mentorTW" target="_self">
            tailwind
          </MheaderUlA>
        </li>
      </MheaderUl>
    </header>
  );
}

export default MentorHeader;
const MheaderUl = styled.ul`
  margin: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const MheaderUlA = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  line-height: 1.25rem;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: all 0.4s;
  &:hover {
    color: #fff;
    &:after {
      width: 100%;
      z-index: -1;
    }
  }
  &:after {
    content: "";
    width: 0%;
    height: 100%;
    top: 0;
    position: absolute;
    left: 0;
    transition: all 0.4s;
    background: var(--mainColor);
  }
`;
