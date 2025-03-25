import { cleanup, render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { Mock, afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Skeleton } from '../Skeleton/Skeleton';
import LazyLoad from './LazyLoader';

// Mock the Intersection Observer hook and Skeleton component
vi.mock('react-intersection-observer');
vi.mock('../Skeleton/Skeleton');

const mockUseInView = useInView as Mock;
const mockSkeleton = Skeleton as Mock;

describe('LazyLoad Component', () => {
  beforeEach(() => {
    mockSkeleton.mockImplementation(({ height }) => (
      <div data-testid="skeleton" style={{ height: `${height}px` }} />
    ));
  });

  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders skeleton when not in view', () => {
    mockUseInView.mockReturnValue({ ref: vi.fn(), inView: false });
    render(<LazyLoad>Test Content</LazyLoad>);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('renders children when in view', () => {
    mockUseInView.mockReturnValue({ ref: vi.fn(), inView: true });
    render(<LazyLoad>Test Content</LazyLoad>);

    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument();
  });

  it('passes threshold prop to useInView', () => {
    const threshold = 0.5;
    render(<LazyLoad threshold={threshold}>Content</LazyLoad>);

    expect(mockUseInView).toHaveBeenCalledWith({
      threshold,
      triggerOnce: false,
    });
  });

  it('respects triggerOnce prop', () => {
    render(<LazyLoad triggerOnce>Content</LazyLoad>);

    expect(mockUseInView).toHaveBeenCalledWith(
      expect.objectContaining({
        triggerOnce: true,
      }),
    );
  });
});
