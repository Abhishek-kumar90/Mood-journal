import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarView({ entries }) {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // Convert to local ISO string (India timezone)
      const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0];

      const entry = entries.find(e => e.date === localDate);

      if (!entry) return null;

      return (
        <div style={{ fontSize: "0.8rem", textAlign: "center" }}>
          {entry.mood} <br />
          {entry.weather && entry.weather.main
            ? `🌟 ${Math.round(entry.weather.main.temp)}°C`
            : 'N/A'}
        </div>
      );
    }
  };

  return (
    <Calendar tileContent={tileContent} />
  );
}
