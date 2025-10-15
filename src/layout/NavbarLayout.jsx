const NavbarLayout = ({ children }) => {
  return (
    <header className="w-full max-h-[74px] md:max-h-[80px] bg-white shadow-md md:shadow-none flex justify-between z-1">
      {children}
    </header>
  );
};
export default NavbarLayout;
