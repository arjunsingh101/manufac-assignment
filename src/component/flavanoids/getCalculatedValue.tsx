import { useEffect, useState } from "react";
import { WineData } from "../../interface/dataInterface";
import { returnSortedData } from "../calculation/calculation";

type ValueType = "mean" | "median" | "mode";

const useGetCalculatedValue = (
  type: ValueType,
  a: number,
  b: keyof WineData
) => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    setData(returnSortedData(a, b));
  }, [a, b]);

  if (type === "mean") {
    const calculateMean = (data: number[]): string => {
      const sum = data.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      const meanValue = sum / data.length;
      return meanValue.toFixed(3);
    };
    const meanValue = calculateMean(data);

    return (
      <div>
        <span>{meanValue}</span>
      </div>
    );
  } else if (type === "median") {
    const medianData = () => {
      data.sort(function (a: number, b: number) {
        return a - b;
      });
      const x = data.length;

      let med = 0;
      const mid = Math.floor(data.length / 2);

      if (x % 2 === 0) {
        med = (data[mid - 1] + data[mid]) / 2;
        return med.toFixed(3);
      } else {
        med = data[mid];
        return med.toFixed(3);
      }
    };
    return (
      <div>
        <span>{medianData()}</span>
      </div>
    );
  } else if (type === "mode") {
    const dataData = () => {
      data.sort(function (a: number, b: number) {
        return a - b;
      });
      let hashMap = new Map<number, number>();
      for (let i = 0; i < data.length; i++) {
        if (hashMap.has(data[i])) {
          hashMap.set(data[i], hashMap.get(data[i])! + 1);
        } else {
          hashMap.set(data[i], 1);
        }
      }
      let maxCount = 0;
      let result = -1;

      hashMap.forEach((value, key) => {
        if (maxCount < value) {
          result = key;
          maxCount = value;
        }
      });

      return result.toFixed(3);
    };
    return (
      <div>
        <span>{dataData()}</span>
      </div>
    );
  }
};

export default useGetCalculatedValue;
