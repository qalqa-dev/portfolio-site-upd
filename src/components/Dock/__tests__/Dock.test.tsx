import settingsReducer, { SettingsState } from '@/store/settingsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { Dock } from '../Dock';

// Mock resize observer
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key) => {
      const mockStorage = {
        smoothScroll: 'true',
        theme: 'light',
        i18nextLng: 'en-US',
      };
      return mockStorage[key as keyof typeof mockStorage] || null;
    }),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  });
});

const preloadedState: { settings: SettingsState } = {
  settings: {
    settingsState: false,
    smoothScroll: true,
    theme: 'light',
    language: 'en-US',
    wallpapers: undefined,
  },
};

const mockStore = configureStore({
  reducer: {
    settings: settingsReducer,
  },
  preloadedState,
});

vi.mock('react-redux', async () => {
  const actual = await vi.importActual<object>('react-redux');
  return {
    ...actual,
    useDispatch: () => vi.fn(),
  };
});

describe('Dock Component', () => {
  test('renders dock with app icons', () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <Dock />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('dock')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(4);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Terminal')).toBeInTheDocument();
  });

  test('updates dock offset on hover', () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <Dock />
        </Router>
      </Provider>,
    );

    const dockElement = screen.getByTestId('dock');
    const firstAppItem = screen.getAllByRole('listitem')[0];

    fireEvent.mouseMove(firstAppItem, { clientX: 100 });

    expect(dockElement.style.getPropertyValue('--dock-offset-left')).toMatch(
      /px/,
    );
    expect(dockElement.style.getPropertyValue('--dock-offset-right')).toMatch(
      /px/,
    );
  });
  //потом сюда вернусь пока в падлу пизда 75% норм
});
