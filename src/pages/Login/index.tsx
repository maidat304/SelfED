import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center bg-white w-screen">
        <div className="text-[#4A2574] text-[24px] font-bold text-center">
          ĐĂNG NHẬP
        </div>
        <div className="flex flex-col mt-20 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Email
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập email của bạn"
          />
        </div>
        <div className="flex flex-col mt-10 gap-1">
          <span className="text-[#4A2574] text-[20px] font-normal ml-2">
            Mật khẩu
          </span>
          <input
            type="text"
            className="bg-[#E2DDFF] w-[400px] h-[50px] rounded-lg pl-2 focus:outline-none"
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>
        <button className="bg-ornament-color text-white mt-10 w-48 h-12 rounded-xl">
          Đăng nhập
        </button>
        <div className="text-[#4A2574] text-[16px] font-normal mt-20 italic text-center">
          <p>Chưa có tài khoản? <Link to="/register" className="font-bold">Đăng ký ngay!</Link></p>
          <p>Quên mật khẩu?</p>
        </div>
      </div>
      <div className="bg-custom-gradient h-screen w-screen" />
    </div>
  );
}

export default Login;
