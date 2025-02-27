import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from './Typewriter.module.scss';

interface TypewriterProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const Typewriter = ({
  text,
  typingSpeed = 100,
  pauseDuration = 4000,
  className,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const currentText = text[currentTextIndex];
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (!isDeleting) {
      if (index < currentText.length) {
        timerRef.current = window.setTimeout(() => {
          setIndex(index + 1);
          setIsPrinted(true);
          setDisplayedText(currentText.slice(0, index + 1));
        }, typingSpeed);
      } else {
        setIsPrinted(true);
        timerRef.current = window.setTimeout(() => {
          setIsPrinted(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (index > 0) {
        timerRef.current = window.setTimeout(() => {
          setIsPrinted(true);
          setIndex(index - 1);
          setDisplayedText(currentText.slice(0, index - 1));
        }, typingSpeed / 2);
      } else {
        timerRef.current = window.setTimeout(() => {
          setIsDeleting(false);
          setIsPrinted(false);
          setCurrentTextIndex((currentTextIndex + 1) % text.length);
        }, pauseDuration / 3);
      }
    }
  }, [
    index,
    isDeleting,
    currentText,
    currentTextIndex,
    typingSpeed,
    pauseDuration,
    text.length,
  ]);

  return (
    <div className={clsx(styles.typewriter, className)}>
      <span>{displayedText}</span>
      <div
        className={clsx(styles.cursor, {
          [styles.blink]: isPrinted,
        })}
      ></div>
    </div>
  );
};

export default Typewriter;
