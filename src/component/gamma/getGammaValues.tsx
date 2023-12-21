import { useEffect, useState } from "react";
import { gammaData } from "../calculation/calculation";
import myData from "../../data/Wine-Data.json";
type ValueType = "mean" | "median" | "mode";

const useGetGammaValues = (type: ValueType, c: number) => {
  const [gammaVal, setGammaVal] = useState<number[]>([]);

  useEffect(() => {
    setGammaVal(gammaData());
  }, []);

  const classWiseGammaVal = (c: number) => {
    let val: number[] = [];

    myData.map((e, i) => {
      if (e["Alcohol"] === c) return val.push(Number(gammaVal[i]));
    });
    return val;
  };

  if (type === "mean") {
    const data: number[] = classWiseGammaVal(c);
    const sum = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const meanValue = sum / data.length;
    return meanValue.toFixed(3);
  } else if (type === "median") {
    const data: number[] = classWiseGammaVal(c);
    const mode: number[] = [];

    data.map((e) => {
     return mode.push(Number(e.toFixed(3)));
    });

    mode.sort(function (a: number, b: number) {
      return a - b;
    });
    let hashMap = new Map<number, number>();
    for (let i = 0; i < mode.length; i++) {
      if (hashMap.has(mode[i])) {
        hashMap.set(mode[i], hashMap.get(mode[i])! + 1);
      } else {
        hashMap.set(mode[i], 1);
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
  } else if (type === "mode") {
    const median: number[] = classWiseGammaVal(c);
    median.sort(function (a: number, b: number) {
      return a - b;
    });
    const x = median.length;

    let med = 0;
    const mid = Math.floor(median.length / 2);

    if (x % 2 === 0) {
      med = (median[mid - 1] + median[mid]) / 2;
      return med.toFixed(3);
    } else {
      med = median[mid];
      return med.toFixed(3);
    }
  } else {
    return null;
  }
};

export default useGetGammaValues;
