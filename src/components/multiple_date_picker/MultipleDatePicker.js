import React from "react";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./MultipleDatePicker.css";
import { addDays } from "date-fns";

export default function MultipleDatePicker({style}) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <div className="mdp-inputwrap">
        <input
          value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
            range[0].endDate,
            "dd/MM/yyyy"
          )}`}
          readOnly
          className="inputBox"
          style={style}
          onClick={() => {
            setOpen((open) => !open);
          }}
        />
        <img
          src={require("../../images/calender.png")}
          alt="icon"
          className="cal-icon"
          onClick={() => {
            setOpen((open) => !open);
          }}
        />
      </div>
      <div ref={refOne}>
        {open && (
          <DateRange
            className="calendarElement"
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
}
