import { fireEvent, render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { describe, expect, it, MockInstance, vi } from 'vitest';
import { Clicker } from '..';

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

describe('Clicker Component', () => {
  beforeEach(() => {
    mockUseInView.mockImplementation(() => ({ ref: null, inView: false }));
  });

  const mockProps = {
    clickerGlowSize: 100,
    activeBlock: 'wood',
    blockArray: ['wood', 'cobble'],
    furnace: true,
    pickaxe: 'woodenPickaxe',
    handleClickBlock: vi.fn(),
    changeActiveBlock: vi.fn(),
  };

  it('renders with basic props', () => {
    render(<Clicker {...mockProps} />);
    expect(screen.getByAltText('block')).toBeInTheDocument();
    expect(screen.getByAltText('furnace')).toBeInTheDocument();
    expect(screen.getByAltText('woodenPickaxe')).toBeInTheDocument();
  });

  it('calls handleClickBlock when block is clicked', () => {
    render(<Clicker {...mockProps} />);
    fireEvent.click(screen.getByAltText('block'));
    expect(mockProps.handleClickBlock).toHaveBeenCalled();
  });

  it('shows navigation arrows when multiple blocks available', () => {
    render(<Clicker {...mockProps} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('calls changeActiveBlock when arrows are clicked', () => {
    render(<Clicker {...mockProps} />);
    const arrows = screen.getAllByRole('listitem');
    fireEvent.click(arrows[0]);
    expect(mockProps.changeActiveBlock).toHaveBeenCalledWith('back');
    fireEvent.click(arrows[1]);
    expect(mockProps.changeActiveBlock).toHaveBeenCalledWith('forward');
  });
});
