import React, { useEffect, useState } from "react";
import axios from "axios";

import { Inputs } from "./Inputs/Inputs";
import { Results } from "./Results/Results";
export const InputsAndResults = ({ setTableArray, tableArray }) => {
  const [results, setResults] = useState(null);
  const [isResetting, setIsResetting] = useState(false);

  const resetResults = () => {
    setResults(null);
  };

  return (
    <div className='m-8'>
      <div className='flex w-full justify-center items-start'>
        <Inputs
          setResults={setResults}
          isResetting={isResetting}
          setIsResetting={setIsResetting}
        />
        <Results
          results={results}
          tableArray={tableArray}
          resetResults={resetResults}
          setTableArray={setTableArray}
          setIsResetting={setIsResetting}
        />
      </div>
    </div>
  );
};
