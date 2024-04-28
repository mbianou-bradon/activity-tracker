import React from "react";
import StarIcon from "../../assets/icons/star.icon";

interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
export default function StarRating({ value, setValue }: Props) {
  function handleSelect(index: number) {
    if (value === index + 1) {
      setValue(0);
    } else {
      setValue(index + 1);
    }
  }
  return (
    <div className="my-4">
      <div className="flex items-center gap-1 text-xl md:text-3xl">
        {Array(10)
          .fill(0)
          .map((_v, index) => {
            return (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`hover:text-yellow-500 cursor-pointer ${
                  value >= index + 1 ? "text-yellow-500" : "text-slate-200"
                }`}
              >
                <StarIcon />
              </div>
            );
          })}
      </div>
    </div>
  );
}
