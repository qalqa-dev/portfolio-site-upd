import styles from './CraftCell.module.scss';

export type Block = 'wood' | 'coal' | 'iron';
export interface Cell {
  contains?: Block;
  amount?: number;
}
export const CraftCell = ({ contains, amount }: Cell) => {
  return (
    <div className={styles.cell}>
      {contains && (
        <img src={`/src/assets/clicker_blocks/${contains}.png`} alt="block" />
      )}
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};
