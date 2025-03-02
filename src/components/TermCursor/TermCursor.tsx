import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { IScrollRange } from 'types';
import styles from './TermCursor.module.scss';

interface ITermCursorProps {
  command: string;
  text?: string;
  prefix?: string;
  postfix?: string;
  state?: 'error' | 'success' | 'uncompleted';
  scrollRange?: IScrollRange;
  scroll?: number;
}

export const TermCursor: React.FC<ITermCursorProps> = ({
  command,
  text = '',
  prefix = '',
  postfix = '',
  state,
  scrollRange,
  scroll = 0,
}) => {
  const [progress, setProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const prevScroll = useRef(scroll);

  useEffect(() => {
    if (!scrollRange) return;

    if (scroll >= prevScroll.current) {
      setScrollDirection('down');
    } else {
      setScrollDirection('up');
    }
    prevScroll.current = scroll;

    const { start, end } = scrollRange;
    const ratio = (scroll - start) / (end - start);
    const clampedRatio = Math.max(0, Math.min(1, ratio));
    setProgress(clampedRatio);
  }, [scroll, scrollRange]);

  const parts = [
    {
      text: command,
      className: clsx({
        [styles.error]: state === 'error',
        [styles['highlight-success']]:
          state === 'success' || (scrollRange && scroll >= scrollRange.end),
      }),
    },
    {
      text: prefix ? ' ' + prefix : '',
      className: styles['highlight-prefix'],
    },
    {
      text: text ? ' ' + text : '',
      className: clsx({
        [styles['highlight-found']]: state === 'success',
      }),
    },
    {
      text: postfix,
      className: '',
    },
  ];

  if (!scrollRange) {
    return (
      <div className={styles['term-container']}>
        <p className={clsx(styles['term-cursor'])}>
          {'>'}{' '}
          {parts.map((part, index) => (
            <span key={index} className={part.className}>
              {part.text}
            </span>
          ))}
        </p>
      </div>
    );
  }

  const totalLength = parts.reduce((acc, part) => acc + part.text.length, 0);
  let visibleCount = 0;
  if (scrollDirection === 'down') {
    visibleCount = Math.floor(totalLength * progress);
  } else {
    visibleCount = totalLength - Math.floor(totalLength * (1 - progress));
  }

  let remaining = visibleCount;
  const displayedParts = parts.map((part) => {
    let partText = '';
    if (remaining > 0) {
      if (remaining >= part.text.length) {
        partText = part.text;
        remaining -= part.text.length;
      } else {
        partText = part.text.slice(0, remaining);
        remaining = 0;
      }
    }
    return { ...part, text: partText };
  });

  return (
    <div className={styles['term-container']}>
      <p className={clsx(styles['term-cursor'])}>
        {'>'}{' '}
        {displayedParts.map((part, index) => (
          <span key={index} className={part.className}>
            {part.text}
          </span>
        ))}
      </p>
    </div>
  );
};
