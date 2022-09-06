import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import {
  faciltyIdOptions,
  yearOptions,
  activityTypeOptions,
} from "../../../../utils/costants";

export const Inputs = ({}) => {
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [selectedFuelSource, setSelectedFuelSource] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);

  const [fuelTypes, setFuelTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.timdijitalmentorlukprogrami.com/api/fuel-type?data_type_id=${selectedActivity?.toString()}`
      )
      .then((res) => {
        let fTypes = res.data.data.map((fuelType) => {
          return {
            value: fuelType.id,
            label: fuelType.name,
          };
        });

        let temp = res.data.data.find(
          (element) => element.id === selectedFuelSource
        );
        let vhcls = temp?.vehicles.map((vehicle) => {
          return {
            value: vehicle.id,
            label: vehicle.name,
          };
        });

        setFuelTypes(fTypes);
        setVehicles(vhcls);
      });

    axios
      .get(
        `https://www.timdijitalmentorlukprogrami.com/api/unit?data_type_id=${selectedActivity?.toString()}`
      )
      .then((res) => {
        let units = res.data.data.map((unit) => {
          return {
            value: unit.id,
            label: unit.name,
          };
        });
        setUnits(units);
      });
  }, [selectedActivity, selectedFuelSource]);

  useEffect(() => {
    console.log("Selected Values: ", {
      selectedFacilityId,
      selectedYear,
      selectedActivity,
      selectedFuelSource,
      selectedVehicle,
      selectedAmount,
      selectedUnit,
    });
  }, [
    selectedFacilityId,
    selectedYear,
    selectedActivity,
    selectedFuelSource,
    selectedVehicle,
    selectedAmount,
    selectedUnit,
  ]);

  return (
    <div className='flex flex-col w-[30vw]  '>
      <div className='my-4'>
        <h1 className='text-xl font-semibold'>
          GİRDİ ALANI
          <hr className='w-[40%] h-2 border-t-2' />
        </h1>
        <p className='text-sm'>
          Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
          doldurun:
        </p>
      </div>
      <div className='mt-10 border-r-2 '>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Facility ID</label>
          <Select
            options={faciltyIdOptions}
            onChange={(e) => {
              setSelectedFacilityId(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Year</label>
          <Select
            options={yearOptions}
            onChange={(e) => {
              setSelectedYear(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Activity Type </label>
          <Select
            options={activityTypeOptions}
            onChange={(e) => {
              setSelectedActivity(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Fuel Source</label>
          <Select
            options={fuelTypes}
            onChange={(e) => {
              setSelectedFuelSource(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Vehicle Type</label>
          <Select
            options={vehicles}
            onChange={(e) => {
              setSelectedVehicle(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Amount of Activity</label>
          <div className='flex justify-between'>
            <input
              type='number'
              min={0}
              className='border-[1px] rounded-md'
              placeholder='Giriniz...'
              onChange={(e) => {
                setSelectedAmount(e.target.value);
              }}
            />
            <Select
              options={units}
              placeholder='Units...'
              onChange={(e) => {
                setSelectedUnit(e.value);
              }}
              className='w-[40%]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};