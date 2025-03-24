import { fireEvent, render, screen } from '@testing-library/react';
import { useInView } from 'react-intersection-observer';
import { describe, expect, it, MockInstance, vi } from 'vitest';
import { CraftingArea } from '../CraftingArea';

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

describe('Craft/CraftingArea', () => {
  beforeEach(() => {
    mockUseInView.mockImplementation(() => ({ ref: null, inView: false }));
  });

  const mockProps = {
    craftingTable: Array(3).fill(Array(3).fill({ contains: null })),
    inventory: Array(3).fill(Array(3).fill({ contains: 'wood', amount: 1 })),
    craftingResult: { contains: null },
    placeSelectedItemOnCraftingTable: vi.fn(),
    takeCraftedItem: vi.fn(),
    handleClickOnCellInInventory: vi.fn(),
    validateSelected: vi.fn(),
  };

  it('should render component', () => {
    render(<CraftingArea {...mockProps} />);
    expect(screen.getByText('Craft')).toBeInTheDocument();
  });

  it('should render section headers', () => {
    render(<CraftingArea {...mockProps} />);
    expect(screen.getByText('Crafting Table')).toBeInTheDocument();
    expect(screen.getByText('Inventory')).toBeInTheDocument();
  });

  it('should render 3x3 crafting table', () => {
    render(<CraftingArea {...mockProps} />);
    const craftingTable = screen.getByText('Crafting Table').parentElement;
    expect(
      craftingTable?.querySelectorAll('[data-testid="crafting-table-row"]'),
    ).toHaveLength(3);
  });

  it('should call placeSelectedItemOnCraftingTable when clicking on crafting table cell', () => {
    render(<CraftingArea {...mockProps} />);
    const craftingCells = document.querySelectorAll(
      '[data-testid="crafting-table-row"] div',
    );
    fireEvent.mouseDown(craftingCells[0]);
    expect(mockProps.placeSelectedItemOnCraftingTable).toHaveBeenCalledWith(
      0,
      0,
      { contains: null },
    );
  });

  it('should call handleClickOnCellInInventory when clicking on inventory cell', () => {
    render(<CraftingArea {...mockProps} />);
    const inventoryCells = document.querySelectorAll(
      '[data-testid="inventory-row"] div',
    );
    fireEvent.click(inventoryCells[0]);
    expect(mockProps.handleClickOnCellInInventory).toHaveBeenCalledWith(0, 0, {
      contains: 'wood',
      amount: 1,
    });
  });

  it('should call takeCraftedItem when clicking on crafting result', () => {
    render(<CraftingArea {...mockProps} />);
    const resultCell = screen.getByTestId('crafting-result');
    fireEvent.click(resultCell);
    expect(mockProps.takeCraftedItem).toHaveBeenCalled();
  });

  it('should call placeSelectedItemOnCraftingTable when dragging mouse', () => {
    render(<CraftingArea {...mockProps} />);
    const craftingCells = document.querySelectorAll(
      '[data-testid="crafting-table-row"] div',
    );
    fireEvent.mouseEnter(craftingCells[0], { buttons: 1 });
    expect(mockProps.placeSelectedItemOnCraftingTable).toHaveBeenCalledWith(
      0,
      0,
      { contains: null },
    );
  });

  it('should display book icon in header', () => {
    render(<CraftingArea {...mockProps} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should correctly display the amount of items in inventory', () => {
    render(
      <CraftingArea
        {...{ ...mockProps, inventory: [[{ contains: 'wood', amount: 5 }]] }}
      />,
    );
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
