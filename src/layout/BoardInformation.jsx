const BoardInformation = ({ children, backgroundImage }) => {
  return (
    <div className="w-full flex flex-col justify-center relative overflow-hidden rounded-md">
      <div className="absolute top-0 left-0">
        <img
          src={backgroundImage}
          alt=""
          className="object-none md:object-cover object-center w-full h-full"
        />
      </div>
      <div className="bg-black/60 z-1 px-5 md:px-30">{children}</div>
    </div>
  );
};

export default BoardInformation;
