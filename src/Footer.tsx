import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <div className="w-full h-32 flex flex-row items-center justify-center border-t-2 border-white">
      <img src={logo} alt="" className="h-24 mr-10" />
      <p className="text-white">
        <span className="mr-2">&copy;</span>2024 All Rights Reserved
      </p>
    </div>
  );
}
