import star from "../../images/StarFill.svg";

const TwPaymentArticle = () => {
  return (
    <>
      <article className="px-4 w-[25rem]">
        <form>
          <input type="hidden" name="price" value="192" />

          <p className="mb-4 text-[1.75rem]">$192</p>
          <div className="flex justify-start items-center mb-4">
            <img src={star} alt="star" className="h-4" />
            <img src={star} alt="star" className="h-4" />
            <img src={star} alt="star" className="h-4" />
            <img src={star} alt="star" className="h-4" />
            <img src={star} alt="star" className="h-4 opacity-25" />
            <a href="#" className="ml-4 text-sm text-mainColor">
              112 reviews
            </a>
          </div>
          <div>
            <h4 className="mt-5 mb-4">Color</h4>
            <div className="flex justify-start gap-3">
              <input
                type="radio"
                checked
                className="bg-cream appearance-none inline-block w-8 h-8 rounded-2xl
                  checked:border-solid checked:border checked:border-gray3
                "
                name="color"
                value="cream"
              />
              <input
                type="radio"
                className="bg-lightBrown appearance-none inline-block w-8 h-8 rounded-2xl
                  checked:border-solid checked:border checked:border-gray3
                "
                name="color"
                value="lightBrown"
              />
              <input
                type="radio"
                className="bg-brick appearance-none inline-block w-8 h-8 rounded-2xl
                  checked:border-solid checked:border checked:border-gray3
                "
                name="color"
                value="brick"
              />
              <input
                type="radio"
                className="bg-green appearance-none inline-block w-8 h-8 rounded-2xl
                  checked:border-solid checked:border checked:border-gray3
                "
                name="color"
                value="green"
              />
              <input
                type="radio"
                className="bg-navy appearance-none inline-block w-8 h-8 rounded-2xl
                  checked:border-solid checked:border checked:border-gray3
                "
                name="color"
                value="navy"
              />
            </div>
          </div>
          <div className="sizeBox">
            <div className="flex justify-between items-center">
              <h4 className="mt-5 mb-4">Size</h4>
              <a href="#" className="ml-4 text-sm text-mainColor">
                Size guide
              </a>
            </div>
            <div className="sizeBox-radioDiv flex justify-between items-center flex-wrap gap-3">
              <label
                className="size-none relative flex w-20 h-20 justify-center items-center rounded-2xl
                opacity-70 cursor-not-allowed relative overflow-hidden
                after:content[''] after:absolute after:opacity-70 
                after:w-0.5 after:h-28 after:bg-grayC after:rotate-45
              "
              >
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE
                  disabled:opacity-70 disabled:cursor-not-allowed
                  "
                  name="size"
                  disabled
                  value="XXS"
                />
                <span className="absolute">XXS</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  checked
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE
                  checked:border checked:border-solid checked:border-mainColor
                  "
                  name="size"
                  value="XS"
                />
                <span className="absolute">XS</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="S"
                />
                <span className="absolute">S</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="M"
                />
                <span className="absolute">M</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="L"
                />
                <span className="absolute">L</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="XL"
                />
                <span className="absolute">XL</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="XXL"
                />
                <span className="absolute">XXL</span>
              </label>
              <label className="relative flex w-20 h-20 justify-center items-center rounded-2xl">
                <input
                  type="radio"
                  className="cursor-pointer w-20 h-20 rounded-2xl appearance-none bg-grayE"
                  name="size"
                  value="XXXL"
                />
                <span className="absolute">XXXL</span>
              </label>
            </div>
          </div>
          <button
            className="w-full text-white rounded-lg border-none bg-mainColor my-6 py-4 px-8"
            type="submit"
          >
            장바구니 담기
          </button>
        </form>
      </article>
    </>
  );
};

export default TwPaymentArticle;
