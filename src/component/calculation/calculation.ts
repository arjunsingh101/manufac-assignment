import myData from "../../data/Wine-Data.json";
import { WineData } from "../../interface/dataInterface";

export const gammaData = () => {
  let gamma: number[] = [];
  let ash: number[] = [];
  let hue: number[] = [];
  let magnesium: number[] = [];

  myData.map((e) => {
   return ash.push(Number(e["Ash"]));
  });

  myData.map((e) => {
    return magnesium.push(Number(e["Magnesium"]));
  });

  myData.map((e) => {
    return hue.push(Number(e["Hue"]));
  });

  for (let i = 0; i < myData.length; i++) {
    let data = (ash[i] * hue[i]) / magnesium[i];
    gamma.push(data);
  }
  return gamma;
};

export const totalClass = () => {
  let classData: number[] = [];
  let uniqueClassData: number[] = [];

  myData.map((e) => {
   return classData.push(e["Alcohol"]);
  });
  classData.forEach((element) => {
    if (!uniqueClassData.includes(element)) {
      uniqueClassData.push(element);
    }
  });
  return uniqueClassData;
};

export const returnSortedData = (a: number, b: keyof WineData) => {
  const wholeData: WineData[] = myData;
  const dataVar: number[] = [];
  wholeData.forEach((e) => {
    if (e["Alcohol"] === a) {
      dataVar.push(Number(e[b]));
    }
  });

  return dataVar;
};

export const MEASURES = {
  MEAN: "mean",
  MEDIAN: "median",
  MODE: "mode",
};
