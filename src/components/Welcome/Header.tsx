import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative bg-balloon bg-cover w-screen h-screen items-center flex flex-col justify-center">
      <div className="flex flex-col mr-[40%] w-[590px]">
        <div className="text-[180px] font-bold text-black">SelfED</div>
        <div className="text-black text-[20px] font-bold">
          Nền tảng tự học theo phương pháp B-learning, với chuỗi bài giảng và
          bài kiểm tra dành cho người học.
        </div>
      </div>
      <div className="flex w-[940px] mt-[5%] justify-between">
        <button className="pb-[22px] pt-[18px] px-[50px] rounded-full bg-[#E7D1FF] flex items-center gap-[20.6px]">
          <span className="text-black text-[24px] pt-2">
            Tải về cho Windows
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
          >
            <path
              d="M8.99097 27.5878V30.7318C8.99097 31.5656 9.41867 32.3653 10.18 32.9549C10.9413 33.5445 11.9739 33.8758 13.0505 33.8758H37.408C38.4847 33.8758 39.5172 33.5445 40.2785 32.9549C41.0399 32.3653 41.4676 31.5656 41.4676 30.7318V27.5878M15.0803 18.1558L25.2293 26.0158M25.2293 26.0158L35.3782 18.1558M25.2293 26.0158V7.15186"
              stroke="#9747FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <Link to="/login">
          <button className="pb-[20px] pt-[20px] px-[37px] rounded-full bg-[#4A2574] flex items-center gap-[20.289px]">
            <span className="text-white text-[24px]">
              Sử dụng tại trình duyệt
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="41"
              viewBox="0 0 48 41"
              fill="none"
            >
              <g clip-path="url(#clip0_1_28)">
                <path
                  d="M25.408 33.391C25.1983 33.2125 25.0319 33.0003 24.9183 32.7667C24.8047 32.5331 24.7463 32.2826 24.7463 32.0297C24.7463 31.7768 24.8047 31.5263 24.9183 31.2927C25.0319 31.0591 25.1983 30.8469 25.408 30.6684L35.0624 22.4219H7.49992C6.90319 22.4219 6.33089 22.2194 5.90893 21.859C5.48698 21.4986 5.24992 21.0098 5.24992 20.5001C5.24992 19.9903 5.48698 19.5015 5.90893 19.1411C6.33089 18.7807 6.90319 18.5782 7.49992 18.5782H35.0624L25.408 10.3285C24.9854 9.96748 24.7479 9.4778 24.7479 8.9672C24.7479 8.4566 24.9854 7.96692 25.408 7.60587C25.8307 7.24483 26.404 7.04199 27.0018 7.04199C27.5996 7.04199 28.1729 7.24483 28.5955 7.60587L42.0955 19.1371C42.3053 19.3157 42.4717 19.5278 42.5853 19.7614C42.6989 19.995 42.7573 20.2455 42.7573 20.4985C42.7573 20.7514 42.6989 21.0019 42.5853 21.2355C42.4717 21.4691 42.3053 21.6812 42.0955 21.8598L28.5955 33.391C28.3865 33.5702 28.1381 33.7124 27.8646 33.8094C27.5911 33.9064 27.2979 33.9563 27.0018 33.9563C26.7057 33.9563 26.4124 33.9064 26.139 33.8094C25.8655 33.7124 25.6171 33.5702 25.408 33.391Z"
                  fill="#F8F8F8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_28">
                  <rect
                    width="41"
                    height="48"
                    fill="white"
                    transform="matrix(0 1 -1 0 48 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
