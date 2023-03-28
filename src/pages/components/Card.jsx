const Card = () => {
  return (
    <div className="w-60 cursor-pointer h-60 border-[0.5px] flex flex-col rounded-md ">
      <div className="flex bg-neutral-700 w-full h-full"></div>
      <div className="p-3">
        <h1 className="font-bold text-lg">$ 12</h1>
      </div>
    </div>
  );
};
export default Card;
