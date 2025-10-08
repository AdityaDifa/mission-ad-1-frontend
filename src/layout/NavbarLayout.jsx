const NavbarLayout = ({ children }) => {
  return (
    <header className="w-full max-h-[74px] md:max-h-[80px] shadow-lg md:shadow-none flex justify-between">
      {children}
    </header>
  );
};
export default NavbarLayout;
