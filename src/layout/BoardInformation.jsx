const BoardInformation = ({ children, backgroundImage }) => {
  return (
    <div className="w-full flex flex-col justify-center relative overflow-hidden rounded-md">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="bg-none md:bg-cover bg-center"
      >
        <div className="bg-black/75  px-5 py-3 md:px-17 md:py-10 flex justify-center flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BoardInformation;
