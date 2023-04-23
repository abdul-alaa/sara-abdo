import React, { FC } from 'react';
import './App.css';
import { DateCard } from './date-card';

function getMonthName(month: number) {
  const date = new Date();
  date.setMonth(month - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
}

const daysGenerator = (year: number, _month: number) => {
  const month = [];
  for (let i = _month; i < 6; i++) {
    month.push({
      month: getMonthName(i),
      monthNumber: i,
      days: getDaysInMonth(year, i),
    });
  }
  month.push({
    month: getMonthName(6),
    days: 9,
    monthNumber: 6,
  })
  const days = [];
  for (let i = 0; i < month.length; i++) {
    for (let j = 1; j <= month[i].days; j++) {
      days.push({
        month: month[i].month,
        monthNumber: month[i].monthNumber,
        day: j,
      })
    }
  }
  return days;
}
const today = new Date();
const currentMonth: number = today.getMonth() + 1; // April
const currentYear = today.getFullYear();
const todayDay = today.getDate();
const days = daysGenerator(currentYear, currentMonth);
const remainingDays = days.filter(day => (day as any).monthNumber > currentMonth || ((day as any).monthNumber === currentMonth && day.day >= todayDay));
const App: FC = () => {
  return (
    <div className="container">
      <h1 className='center'>Sara &#128512;&#128525; & Abdulrahman   <span className='remaining-days'>Remaining days {remainingDays.length}</span></h1>
      <h3>Every passing moment feels like an eternity without you, but the thought of finally being able to see you and hold you close keeps me going and fills my heart with hope and anticipation.</h3>
      <div className="d-flex flex-wrap flex-start">

        {days.map((entry, index) => {
          if (index === days.length - 1)
            return <div className='chipi sara'>
              {entry.month} {entry.day}
            </div>
          return (entry.day === todayDay && entry.month === getMonthName(currentMonth)) ?
            <div className='chipi abdo' key={index}>
              {entry.month} {entry.day}

            </div> : <DateCard key={index} isPassed={(entry as any).monthNumber < currentMonth || ((entry as any).monthNumber === currentMonth && entry.day < todayDay)} day={entry.day} month={entry.month}></DateCard>
        })}

      </div>
    </div>
  );
}

export default App;
