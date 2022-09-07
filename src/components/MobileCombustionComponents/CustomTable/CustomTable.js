import React, { useEffect, useState } from "react";

export const CustomTable = ({ tableArray, setTableArray, setEditResults }) => {
  useEffect(() => {
    console.log(tableArray);
  }, [tableArray]);

  const handleDeleteTableRow = (result, dix) => {
    let tempArray = [].concat(tableArray);
    const index = tempArray.indexOf(result);
    if (index > -1) {
      // only splice array when item is found
      tempArray.splice(index, 1); // 2nd parameter means remove one item only
    }
    setTableArray(tempArray);
  };

  const handleEditTableRow = (index) => {
    let tempArray = [].concat(tableArray);
    setEditResults(tempArray[index]);
    tempArray.splice(index, 1);
    setTableArray(tempArray);
  };

  return (
    <>
      {tableArray.length > 0 ? (
        <div className='m-8 '>
          <table className='w-full text-sm text-left'>
            <thead className='text-xs text-white uppercase bg-[#0D1840] rounded-3xl'>
              <tr className='child:border-x'>
                <th scope='col' className='py-3 px-6'>
                  Facility ID
                </th>
                <th scope='col' className='py-3 px-6'>
                  Year
                </th>
                <th scope='col' className='py-3 px-6'>
                  Fuel
                </th>
                <th scope='col' className='py-3 px-6'>
                  Amount of Fuel
                </th>
                <th scope='col' className='py-3 px-6'>
                  Units
                </th>
                <th scope='col' className='py-3 px-6'>
                  CO2
                </th>
                <th scope='col' className='py-3 px-6'>
                  CH4
                </th>
                <th scope='col' className='py-3 px-6'>
                  N2O
                </th>
                <th scope='col' className='py-3 px-6'>
                  CO2E
                </th>
                <th scope='col' className='py-3 px-6'></th>
              </tr>
            </thead>
            <tbody className='text-black bg-white'>
              {tableArray.map((result, index) => {
                return (
                  <tr key={index} className='border-b child:border-x'>
                    <td className='py-4 px-6'>{result.selectedFacilityId}</td>
                    <td className='py-4 px-6'>{result.selectedYear}</td>
                    <td className='py-4 px-6'>{result.fuelLabel}</td>
                    <td className='py-4 px-6'>{result.selectedAmount}</td>
                    <td className='py-4 px-6'>{result.unitLabel}</td>
                    <td className='py-4 px-6'>{result.data.co2}</td>
                    <td className='py-4 px-6'>{result.data.ch4}</td>
                    <td className='py-4 px-6'>{result.data.n2o}</td>
                    <td className='py-4 px-6'>{result.data.co2e}</td>
                    <td className='py-4 px-6'>
                      <div className='flex flex-col justify-center items-center child:bg-[#0D1840] child:text-white child:mb-1 child:p-1 child:rounded-lg child:w-full'>
                        <button
                          onClick={() => {
                            handleDeleteTableRow(result);
                          }}
                        >
                          Sil
                        </button>
                        <button
                          onClick={() => {
                            handleEditTableRow(index);
                          }}
                        >
                          Düzenle
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};
