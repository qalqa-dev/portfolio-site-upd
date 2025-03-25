import { render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { MockInstance, vi } from 'vitest';
import { ProgressBar } from './ProgressBar';
import styles from './ProgressBar.module.scss';

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

describe('ProgressBar', () => {
  beforeEach(() => {
    mockUseInView.mockImplementation(() => ({ ref: null, inView: false }));
  });

  beforeEach(() => {
    mockUseInView.mockReset();
    mockUseInView.mockReturnValue({ ref: vi.fn(), inView: false });
  });

  it('renders correct percentage', () => {
    render(<ProgressBar percentage={75} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('clamps percentage between 0-100', () => {
    const { rerender } = render(<ProgressBar percentage={150} />);
    expect(screen.getByText('100%')).toBeInTheDocument();

    rerender(<ProgressBar percentage={-50} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('animates when in view', () => {
    mockUseInView.mockReturnValue({ ref: vi.fn(), inView: true });
    render(<ProgressBar percentage={80} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 80%');
  });

  it('applies invert class when over 50%', () => {
    const { container } = render(<ProgressBar percentage={51} />);
    const percentageSpan = container.querySelector(`.${styles.percentage}`);
    expect(percentageSpan).toHaveClass(styles.invert);
  });

  it('updates background gradient correctly', () => {
    mockUseInView.mockReturnValue({ ref: vi.fn(), inView: true });
    render(<ProgressBar percentage={30} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle(
      'background: linear-gradient(to right, var(--color-sky) 0%, var(--color-mauve) 170%)',
    );
  });
});
