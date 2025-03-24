import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch } from './Switch';

describe('Switch Component', () => {
  afterEach(cleanup);

  it('renders with correct checked state', () => {
    const { rerender } = render(<Switch checked={false} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(<Switch checked={true} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('triggers onChange when clicked', async () => {
    const mockOnChange = vi.fn();
    render(<Switch checked={false} onChange={mockOnChange} />);

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('has proper accessibility attributes', () => {
    render(<Switch checked={true} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('aria-checked', 'true');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });
});
