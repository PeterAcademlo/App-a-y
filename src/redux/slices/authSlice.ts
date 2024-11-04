import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../interface/InterData'; // Importa la interfaz desde su ruta

interface AuthState {
  user: UserData | null; // El usuario sigue la estructura definida en UserData o es null
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload; // Guardamos el usuario en el estado
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
