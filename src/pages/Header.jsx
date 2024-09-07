import logo from "../assets/images/logo.jpg";

const Header = () => {
 return (
  <div className="h-[12vh] w-full py-3 pl-[6vw] flex">
   <img src={logo} alt="logo" className="h-auto" />
  </div>
 );
};

export default Header;
