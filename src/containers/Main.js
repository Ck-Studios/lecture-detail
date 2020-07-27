import {useState, useEffect} from "react";

import styled from "styled-components";

const navItems = [
  {id: 1, title: "클래스 소개"},
  {id: 2, title: "커리큘럼"},
  {id: 3, title: "선생님 소개"},
  {id: 4, title: "환불 정책"},
];

const learnImages = [
  {title: "여행영상을 기획하고 콘티를 만들어요.", subtitle: "여행을 즐길 수 있도록! 어던 컨셉으로 어떻게 촬영할지 준비합니다."},
  {title: "여행영상을 기획하고 콘티를 만들어요.", subtitle: "여행을 즐길 수 있도록! 어던 컨셉으로 어떻게 촬영할지 준비합니다."}
];

const curriculum = [
  {
    title: "WELCOME! 안녕하세요! Bob입니다",
    thumbnail: "",
    contents: [
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
    ]
  },
  {
    title: "WELCOME! 안녕하세요! Bob입니다",
    thumbnail: "",
    contents: [
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
    ]
  },
  {
    title: "WELCOME! 안녕하세요! Bob입니다",
    thumbnail: "",
    contents: [
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
    ]
  },
  {
    title: "WELCOME! 안녕하세요! Bob입니다",
    thumbnail: "",
    contents: [
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
    ]
  },
  {
    title: "WELCOME! 안녕하세요! Bob입니다",
    thumbnail: "",
    contents: [
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
      "뮤직비디오 같은 여행 영상 제작 클래스를 소개합니다!",
    ]
  },
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
      >
        <img
          src="/static/images/main-image.png"
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />

      </ImageContainer>

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

        <div
          className="w-full shadow-xl mt-8 rounded overflow-hidden"
          style={{height: 480}}
        >
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oS665B-fU90" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
        </div>
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
                className="w-1/2 mr-4"
                key={index.toString()}
              >
                <p>{item.title}</p>
                <p className="text-gray-500">
                  {item.subtitle}
                </p>

                <div className="w-full h-48 bg-yellow-500 rounded-md mt-4 shadow-lg">

                </div>
              </div>
            ))
          }
        </div>

        <div className="w-full mt-16">
          <div>
            <p className="text-xl font-bold">
              <span className="text-blue-400">
                초급자&nbsp;
              </span>
              분들을 위한<br/>
              <span className="text-blue-400">
                영상 제작
              </span><br/>
              클래스입니다.
            </p>
            <div className="flex mt-8 flex justify-between">
              <div className="flex flex-col items-center justify-center bg-gray-200 w-1/2 h-32 mr-4 rounded-md">
                <p className="text-2xl">
                  <span className="text-4xl text-blue-400 font-bold mr-1">
                    5
                  </span>
                  주
                </p>
                <p className="text-xs font-medium">
                  수강기간
                </p>
              </div>
              <div className="flex flex-col items-center justify-center bg-gray-200 w-1/2 h-32 rounded-md">
                <p className="text-2xl">
                  <span className="text-4xl text-blue-400 font-bold mr-1">
                    28
                  </span>
                  개
                </p>
                <p className="text-xs font-medium">
                  커리큘럼
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="description-container mt-16">
          <p className="text-xl font-bold">
            잊기 쉬운 무형의 여행 기억을 유형으로 기록하는 최고의 도구, 여행영상
          </p>
          <p className="leading-relaxed mt-4">
            안녕하세요, 디자이너 Bob입니다.

            저의 첫 커리어는 스타트업의 UX/UI 디자이너 였어요.<br/> 재직 중에 좀 더 넓은 영역의 디자이너로서 활동하고 싶었고 그렇게 비쥬얼그래픽 디자이너, 브랜드 디자이너를 경험하고 현재는
            스타트업의 영상 디자이너로 활동하고 있습니다.<br/>
          </p>
          <p className="leading-relaxed mt-2">
            제게 영상 디자인이란 <span className="font-bold">브랜드가 사람들에게 전하고자 하는 가치와 말을 잘 표현해 내는 방법이에요!</span><br/>
            제가 만든 브랜드 소개 영상, 한번 보시겠어요?
          </p>
          <div
            className="w-full shadow-lg mt-4 rounded overflow-hidden"
            style={{height: 400}}
          >
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EvSr2a8nOD8" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </div>
          <div className="photo-description mt-8">
            <p>
              SNS를 하시면서 여행에 관심 많으신 분들이라면 한 번 쯤 보셨을 영상이죠! 저는 이 영상을 보면 이때 느꼈던 이탈리아에서의 경험들이 선명하게 그려진답니다.
            </p>
            <p className="break-words">
              지금, 기록해두지 못해 아쉬운 여행에서의 추억이 떠오르신다면, 혹은 곧 만나게 될 여행의 순간들을 놓치지 않고 기록하고 싶으시다면 저와 함께해요! 여행영상 분야에 대한 고민을 항상 해온
              만큼, 여행 영상에 최적화된 기획, 촬영, 편집 이야기를 여러분께 전해드릴게요.
            </p>
          </div>
          <p className="mt-16">
            어렵지 않아요! 나의 여행을 기록할 때 꼭 필요한 기술에 집중합니다.
          </p>
          <div
            className="w-full shadow-lg mt-4"
            style={{height: 400}}
          />
          <p className="mt-8">
            영상은 기획, 촬영, 사운드, 편집 등 전문가들이 따로 있을 만큼 깊고 어려운 분야인 것은 사실이에요. 하지만, 나의 여행을 기록하는 여행영상을 위해서 그 어려운 기술들을 전문적으로 모두 배울
            필요는 없다고 생각해요. 이번 클래스에서는 여행 영상을 만들 때에 꼭 필요한 기술만 선택과 집중하여 배울 거예요!
          </p>

          <div className="section-description mt-16">
            <p className="text-2xl font-bold">
              기획
            </p>
            <p className="mt-8">
              영상을 미리 기획하지 않으면, "어떤 것을 찍어야하지?"라는 고민에 여행 내내 스트레스를 받게 돼요. 기획을 미리 해두어야, 여행가서도 촬영할 것이 분명하고, 돌아와서도 편집의 방향이
              보인답니다! 어디에서, 어떤 촬영을 어떻게 할 지 미리 기획하여 여행 영상을 효율적으로 제작해봅시다!
            </p>
            <p className="text-2xl font-bold mt-16">
              촬영
            </p>
            <p className="mt-8">
              나의 시선을 조금 더 아름답게 기록하는 방법을 배워요! 돌아오지 않을 여행의 순간을 실패 없이 카메라에 담을 수 있게 될 거예요. 또 창의적인 촬영 구도로 천 번을 봐도 질리지 않는 영상을
              만들어봐요!
            </p>
            <p className="text-2xl font-bold mt-16">
              편집
            </p>
            <p className="mt-8">
              영상 기본이 되는 기술에서 더나아가, 여행 영상에 필요한 주된 스킬들, 제가 중요하게 여기는 요소들을 모두 알려드릴게요. 음악에 딱딱 맞는 화면 전환, 빠른 속도감, 여행지의 분위기가 그대로
              담긴 색감까지! 안대훈의 여행영상에서 보셨던 기술들을 차근차근 알려드릴게요!
            </p>
          </div>
          <p className="mt-24">
            이 영상은 제가 여자친구에게 영상편집에 대해 알려주고, 여자친구 혼자서 편집한 영상이에요! 여러분도 혼자서 원하는 여행 영상을 만들어낼 수 있어요!
          </p>
          <div
            className="mt-2 w-2/3 shadow-xl mx-auto"
            style={{height: 480}}
          />
        </div>
        <div className="mt-16">
          <p className="font-bold text-xl">
            설렜던 순간들은 시간이 흐르면서 흐릿해지고, 잊혀지고 말아요.
          </p>
          <div
            className="mt-2 w-full shadow-xl mx-auto"
            style={{height: 580}}
          />
          <p className="mt-8">
            시간이 흐르면, 여행 당시에 느꼈던 감정 모두를 기억하기는 쉽지 않지요. 하지만 여행영상으로 기록한다면 간직하고 싶은 감정을 조금 더 오랫동안 다채롭게 기억할 수 있어요. 안대훈이 '나의 여행이
            스스로에게, 사랑하는 사람에게, 더 많은 사람들에게 사랑받는 영상으로 오래 기억되도록' 도와드릴게요.
          </p>
        </div>
        <div className="mt-16">
          <p className="font-bold text-xl">
            나의 여행을 특별하게 기록하고 싶은 분! 함께해요!
          </p>
          <div
            className="mt-2 w-full shadow-xl mx-auto"
            style={{height: 580}}
          />
          <p className="mt-8">
            프로여동러, 안대훈이 지금까지 경험으로 쌓아온 모든 노하우를 전수해드릴게요. 영상에는 비디오뿐만 아니라 사진, 영상, 글, 사운드까지 담을 수 있어서 여행을 기억하기에 최적화된 도구에요.
            지금부터, 저와 함께 여행의 순간을 오래도록 기억해볼까요?
          </p>
        </div>

        <div className="curriculum-wrapper mt-16">
          <p className="font-bold text-2xl mb-8">
            커리큘럼
          </p>
          {
            curriculum.map((item, index) => (
              <div
                key={index.toString()}
                className={`flex w-full justify-between ${index > 0 && "mt-16"}`}
                style={{height: 135}}
              >
                <div
                  className="w-1/3 shadow-lg"
                />
                <div className="w-2/3 ml-6">
                  <p className="mb-3 text-2xl text-gray-500">
                    {item.title}
                  </p>
                  {
                    item.contents.map((content, contentIndex) => (
                      <div
                        key={contentIndex.toString()}
                        className={`flex ${contentIndex > 0 && "mt-3"}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-gray-300 flex justify-center items-center text-xs leading-tight">
                          {contentIndex + 1}
                        </div>
                        <p className="ml-2 text-sm">
                          {content}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className="mt-16 bg-gray-200 w-full py-12 px-8">
          <p>이런 분들을 위한 클래스예요</p>
          <p className="mt-6 font-bold">
            여행 영상을 만들고 싶으나 어떻게 시작해야 하나 고민하시는 분
          </p>
          <p className="mt-6 font-bold">
            여행 영상을 만들고 싶으나 어떻게 시작해야 하나 고민하시는 분
          </p>
          <p className="mt-6 font-bold">
            여행 영상을 만들고 싶으나 어떻게 시작해야 하나 고민하시는 분
          </p>
          <p className="mt-6 font-bold">
            여행 영상을 만들고 싶으나 어떻게 시작해야 하나 고민하시는 분
          </p>

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
