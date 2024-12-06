import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      const updatedData = state.data.filter((car) => car.id !== action.payload);

      state.data = updatedData;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
