import { styled, css } from "styled-components";
import ScTextArticle from "./ScTextArticle";
import ScPaymentArticle from "./ScPaymentArticle";

const StyledComponentText = () => {
  return (
    <TextArea>
      <ScTextArticle />
      <ScPaymentArticle />
    </TextArea>
  );
};

export default StyledComponentText;
//본문 영역
const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
