import { describe, expect, it } from 'vitest';
import { MacIconWrapper } from './index';

describe('MacIconWrapper index export', () => {
  it('should export the MacIconWrapper component', () => {
    expect(MacIconWrapper).toBeDefined();
    expect(MacIconWrapper).toBeInstanceOf(Object);
  });
});
