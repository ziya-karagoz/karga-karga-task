import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import {
  faciltyIdOptions,
  yearOptions,
  activityTypeOptions,
} from "../../../../utils/costants";

export const Inputs = ({
  setResults,
  isResetting,
  setIsResetting,
  editResults,
}) => {
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityLabel, setActivityLabel] = useState(null);
  const [selectedFuelSource, setSelectedFuelSource] = useState(null);
  const [fuelLabel, setFuelLabel] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [vehicleLabel, setvehicleLabel] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitLabel, setUnitLabel] = useState(null);

  const [fuelTypes, setFuelTypes] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [units, setUnits] = useState([]);

  const facilitySelectRef = useRef();
  const yearSelectRef = useRef();
  const activitySelectRef = useRef();
  const fuelSourceSelectRef = useRef();
  const vehicleSelectRef = useRef();
  const amountInputRef = useRef();
  const unitSelectRef = useRef();

  useEffect(() => {
    if (isResetting) {
      facilitySelectRef.current.setValue([], "clear");
      yearSelectRef.current.setValue([], "clear");
      activitySelectRef.current.setValue([], "clear");
      fuelSourceSelectRef.current.setValue([], "clear");
      vehicleSelectRef.current.setValue([], "clear");
      amountInputRef.current.value = "";
      unitSelectRef.current.setValue([], "clear");
      setIsResetting(false);
    }
  }, [isResetting]);

  useEffect(() => {
    if (editResults !== null) {
      facilitySelectRef.current.setValue(
        [
          {
            value: editResults.selectedFacilityId,
            label: editResults.selectedFacilityId,
          },
        ],
        "select-option"
      );
      yearSelectRef.current.setValue(
        [
          {
            value: editResults.selectedYear,
            label: editResults.selectedYear,
          },
        ],
        "select-option"
      );
      activitySelectRef.current.setValue(
        [
          {
            value: editResults.selectedActivity,
            label: editResults.activityLabel,
          },
        ],
        "select-option"
      );
      fuelSourceSelectRef.current.setValue(
        [
          {
            value: editResults.selectedFuelSource,
            label: editResults.fuelLabel,
          },
        ],
        "select-option"
      );
      vehicleSelectRef.current.setValue(
        [
          {
            value: editResults.selectedVehicle,
            label: editResults.vehicleLabel,
          },
        ],
        "select-option"
      );
      amountInputRef.current.value = editResults.selectedAmount;
      unitSelectRef.current.setValue(
        [
          {
            value: editResults.selectedUnit,
            label: editResults.unitLabel,
          },
        ],
        "select-option"
      );
      console.log(editResults);
      setSelectedFacilityId(editResults.selectedFacilityId);
      setSelectedYear(editResults.selectedYear);
      setSelectedActivity(editResults.selectedActivity);
      setFuelLabel(editResults.fuelLabel);
      setUnitLabel(editResults.unitLabel);
      setSelectedFuelSource(editResults.selectedFuelSource);
      setSelectedVehicle(editResults.selectedVehicle);
      setSelectedAmount(editResults.selectedAmount);
      setSelectedUnit(editResults.selectedUnit);
    }
  }, [editResults]);

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
    if (
      selectedFacilityId !== null &&
      selectedYear !== null &&
      selectedActivity !== null &&
      selectedFuelSource !== null &&
      selectedVehicle !== null &&
      selectedAmount !== null &&
      selectedUnit !== null
    ) {
      axios
        .get(
          `https://www.timdijitalmentorlukprogrami.com/api/greenhouse-gas/mobile-combustion?activity=${selectedActivity}&fuel=${selectedFuelSource}&amount=${selectedAmount}&unit=${selectedUnit}&vehicle=${selectedVehicle}&facility_id=${selectedFacilityId}&year=${selectedYear}`
        )
        .then((res) => {
          let allResults = {
            selectedFacilityId,
            selectedYear,
            selectedActivity,
            activityLabel,
            selectedFuelSource,
            fuelLabel,
            selectedVehicle,
            vehicleLabel,
            selectedAmount,
            selectedUnit,
            unitLabel,
            ...res.data,
          };
          setResults(allResults);
        });
    }
  }, [
    selectedFacilityId,
    selectedYear,
    selectedActivity,
    selectedFuelSource,
    fuelLabel,
    selectedVehicle,
    selectedAmount,
    selectedUnit,
    unitLabel,
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
            ref={facilitySelectRef}
            options={faciltyIdOptions}
            onChange={(e) => {
              setSelectedFacilityId(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Year</label>
          <Select
            ref={yearSelectRef}
            options={yearOptions}
            onChange={(e) => {
              setSelectedYear(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Activity Type </label>
          <Select
            ref={activitySelectRef}
            options={activityTypeOptions}
            onChange={(e) => {
              fuelSourceSelectRef.current.setValue([], "clear");
              vehicleSelectRef.current.setValue([], "clear");
              unitSelectRef.current.setValue([], "clear");
              setActivityLabel(e.label);
              setSelectedActivity(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Fuel Source</label>
          <Select
            ref={fuelSourceSelectRef}
            options={fuelTypes}
            onChange={(e) => {
              vehicleSelectRef.current.setValue([], "clear");
              unitSelectRef.current.setValue([], "clear");
              setFuelLabel(e.label);
              setSelectedFuelSource(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Vehicle Type</label>
          <Select
            ref={vehicleSelectRef}
            options={vehicles}
            onChange={(e) => {
              setvehicleLabel(e.label);
              setSelectedVehicle(e.value);
            }}
          />
        </div>
        <div className='my-4  xl:w-96 text-[#0D1840] text-lg'>
          <label htmlFor=''>Amount of Activity</label>
          <div className='flex justify-between'>
            <input
              ref={amountInputRef}
              type='number'
              min={0}
              className='border-[1px] rounded-md'
              placeholder='Giriniz...'
              onChange={(e) => {
                setSelectedAmount(e.target.value);
              }}
            />
            <Select
              ref={unitSelectRef}
              options={units}
              placeholder='Units...'
              onChange={(e) => {
                setUnitLabel(e.label);
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
