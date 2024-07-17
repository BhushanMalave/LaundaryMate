import { useState, useEffect } from "react";

export const data = [
  {
    id: 1,
    name: "Poland",
    language: "Polish",
    capital: "Warsaw",
    vehicleStatus: "active",
  },
  {
    id: 2,
    name: "Bulgaria",
    language: "Bulgarian",
    capital: "Sofia",
    vehicleStatus: "active",
  },
  {
    id: 3,
    name: "Hungary",
    language: "Hungarian",
    capital: "Budapest",
    vehicleStatus: "active",
  },
  {
    id: 4,
    name: "Moldova",
    language: "Moldovan",
    capital: "Chișinău",
    vehicleStatus: "active",
  },
  {
    id: 5,
    name: "Austria",
    language: "German",
    capital: "Vienna",
    vehicleStatus: "active",
  },
  {
    id: 6,
    name: "Lithuania",
    language: "Lithuanian",
    capital: "Vilnius",
    vehicleStatus: "active",
  },
  {
    id: 7,
    name: "Moldova",
    language: "Moldovan",
    capital: "Chișinău",
    vehicleStatus: "active",
  },
  {
    id: 8,
    name: "Austria",
    language: "German",
    capital: "Vienna",
    vehicleStatus: "active",
  },
  {
    id: 9,
    name: "Lithuania",
    language: "Lithuanian",
    capital: "Vilnius",
    vehicleStatus: "active",
  },
];

export const data1 = [
  {
    id: 1,
    name: "Poland",
    language: "Polish",
    capital: "Warsaw",
    vehicleStatus: "active",
  },
];

export const data2 = [
  {
    id: 1,
    name: "Poland",
    language: "Polish",
    capital: "Warsaw",
    color: "red",
    vehicleStatus: "active",
  },
];

export const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const slice = sliceData(data, page, rowsPerPage);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export const data3 = [
  {
    vehicleId: "VH001000",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001001",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001002",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "inactive",
  },
  {
    vehicleId: "VH001003",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001004",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001005",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001006",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001007",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001008",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH001009",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
  {
    vehicleId: "VH0010010",
    regNo: "KA01-AD556",
    hubId: "HB00201",
    vehicleType: "TataAce",
    weight: "200KG",
    volume: "500m",
    vehicleStatus: "active",
  },
];
