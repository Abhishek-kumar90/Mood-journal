import React from 'react';

export default function NotesList({ entries }) {
  return (
    <div className="card">
      <h2>All Notes</h2>
      <div className="notes-grid">
        {entries.map((entry, idx) => (
          <div key={idx} className="note-card">
            <span className="mood">{entry.mood}</span>
            <p>{entry.note}</p>
            <div className="note-footer">
              <small>{entry.date}</small>
              <span>
                {entry.weather && entry.weather.main
                  ? `🌟 ${entry.weather.weather?.[0]?.description}, ${Math.round(entry.weather.main.temp)}°C`
                  : 'N/A'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
