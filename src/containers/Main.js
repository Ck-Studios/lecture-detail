import {useState, useEffect} from "react";

import styled from "styled-components";

const navItems = [
  {id:1, title: "클래스 소개"},
  {id:2, title: "커리큘럼"},
  {id:3, title: "선생님 소개"},
  {id:4, title: "환불 정책"},
];

const learnImages = [
  {title: "여행영상을 기획하고 콘티를 만들어요.", subtitle: "여행을 즐길 수 있도록! 어던 컨셉으로 어떻게 촬영할지 준비합니다."},
  {title: "여행영상을 기획하고 콘티를 만들어요.", subtitle: "여행을 즐길 수 있도록! 어던 컨셉으로 어떻게 촬영할지 준비합니다."}
];

export default function Main() {
  const [selectedId, selectMenu] = useState(1);

  const onSelectNavMenu = (id) => {
    selectMenu(id);
  };
  return (
    <Container className="h-full mx-auto px-4">
      Main Container
      <ImageContainer
        className="border-1 w-full shadow-lg"
      />

      <div
        className="nav-menu-wrapper flex border-b border-gray-300 mt-8"
      >
        {
          navItems.map((menu, index) => (
            <div
              key={index.toString()}
              onClick={() => onSelectNavMenu(menu.id)}
              className={`border-b-4 border-transparent w-24 h-10 mr-6 flex justify-center items-center ${selectedId === menu.id && "border-black"}`}
            >
              <p className="font-medium text-gray-700">
                {menu.title}
              </p>
            </div>
          ))
        }
      </div>

      <div
        className="class-intro mt-16 pb-24 border-b"
      >
        <p
          className="text-2xl font-medium"
        >
          여행영상에 딱 맞는 기획, 촬영, 편집을 배워<br/>
          <span
            className="font-bold"
          >
            총 1개의 작품 만들기
          </span>
        </p>
        <p
          className="text-base font-medium mt-6"
        >
          한 작품을 만들어보는 데에 4시간 정도가 소요됩니다.
        </p>

        <ImageContainer
          className="w-full shadow-xl mt-8"
        />
        <p className="text-xs text-gray-600 mt-3">
          한 편의 뮤직비디오 같은 여행
        </p>
      </div>

      <div className="w-full mt-16">
        <p className="text-xl font-bold mb-8">
          이런 걸 배울 거예요
        </p>
          <div
            className="flex"
          >
            {
              learnImages.map((item, index) => (
                <div
                  className="w-1/3 h-64 bg-pink-500 mr-4"
                  key={index.toString()}
                >
                  <p>{item.title}</p>
                  <p className="text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              ))
            }
          </div>
      </div>

      <div style={{width: "100%", height: 800}}/>
    </Container>
  )
}



const ImageContainer = styled.div`
  height: 580px;
`;

const Container = styled.div`
  max-width: 800px;
`;
