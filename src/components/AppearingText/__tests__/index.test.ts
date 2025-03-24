import { describe, expect, it } from 'vitest';
import { AppearingText } from '../index';

describe('AppearingText index export', () => {
  it('should export the AppearingText component', () => {
    expect(AppearingText).toBeDefined();
    expect(AppearingText).toBeInstanceOf(Object);
  });
});
