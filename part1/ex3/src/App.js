import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast is to go well.'
  ];

  const randomInt = () => {
    const min = 0;
    const max = anecdotes.length - 1;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInteger;
  };

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const randomAnecdote = () => {
    const randomIndex = randomInt();
    setSelected(randomIndex);
  };

  const vote = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  };

  const findLikedIdx = () => {
    const maxLikes = Math.max(...points);
    const maxIndex = points.indexOf(maxLikes);
    return maxIndex;
  };

  return (
    <div>
      <h1>Anecdote of The Day</h1>
      <p>{anecdotes[selected]}</p>
      <Button onClick={vote} text='Like' />
      <Button onClick={randomAnecdote} text='Next Anecdote' />

      <h1>Most Liked Anecdote</h1>
      <p>{anecdotes[findLikedIdx()]}</p>
    </div>
  );
};

export default App;
