import { describe, expect, it } from 'vitest';
import { Dock } from '../index';

describe('Dock index export', () => {
  it('should export the Dock component', () => {
    expect(Dock).toBeDefined();
    expect(Dock).toBeInstanceOf(Object);
  });
});
