import React from "react";

export const CustomTable = () => {
  return (
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
          <tr className='border-b child:border-x'>
            <td className='py-4 px-6'>Example1</td>
            <td className='py-4 px-6'>Example2</td>
            <td className='py-4 px-6'>Example3</td>
            <td className='py-4 px-6'>Example4</td>
            <td className='py-4 px-6'>Example5</td>
            <td className='py-4 px-6'>Example6</td>
            <td className='py-4 px-6'>Example7</td>
            <td className='py-4 px-6'>Example8</td>
            <td className='py-4 px-6'>Example9</td>
            <td className='py-4 px-6'>Example10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
