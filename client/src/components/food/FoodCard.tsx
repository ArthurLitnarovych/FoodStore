import { useEffect, useState } from "react";
import { data } from "./foodData";

// interface BackEndData {
//   users: string[];
// }

const FoodCard: React.FC<FoodProp> = ({ item }) => {
  // const [backEndData, setBackEndData] = useState<BackEndData | undefined>(
  //   undefined
  // );

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setBackEndData(data));
  // }, []);

  return (
    <div
      key={item.id}
      className="border shadow-lg rounded-lg hover:scale-105 duration-300"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{item.name}</p>
        {/* <div>
          {typeof backEndData?.users === "undefined" ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            <>
              {backEndData.users.map((user, index) => (
                <p key={index}>{user}</p>
              ))}
            </>
          )}
        </div> */}
        <p>
          <span className="bg-orange-500 text-white p-1 rounded-full">
            {item.price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
