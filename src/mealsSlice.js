// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    // aici e fost skepsis, ca nu au definit de la inceput "type"
    { name: 'Breakfast', cost: 50, selected: false,isMeal:true},
    { name: 'High Tea', cost: 25, selected: false,isMeal:false},
    { name: 'Lunch', cost: 65, selected: false,isMeal:true},
    { name: 'Dinner', cost: 70, selected: false,isMeal:true},
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected=!state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
