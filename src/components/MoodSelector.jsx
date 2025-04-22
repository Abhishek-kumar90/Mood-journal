import React from 'react';
import './MoodSelector.css';

const moods = [
  { label: "😊", value: "happy" },
  { label: "😢", value: "sad" },
  { label: "🤩", value: "excited" },
  { label: "😠", value: "angry" },
  { label: "😌", value: "calm" },
];

export default function MoodSelector({ selectedMood, setSelectedMood }) {
  return (
    <div className="mood-selector">
      {moods.map(mood => (
        <button
          key={mood.value}
          className={`mood-btn ${selectedMood === mood.value ? "active" : ""}`}
          onClick={() => setSelectedMood(mood.value)}
        >
          {mood.label}
        </button>
      ))}
    </div>
  );
}
