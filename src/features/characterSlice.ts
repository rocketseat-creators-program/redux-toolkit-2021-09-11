import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Character } from "../types/charactersTypes";

const REDUCER_NAME = "characters";
const BASE_URL = `https://rickandmortyapi.com/api/`;
const FETCH_CHARACTERS = "characters/fetchCharacters";

export enum Status {
  idle = "idle",
  failed = "failed",
  pending = "pending",
  succeeded = "succeeded",
}

interface CharacterState {
  characters: Character[];
  status: Status;
}

const initialState = {
  characters: [],
  status: Status.idle,
} as CharacterState;

export const fetchCharacters = createAsyncThunk(FETCH_CHARACTERS, async () => {
  const response = await fetch(`${BASE_URL}/character`);
  return await response.json();
});

const charactersSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      action.payload;
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = Status.pending;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload.results;
        state.status = Status.succeeded;
      });
  },
});

export const statusSelector = (state: RootState) => state.characterSlice.status;
export const charactersSelector = (state: RootState) =>
  state.characterSlice.characters;

export const { setCharacters, addCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
