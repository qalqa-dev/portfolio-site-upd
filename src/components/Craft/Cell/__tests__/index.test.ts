import { describe, expect, it } from 'vitest';
import { Cell } from '../index';

describe('Craft/Cell index export', () => {
  it('should export the Cell component', () => {
    expect(Cell).toBeDefined();
    expect(Cell).toBeInstanceOf(Object);
  });
});
