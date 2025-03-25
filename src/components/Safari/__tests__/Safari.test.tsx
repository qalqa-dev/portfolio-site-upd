import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Safari } from '../Safari';

describe('Safari Component', () => {
  it('renders all main UI elements', () => {
    render(<Safari />);

    // Check all header groups
    expect(screen.getByTestId('window-container')).toBeInTheDocument();
    expect(screen.getByTestId('share-container')).toBeInTheDocument();
    expect(screen.getByTestId('tab-bar')).toBeInTheDocument();
    expect(screen.getByTestId('actions-container')).toBeInTheDocument();
    expect(screen.getByTestId('address-bar')).toBeInTheDocument();

    // Verify window controls count
    const windowControls = screen
      .getByTestId('window-container')
      .querySelectorAll('[class*="window-control-btn"]');
    expect(windowControls.length).toBe(3);

    // Check address input
    const addressInput = screen.getByTestId('address-input');
    expect(addressInput).toBeInTheDocument();
    expect(addressInput).toHaveAttribute('readOnly');
  });

  it('displays correct openedLink prop', () => {
    render(<Safari openedLink="https://example.com" />);
    expect(screen.getByTestId('address-input')).toHaveValue(
      'https://example.com',
    );
  });

  it('renders children content when provided', () => {
    render(
      <Safari>
        <div data-testid="test-content">Content</div>
      </Safari>,
    );
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });

  it('address input shows default text when no openedLink', () => {
    render(<Safari />);
    expect(screen.getByTestId('address-input')).toHaveValue(
      'Search or enter website name',
    );
  });
});
