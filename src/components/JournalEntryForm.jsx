import React, { useState, useEffect } from 'react';
import MoodSelector from './MoodSelector';
import WeatherDisplay from './WeatherDisplay';
import CalendarView from './CalendarView';
import '../index.css';

export default function JournalEntryForm({ addEntry, entries, selectedDate, setSelectedDate }) {
  const [selectedMood, setSelectedMood] = useState("");
  const [note, setNote] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // 🌙 Dark mode state

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleSave = (e) => {
    e.preventDefault();

    if (!selectedMood || !note) {
      alert("Please select a mood and enter a note.");
      return;
    }

    const localDate = new Date(selectedDate).toLocaleDateString('en-IN');

    addEntry({
      date: localDate,
      mood: selectedMood,
      note,
      weather
    });

    setSelectedMood("");
    setNote("");
  };

  return (
    <div className="card" style={{ padding: '20px', boxSizing: 'border-box' }}>
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>MoodMate</h3>
        <button onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer' }}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <WeatherDisplay location={location} setWeather={setWeather} weather={weather} />
      <h2>{selectedDate.toDateString()}</h2>
      <p>How are you feeling today?</p>

      <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />

      <textarea
        placeholder="Add a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: '100%',
          resize: 'vertical',
          marginTop: '10px',
          minHeight: '60px',
          padding: '10px',
          boxSizing: 'border-box'
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <button className="save-btn" onClick={handleSave} style={{ width: '100%', padding: '10px' }}>Save</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <CalendarView entries={entries} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
    </div>
  );
}
