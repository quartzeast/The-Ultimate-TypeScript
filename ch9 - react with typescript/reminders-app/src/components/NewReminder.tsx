import React, { useState } from 'react';

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

export default function NewReminder({
  onAddReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    if (!title) onAddReminder(title);
    setTitle('');
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control"
      />
      <button
        type="submit"
        className="btn btn-primary rounded-pill my-3"
      >
        Add Reminder
      </button>
    </form>
  );
}
