export type Block = 'wood' | 'plank' | 'stick' | 'cobble' | 'ironOre';

export type Pickaxe =
  | 'woodenPickaxe'
  | 'stonePickaxe'
  | 'ironPickaxe'
  | 'diamondPickaxe'
  | 'netheritePickaxe';

export type CellType = {
  amount?: number;
  isSelected?: boolean;
};

export type PickaxeCell = CellType & {
  pickaxe?: Pickaxe;
};

export type FurnaceCell = CellType & {
  furnace?: boolean;
};

export type BlockCell = CellType & {
  contains?: Block;
};

export type CraftingResult =
  | { contains: Block; amount: number }
  | { pickaxe: Pickaxe; amount: number }
  | { furnace: true; amount: number }
  | object;
