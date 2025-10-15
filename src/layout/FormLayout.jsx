const FormLayout = ({ children }) => {
  return (
    <main className="bg-[#fffdf3] flex justify-center w-full h-screen mb-10">
      <div className="bg-white rounded-md border-1 border-gray-200 w-[90%] md:w-[40%] mt-5 md:mt-15 h-fit px-5 py-10 flex flex-col items-center">
        {children}
      </div>
    </main>
  );
};
export default FormLayout;
