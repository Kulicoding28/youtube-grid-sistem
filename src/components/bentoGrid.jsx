import { data } from "../data";

const BentoGrid = () => {
  const gridStyle =
    "bg-neutral-100 border-1 rounded-xl flex flex-col items-center justify-center";
  return (
    <div className="grid grid-cols-5 auto-rows-auto gap-4 my-10">
      {data.map((item, i) => (
        <div
          key={i}
          className={`${gridStyle} ${i === 0 ? "md:col-span-4" : ""}  ${
            i === 8 ? " md:row-span-2" : ""
          }${i === 5 ? " md:col-span-2 md:row-span-2" : ""}${
            i === 3 ? "md:row-span-2" : ""
          }`}
        >
          <img
            src={item?.image}
            alt="contoh"
            className="bg-cover bg-center rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
