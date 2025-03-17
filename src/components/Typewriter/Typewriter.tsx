import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import styles from './Typewriter.module.scss';

interface TypewriterProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  initialPause?: number;
  cursorWith?: number;
  className?: string;
  onCallback?: (currentText: string) => void;
}

export const Typewriter = ({
  text,
  typingSpeed = 100,
  pauseDuration = 4000,
  initialPause = 0,
  cursorWith = 6,
  className,
  onCallback,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);

  const currentText = text[currentTextIndex];
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (initialPause > 0) {
      timerRef.current = window.setTimeout(() => {
        setIsPrinted(true);
        setCursorVisible(true);
      }, initialPause);
    } else {
      setIsPrinted(true);
    }

    return () => clearTimeout(timerRef.current);
  }, [initialPause]);

  useEffect(() => {
    if (isPrinted) {
      if (!isDeleting) {
        if (index < currentText.length) {
          timerRef.current = window.setTimeout(() => {
            setIndex(index + 1);
            setDisplayedText(currentText.slice(0, index + 1));
            if (onCallback) {
              onCallback(currentText.slice(0, index + 1));
            }
          }, typingSpeed);
        } else {
          timerRef.current = window.setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        if (index > 0) {
          timerRef.current = window.setTimeout(() => {
            setIndex(index - 1);
            setDisplayedText(currentText.slice(0, index - 1));
            if (onCallback) {
              onCallback(currentText.slice(0, index - 1));
            }
          }, typingSpeed / 2);
        } else {
          timerRef.current = window.setTimeout(() => {
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % text.length);
          }, pauseDuration / 3);
        }
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [
    index,
    isDeleting,
    currentText,
    currentTextIndex,
    typingSpeed,
    pauseDuration,
    text.length,
    onCallback,
    isPrinted,
  ]);

  return (
    <div className={clsx(styles.typewriter, className)}>
      <span>{displayedText}</span>
      <div
        style={{ width: `${cursorWith}px` }}
        className={clsx(styles.cursor, {
          [styles.blink]: isPrinted,
          [styles.visible]: cursorVisible,
        })}
      ></div>
    </div>
  );
};
