import { describe, expect, it } from 'vitest';
import { CraftingArea } from '../index';

describe('Craft/CraftingArea index export', () => {
  it('should export the CraftingArea component', () => {
    expect(CraftingArea).toBeDefined();
    expect(CraftingArea).toBeInstanceOf(Object);
  });
});
