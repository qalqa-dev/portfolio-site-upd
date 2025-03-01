interface AsciiProgressBarProps {
  value: number;
}

export const AsciiBar = ({ value }: AsciiProgressBarProps) => {
  const width = 20;
  const filledLength = Math.round((value / 100) * width);
  const emptyLength = width - filledLength;

  const PALETTE = [
    { name: 'red', hex: '#f38ba8', r: 243, g: 139, b: 168 },
    { name: 'yellow', hex: '#f9e2af', r: 249, g: 226, b: 175 },
    { name: 'green', hex: '#a6e3a1', r: 166, g: 227, b: 161 },
  ];

  const filled = `${'█'.repeat(filledLength)}`;
  const empty = '░'.repeat(emptyLength);

  const barColor = PALETTE.find((color) => {
    switch (color.name) {
      case 'red':
        return value < 31;
      case 'yellow':
        return value >= 31 && value < 80;
      case 'green':
        return value >= 80;
    }
  });

  return (
    <>
      <pre style={{ color: barColor?.hex, width: 271 }}>
        {`${filled}${empty} `}
        <span>{value}%</span>
      </pre>
    </>
  );
};
