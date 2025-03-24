import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark' | 'auto';

export interface SettingsState {
  settingsState: boolean;
  smoothScroll: boolean;
  theme: Theme;
  language: string;
  wallpapers?: string;
}

const getInitialSmoothScroll = (): boolean => {
  const savedSmoothScroll = localStorage.getItem('smoothScroll');
  return savedSmoothScroll === 'true';
};

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  if (savedTheme) return savedTheme;
  return 'auto';
};

const initialState: SettingsState = {
  settingsState: false,
  smoothScroll: getInitialSmoothScroll(),
  theme: getInitialTheme(),
  language: localStorage.getItem('i18nextLng') || 'en-US',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettingsState(state, action: PayloadAction<boolean>) {
      state.settingsState = action.payload;
    },
    setSmoothScroll(state, action: PayloadAction<boolean>) {
      state.smoothScroll = action.payload;
      localStorage.setItem('smoothScroll', action.payload.toString());
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      if (action.payload === 'auto') return;
      document.documentElement.setAttribute('data-theme', action.payload);
    },
    setThemeWithoutStorage: (_state, action: PayloadAction<Theme>) => {
      document.documentElement.setAttribute('data-theme', action.payload);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
      document.documentElement.setAttribute('data-theme', state.theme);
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setWallpapers: (state, action: PayloadAction<string>) => {
      state.wallpapers = action.payload;
    },
  },
});

export const {
  setSettingsState,
  setTheme,
  setThemeWithoutStorage,
  toggleTheme,
  setLanguage,
  setSmoothScroll,
  setWallpapers,
} = settingsSlice.actions;
export default settingsSlice.reducer;
