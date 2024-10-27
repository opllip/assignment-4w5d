import LeftImage from "../../images/left.png";
import RightImage from "../../images/right.png";
import MiddleTopImage from "../../images/md-top.png";
import MiddleBottomImage from "../../images/md-bottom.png";

const MentorTaskPage1 = () => {
  return (
    <>
      <nav className="my-2">
        <ul className="flex justify-start items-center py-2 gap-4">
          <li className="relative after:content-['|'] after:ml-2 after:absolute after:top-[-2px]">
            투데이특가
          </li>
          <li className="relative after:content-['|'] after:ml-2 after:absolute after:top-[-2px]">
            상의
          </li>
          <li className="font-bold text-gray8">셔츠&블라우스</li>
        </ul>
      </nav>

      <section className="imageArea h-[31rem] w-full flex justify-center items-center gap-4 overflow-hidden mb-10">
        <div className="imageArea-side">
          <img
            src={LeftImage}
            className="block h-full object-scale-down"
            alt="왼쪽이미지"
          />
        </div>
        <div className="flex justify-between items-center flex-col gap-4">
          <img
            src={MiddleTopImage}
            className=" block h-full object-scale-down"
            alt="중간 위쪽 이미지"
          />
          <img
            src={MiddleBottomImage}
            className="block h-full object-scale-down"
            alt="중간 아래쪽 이미지"
          />
        </div>
        <div className="imageArea-side">
          <img
            src={RightImage}
            className="block h-full object-scale-down"
            alt="오른쪽이미지"
          />
        </div>
      </section>
    </>
  );
};

export default MentorTaskPage1;
