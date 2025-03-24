interface AsciiProgressBarProps {
  value: number;
}

export const AsciiBar = ({ value }: AsciiProgressBarProps) => {
  const width = 20;
  const filledLength = Math.round((value / 100) * width);
  const emptyLength = width - filledLength;

  const filled = `${'█'.repeat(filledLength)}`;
  const empty = '░'.repeat(emptyLength);

  const barColor = () => {
    switch (true) {
      case value < 30:
        return 'red';
      case value < 70:
        return 'yellow';
      default:
        return 'green';
    }
  };

  return (
    <>
      <pre
        className={`w-fit md:w-[271px] `}
        style={{ color: `var(--color-${barColor()})` }}
      >
        <span>{`${filled}${empty} `}</span>
        <span>{value}%</span>
      </pre>
    </>
  );
};
