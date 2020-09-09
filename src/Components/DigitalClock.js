import React, { useState, useEffect } from 'react';
import '../scss/style.css'

const clockTime = () => {
    let clkTime = new Date();
    let timeObj = {};
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let ampm = clkTime.getHours() >= 12 ? 'PM' : 'AM';
    timeObj = {
        hours: clkTime.getHours() % 12,
        minutes: clkTime.getMinutes()<10?`0${clkTime.getMinutes()}`:clkTime.getMinutes(),
        seconds: clkTime.getSeconds()<10?`0${clkTime.getSeconds()}`:clkTime.getSeconds(),
        ampm: ampm,
        day: days[clkTime.getDay()],
        month: months[clkTime.getMonth()],
        date: clkTime.getDate(),
        year: clkTime.getFullYear(),
    };

    return timeObj;
}
export default function DigitalClock() {
    const [currentTime, setTime] = useState(clockTime());  
    useEffect(() => {
            setInterval(() => setTime(clockTime()), 1000)
    })

    let { hours, minutes, seconds, ampm, day, month, date, year } = currentTime;
    return (
        <div className="container rounded">
            <div className=" card text-center">
                <div className="card  ">
                    <div className="card-header">
                       {day}
                    </div>
                    <div className="card-body">
                        <div className="card-title ">{hours}:{minutes}:{seconds} <small className="am-pm" >{ampm}</small></div>
                    </div>
                    <div className="card-footer">
                        {month} {date}, {year}
                    </div>
                </div>
            </div>
        </div>
    )
}


// setDate(() => clockDate());
// const clockDate = () => {
//     let clkTime = new Date();
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     let todayDt = {}
//     todayDt = {
//         day: days[clkTime.getDay()],
//         month: months[clkTime.getMonth()],
//         date: clkTime.getDate(),
//         year: clkTime.getFullYear(),

//     };
//     return todayDt
// }