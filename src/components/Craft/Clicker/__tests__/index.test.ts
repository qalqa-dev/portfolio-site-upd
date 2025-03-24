import { describe, expect, it } from 'vitest';
import { Clicker } from '../index';

describe('Craft/Clicker index export', () => {
  it('should export the Clicker component', () => {
    expect(Clicker).toBeDefined();
    expect(Clicker).toBeInstanceOf(Object);
  });
});
