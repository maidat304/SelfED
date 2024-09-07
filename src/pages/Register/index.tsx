import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center bg-white w-screen">
        <div className="text-[#4A2574] text-[24px] font-bold text-center">
          ĐĂNG KÍ
        </div>
        <div className="flex flex-col mt-10 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Họ và tên
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập họ và tên của bạn"
          />
        </div>
        <div className="flex flex-col mt-5 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Email
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập email của bạn"
          />
        </div>
        <div className="flex flex-col mt-5 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Mật khẩu
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>
        <div className="flex flex-col mt-5 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Nhập lại mật khẩu
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập lại mật khẩu của bạn"
          />
        </div>
        <button className="bg-ornament-color text-white mt-10 w-48 h-12 rounded-xl">
          Đăng kí
        </button>
        <div className="text-[#4A2574] text-[16px] font-normal mt-10 italic text-center">
          <p>
            Đã có tài khoản?{" "}
            <Link to="/login" className="font-bold">
              Đăng nhập ngay!
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-custom-gradient h-screen w-screen" />
    </div>
  );
}

export default Register;
