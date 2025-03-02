import { JSX, useEffect, useRef, useState } from 'react';

const ASCII_CHARS = 'QWERTYUIOP{}AZSXDFGHJKL:ZXCVBNM<>>?@%#*+=-:. ';

interface AsciiArtProps {
  imageSrc: string;
  scale?: number;
  size?: number;
  mirror?: boolean;
}

export const AsciiArt = ({
  imageSrc,
  scale = 0.1,
  size = 12,
  mirror = false,
}: AsciiArtProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [asciiRows, setAsciiRows] = useState<JSX.Element[]>([]);
  const [asciiWidth, setAsciiWidth] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const width = Math.floor(img.width * scale);
      const height = Math.floor(img.height * scale);
      setAsciiWidth(width);
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height).data;

      const rows: JSX.Element[] = [];

      for (let y = 0; y < height; y++) {
        const spans: JSX.Element[] = [];
        let currentColor: string | null = null;
        let currentText = '';

        for (let x = 0; x < width; x++) {
          const index = (y * width + x) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const a = imageData[index + 3];

          let asciiChar: string;
          let color: string;

          if (a === 0) {
            asciiChar = ' ';
            color = 'transparent';
          } else {
            const brightness = (r + g + b) / 3;
            const charIndex = Math.floor(
              (brightness / 255) * (ASCII_CHARS.length - 1),
            );
            asciiChar = ASCII_CHARS[charIndex];
            color = `rgb(${r}, ${g}, ${b})`;
          }

          if (color === currentColor) {
            currentText += asciiChar;
          } else {
            if (currentText !== '') {
              spans.push(
                <span
                  key={x - currentText.length}
                  style={{ color: currentColor || undefined }}
                >
                  {currentText}
                </span>,
              );
            }
            currentColor = color;
            currentText = asciiChar;
          }
        }

        if (currentText !== '') {
          spans.push(
            <span key={width} style={{ color: currentColor || undefined }}>
              {currentText}
            </span>,
          );
        }

        rows.push(
          <div key={y} style={{ lineHeight: '0.6', fontFamily: 'monospace' }}>
            {spans}
          </div>,
        );
      }

      setAsciiRows(rows);
    };
  }, [imageSrc, scale]);

  return (
    <div className="flex w-fit">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div
        style={{
          width: asciiWidth ? `${asciiWidth}ch` : 'auto',
          whiteSpace: 'pre',
          fontSize: size,
          overflow: 'hidden',
          transform: mirror ? 'scaleX(-1)' : 'scaleX(1)',
        }}
      >
        {asciiRows}
      </div>
    </div>
  );
};
