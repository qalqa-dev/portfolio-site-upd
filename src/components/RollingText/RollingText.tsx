import { useEffect, useState } from 'react';
import styles from './RollingText.module.scss';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const RollingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState<string[][]>(
    text.split('').map(() => []),
  );
  const [animationDone, setAnimationDone] = useState(
    text.split('').map(() => false),
  );

  useEffect(() => {
    text.split('').forEach((char, index) => {
      const before = Array.from(
        { length: 20 },
        () => chars[Math.floor(Math.random() * chars.length)],
      );
      const after = Array.from(
        { length: 20 },
        () => chars[Math.floor(Math.random() * chars.length)],
      );

      const randomSequence = before.concat(char, after);

      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[index] = randomSequence;
        return newText;
      });

      setTimeout(() => {
        setAnimationDone((prev) => {
          const newDone = [...prev];
          newDone[index] = true;
          return newDone;
        });
      }, 500 + index * 200);
    });
  }, [text]);

  return (
    <div className={styles['rolling-text-container']}>
      {displayedText.map((sequence, index) => (
        <div key={index} className={styles['rolling-column']}>
          <div
            className={styles['rolling-list']}
            style={{
              transform: animationDone[index]
                ? 'translateY(0)'
                : `translateY(-${sequence.length - 1}%)`,
              transition: 'transform 1.5s ease-out',
            }}
          >
            {sequence.map((char, i) => (
              <div key={i} className={styles['rolling-char']}>
                {char}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RollingText;
