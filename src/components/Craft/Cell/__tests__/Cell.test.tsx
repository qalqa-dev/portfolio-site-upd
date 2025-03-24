import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Cell } from '../Cell';
import styles from '../Cell.module.scss';

vi.mock('./Cell.module.scss', () => ({
  default: {
    cell: 'mock-cell',
    selected: 'mock-selected',
    amount: 'mock-amount',
  },
}));

describe('Craft/Cell Component', () => {
  const mockImages = {
    block: '/clicker_blocks/wood.webp',
    pickaxe: '/clicker_tools/stonePickaxe.webp',
    furnace: '/clicker_tools/furnace.webp',
  };

  it('renders empty cell when no props provided', () => {
    const { container } = render(<Cell />);
    expect(container.querySelector('img')).toBeNull();
    expect(container.querySelector('span')).toBeNull();
  });

  it('renders block when contains prop is set', () => {
    render(<Cell contains="wood" />);
    const img = screen.getByAltText('block');
    expect(img).toHaveAttribute('src', mockImages.block);
  });

  it('renders pickaxe when pickaxe prop is set', () => {
    render(<Cell pickaxe="stonePickaxe" />);
    const img = screen.getByAltText('block');
    expect(img).toHaveAttribute('src', mockImages.pickaxe);
  });

  it('renders furnace when furnace prop is true', () => {
    render(<Cell furnace={true} />);
    const img = screen.getByAltText('block');
    expect(img).toHaveAttribute('src', mockImages.furnace);
  });

  it('shows amount when greater than 1', () => {
    render(<Cell contains="wood" amount={5} />);
    const amountElement = screen.getByTestId('amount');
    expect(amountElement).toHaveClass(styles.amount);
    expect(amountElement).toHaveTextContent('5');
  });

  it('applies selected class when isSelected is true', () => {
    const { container } = render(<Cell isSelected={true} />);
    expect(container.firstChild).toHaveClass(styles.selected);
  });

  it('doesnt show amount when 1 or less', () => {
    const { rerender } = render(<Cell contains="wood" amount={1} />);
    expect(screen.queryByTestId('amount')).toBeNull();

    rerender(<Cell contains="wood" amount={0} />);
    expect(screen.queryByTestId('amount')).toBeNull();
  });

  it('should not allow multiple content props simultaneously', () => {
    // Test contains + pickaxe
    expect(() => {
      // @ts-expect-error - Testing invalid prop combination
      render(<Cell contains="wood" pickaxe="stonePickaxe" />);
    }).toThrow('Only one of contains, pickaxe, or furnace can be provided');

    // Test contains + furnace
    expect(() => {
      // @ts-expect-error - Testing invalid prop combination
      render(<Cell contains="wood" furnace={true} />);
    }).toThrow('Only one of contains, pickaxe, or furnace can be provided');

    // Test pickaxe + furnace
    expect(() => {
      // @ts-expect-error - Testing invalid prop combination
      render(<Cell pickaxe="stonePickaxe" furnace={true} />);
    }).toThrow('Only one of contains, pickaxe, or furnace can be provided');

    // Test all three props
    expect(() => {
      // @ts-expect-error - Testing invalid prop combination
      render(<Cell contains="wood" pickaxe="stonePickaxe" furnace={true} />);
    }).toThrow('Only one of contains, pickaxe, or furnace can be provided');
  });
});
