import React, { useEffect, useState } from "react";
import { CustomTable } from "../CustomTable/CustomTable";
import { Header } from "../Header/Header";
import { InputsAndResults } from "../InputsAndResults/InputsAndResults";

export const Analyze = () => {
  const [tableArray, setTableArray] = useState([]);
  useEffect(() => {
    console.log(tableArray);
  }, [tableArray]);

  return (
    <div className='flex flex-col justify-center items-center mt-4 w-full h-fit rounded-md bg-white'>
      <Header />
      <div>
        <InputsAndResults
          setTableArray={setTableArray}
          tableArray={tableArray}
        />
      </div>
      <div>
        <CustomTable tableArray={tableArray} />
      </div>
    </div>
  );
};
