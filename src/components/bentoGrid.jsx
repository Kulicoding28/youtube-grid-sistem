import { data } from "../data";

const BentoGrid = () => {
  const gridStyle = " rounded-xl flex flex-col";
  return (
    <div className="grid md:grid-cols-5 md:auto-rows-auto gap-4 my-10">
      {data.map((item, i) => (
        <div
          key={i}
          className={`${gridStyle} ${i === 0 ? "md:col-span-4 " : ""}  ${
            i === 8 ? " md:row-span-2" : ""
          }${i === 5 ? " md:col-span-2 md:row-span-2 " : ""}${
            i === 3 ? "md:row-span-2 " : ""
          }`}
        >
          <img src={item?.image} alt="contoh" />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
