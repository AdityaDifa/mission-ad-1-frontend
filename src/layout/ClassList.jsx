const ClassList = () => {
  const Card = () => {
    return (
      <div className="w-full bg-white shadow-sm rounded-sm p-2">
        <div className="w-full">aaaa</div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ClassList;
