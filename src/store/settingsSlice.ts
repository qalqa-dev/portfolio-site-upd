import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';
type Language = 'en' | 'ru';

interface SettingsState {
  settingsState: boolean;
  theme: Theme;
  language: Language;
}

const initialState: SettingsState = {
  settingsState: false,
  theme: 'light',
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettingsState(state, action: PayloadAction<boolean>) {
      state.settingsState = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setSettingsState } =
  settingsSlice.actions;
export default settingsSlice.reducer;
