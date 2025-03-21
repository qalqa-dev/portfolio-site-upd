import styles from './CraftCell.module.scss';

type Recourse = 'wood' | 'coal' | 'iron';
export interface Cell {
  contains?: Recourse;
}
export const CraftCell = ({ contains }: Cell) => {
  return <div className={styles.cell}>{contains}</div>;
};
