import React, { useState } from 'react';
import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [reminderDescription, setReminderDescription] = useState('');

  const [reminders, setReminders] = useState([]);

  function handleAddReminder (){
    const newReminder = {
      description: reminderDescription,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setReminders(prevState => [...prevState, newReminder]);
  }


  return (
    <div className="container">
      <h1>Lista de Lembretes do Dia</h1>

      <input type="text"
        placeholder="Digite a tarefa..."
        onChange={(e) => setReminderDescription(e.target.value)}
      />

      <button type="button" onClick={handleAddReminder}>
        Adicionar</button>

      {
        reminders.map((reminder) => (
        <Card 
        key={reminder.time}
        description={reminder.description} 
        time={reminder.time} /> )
        
      )}
    </div>
  )
}


