import { useEffect, useState } from "react";
import { totalClass } from "../calculation/calculation";
import useGetGammaValues from "./getGammaValues";

const GammaCal = () => {
  const [classVal, setClassVal] = useState<number[]>([]);

  useEffect(() => {
    setClassVal(totalClass());
  }, []);

  return (
    <div className="center">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classVal.map((e) => (
              <th key={e}>Class {e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Gamma Mean</th>
            <td>{useGetGammaValues("mean", 1)}</td>
            <td>{useGetGammaValues("mean", 2)}</td>
            <td>{useGetGammaValues("mean", 3)}</td>
          </tr>
          <tr>
            <th>Gamma Median</th>
            <td>{useGetGammaValues("median", 1)}</td>
            <td>{useGetGammaValues("median", 2)}</td>
            <td>{useGetGammaValues("median", 3)}</td>
          </tr>
          <tr>
            <th>Gamma Mode</th>
            <td>{useGetGammaValues("mode", 1)}</td>
            <td>{useGetGammaValues("mode", 2)}</td>
            <td>{useGetGammaValues("mode", 3)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaCal;
