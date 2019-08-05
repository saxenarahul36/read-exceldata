import React, { useState } from "react";
import XLSX from "xlsx";
import { ExcelDateToJSDate } from "./Utill";

const tableRow = row => {
  const tt = row.map((d, _index) => {
    return <td>{d}</td>;
  });
  return <tr>{tt}</tr>;
};
const tableData = data => {
  try {
    return data.length > 0 ? (
      <tr>
        <td>{data[2]}</td>
        <td>{ExcelDateToJSDate(data)}</td>
      </tr>
    ) : (
      ""
    );
  } catch (eer) {
    return;
  }
};
const ExcelDataTable = () => {
  const [dataObject, setExcelData] = useState([]);

  const handleFile = e => {
    let files = e.target.files[0];

    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = ({ target: { result } }) => {
      const wb = XLSX.read(result, { type: rABS ? "binary" : "array" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setExcelData(data);
    };
    if (rABS) reader.readAsBinaryString(files);
    else reader.readAsArrayBuffer(files);
  };
  return (
    <div>
      <input type="file" accept={SheetJSFT} onChange={handleFile} />
      <h3>As per expected column list below </h3>
      <table>{dataObject.map(tableData)}</table>
      <h3>Show All data from excel sheet below </h3>
      <table>
        <tr>{dataObject.map(tableRow)}</tr>
      </table>
    </div>
  );
};
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm"
]
  .map(function(x) {
    return "." + x;
  })
  .join(",");
export default ExcelDataTable;
