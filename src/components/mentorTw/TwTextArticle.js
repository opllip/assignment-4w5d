const TwTextArticle = () => {
  return (
    <article className=" w-[calc(100% - 25rem)]">
      <h3 className="mb-4 text-[1.75rem]">INFORMATION</h3>
      <p className="font-medium mb-10">
        위의 실측사이즈는'단면의 길이'입니다. 참고해 주세요.
        <br />
        사이즈는 측정방법에 따라1~3cm 정도 오차가 있을 수 있습니다
        <br />
        제품색상은 사용자의 모니터의 해상도에 따라 실제 색상과 다소 차이가 있을
        수 있습니다.
      </p>
      <h4 className="mt-5 mb-4">CHECK POINT</h4>
      <ul className="text-sm text-base/[1.5rem]">
        <li className="flex justify-items-start items-center before:content-['-'] before:relative  before:top[0.5rem] before:mr-2">
          탄탄한 면 100% 소재로 흡습성이 좋아 정전기 발생이 적으며 쾌적한
          착용감이 느껴지는 원단
        </li>
        <li className="flex justify-items-start items-center before:content-['-'] before:relative  before:top[0.5rem] before:mr-2">
          뒤틀어지기 쉬운 카라에 스티치 가공으로 탄탄하게 디자인
        </li>
        <li className="flex justify-items-start items-center before:content-['-'] before:relative  before:top[0.5rem] before:mr-2">
          한쪽 가슴에 큼지막한 포켓을 추가하여 간단한 소지품을 넣을 수 있어
          실용적인 디테일
        </li>
        <li className="flex justify-items-start items-center before:content-['-'] before:relative  before:top[0.5rem] before:mr-2">
          밑단 라운딩을 주어 부드러운 느낌과 앞뒤 다른 언밸런스한 기장으로
          체형커버가 가능
        </li>
      </ul>
      <h4 className="mt-5 mb-4">PRODUCT INFORMATION</h4>
      <p className="font-medium mb-10">
        소재:면100% 사이즈:FREE
        <br />
        색상:크림,연갈색(연밤색),초록,벽돌,곤색
      </p>
    </article>
  );
};

export default TwTextArticle;
