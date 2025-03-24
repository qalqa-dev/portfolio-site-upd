import { render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { beforeEach, describe, expect, it, MockInstance, vi } from 'vitest';
import { AppearingText } from '../AppearingText';
import styles from '../AppearingText.module.scss';

class IntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: class MockIntersectionObserver {
      constructor() {
        return new IntersectionObserver();
      }
    },
  });
});

vi.mock('react-intersection-observer', () => ({
  useInView: vi.fn(),
}));

const mockUseInView = vi.mocked(useInView) as MockInstance;

describe('AppearingText', () => {
  beforeEach(() => {
    mockUseInView.mockImplementation(() => ({ ref: null, inView: false }));
  });

  it('renders text content correctly', () => {
    render(<AppearingText text="Test Text" />);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('applies fade-in class when in view', () => {
    mockUseInView.mockReturnValue({ inView: true });
    const { container } = render(<AppearingText text="Test Text" />);
    const textElement = container.querySelector(`.${styles['appearing-text']}`);
    expect(textElement?.classList.contains(styles['fade-in'])).toBe(true);
  });

  it('shows/hides appealer div based on visibility', () => {
    const { rerender, container } = render(<AppearingText text="Test Text" />);
    const appealer = container.querySelector(`.${styles['appealer']}`);

    expect(appealer).toHaveStyle('display: none');

    mockUseInView.mockReturnValue({ inView: true });
    rerender(<AppearingText text="Test Text" />);
    expect(appealer).toHaveStyle('display: block');
  });
});
