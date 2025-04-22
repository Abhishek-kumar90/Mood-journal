import React, { useState } from 'react';
import JournalEntryForm from './components/JournalEntryForm';
import NotesList from './components/NotesList';
import './index.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addEntry = (entry) => {
    setEntries(prev => [...prev, entry]);
  };

  return (
    <div>
      <JournalEntryForm 
        addEntry={addEntry}
        entries={entries}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <NotesList entries={entries} />
    </div>
  );
}

export default App;
