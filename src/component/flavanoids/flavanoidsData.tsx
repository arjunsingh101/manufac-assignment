import { useEffect, useState } from "react";
import { totalClass } from "../calculation/calculation";
import useGetCalculatedValue from "./getCalculatedValue";

const FlavanoidsData = () => {
  const [classData, setClassData] = useState<number[]>([]);

  useEffect(() => {
    setClassData(totalClass());
  }, []);

  return (
    <div className="center">
      <div>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {classData.map((e) => (
                <th key={e}>Class {e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Flavanoids Mean</th>
              <td>{useGetCalculatedValue("mean", 1, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("mean", 2, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("mean", 3, "Flavanoids")}</td>
            </tr>
            <tr>
              <th>Flavanoids Median</th>
              <td>{useGetCalculatedValue("median", 1, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("median", 2, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("median", 3, "Flavanoids")}</td>
            </tr>
            <tr>
              <th>Flavanoids Mode</th>
              <td>{useGetCalculatedValue("mode", 1, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("mode", 2, "Flavanoids")}</td>
              <td>{useGetCalculatedValue("mode", 3, "Flavanoids")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlavanoidsData;
