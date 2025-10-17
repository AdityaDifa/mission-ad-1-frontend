const MainLayout = ({ children }) => {
  return (
    <main className="bg-[#fffdf3] flex justify-center w-full h-screen">
      <section className="px-3 md:px-30 py-4 md:py-12 flex justify-center h-fit w-full">
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
