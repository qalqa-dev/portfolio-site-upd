import { useEffect, useState } from 'react';
import { Term } from '../Term/Term';

export const Init = () => {
  const [text, setText] = useState('');

  const changeText = () => {
    const messages = [
      'Resetting texts',
      'Resetting design',
      'Resetting data',
      'Loading new skills',
      'Loading new tools',
      "Now it's done",
    ];

    const timers: number[] = [];

    messages.forEach((message, index) => {
      const delay = Math.random() * 5000;
      const timer = setTimeout(() => {
        setText(message);
        clearTimeout(timer);
      }, delay);
      timers.push(timer);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  };

  useEffect(() => {
    const cleanup = changeText();
    return cleanup;
  }, []);

  return (
    <Term className="!fixed top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%] z-99 w-[50vw] h-[30vh] align-middle justify-center">
      <p className="text-center text-[80px] font-bold">{text}</p>
    </Term>
  );
};
