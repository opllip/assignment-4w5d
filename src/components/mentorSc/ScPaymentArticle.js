import star from "../../images/StarFill.svg";
import { styled, css } from "styled-components";

const ScPaymentArticle = () => {
  return (
    <PaymentArticle>
      <form>
        <input type="hidden" name="price" value="192" />

        <Price>$192</Price>
        <RatingBox>
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <Star src={star} alt="star" />
          <EmrtyStar src={star} alt="star" />
          <a href="#">112 reviews</a>
        </RatingBox>

        <Subheading>Color</Subheading>
        <ColorBox>
          <ColorInput
            checked
            color={"cream"}
            type="radio"
            name="color"
            value="cream"
          />
          <ColorInput
            color={"lightBrown"}
            type="radio"
            name="color"
            value="lightBrown"
          />
          <ColorInput color={"brick"} type="radio" name="color" value="brick" />
          <ColorInput color={"green"} type="radio" name="color" value="green" />
          <ColorInput color={"navy"} type="radio" name="color" value="navy" />
        </ColorBox>

        <SizeBox>
          <div>
            <Subheading>Size</Subheading>
            <a href="#">Size guide</a>
          </div>
          <SizeBoxRadioDiv>
            <label className="size-none">
              <SizeInput type="radio" name="size" disabled value="XXS" />
              <span>XXS</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="XS" checked />
              <span>XS</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="S" />
              <span>S</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="M" />
              <span>M</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="L" />
              <span>L</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="XL" />
              <span>XL</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="XXL" />
              <span>XXL</span>
            </label>
            <label>
              <SizeInput type="radio" name="size" value="XXXL" />
              <span>XXXL</span>
            </label>
          </SizeBoxRadioDiv>
        </SizeBox>
        <BtnSubmit type="submit">장바구니 담기</BtnSubmit>
      </form>
    </PaymentArticle>
  );
};

export default ScPaymentArticle;

//결제 영역
const PaymentArticle = styled.article`
  width: 400px;
  padding: 0 1rem;
  & a {
    margin-left: 1rem;
    color: var(--mainColor);
    font-size: 0.875rem;
    text-decoration: none;
  }
`;
const Price = styled.p`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;
const RatingBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
`;
const Star = styled.img`
  height: 1rem;
`;
const EmrtyStar = styled.img`
  height: 1rem;
  filter: opacity(25%);
`;
const Subheading = styled.h4`
  margin-top: 1.25rem;
  margin-bottom: 1rem;
`;
const ColorBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.75rem;
`;

const ColorInput = styled.input`
  appearance: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  ${(props) => css`
    background-color: var(--${props.color});
  `}
  &:checked {
    border: 1px solid #333;
  }
`;
const SizeBox = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const SizeBoxRadioDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  & > label {
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 1rem;
    &.size-none {
      opacity: 0.7;
      cursor: not-allowed;
      position: relative;
      overflow: hidden;
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 7rem;
        background-color: #ccc;
        opacity: 0.7;
        transform: rotate(45deg);
      }
    }
  }
`;
const SizeInput = styled.input`
  appearance: none;
  background-color: #eee;
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:checked {
    border: 1px solid var(--mainColor);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  & + span {
    position: absolute;
  }
`;
const BtnSubmit = styled.button`
  width: 100%;
  background-color: var(--mainColor);
  color: white;
  margin: 1.5rem 0;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
