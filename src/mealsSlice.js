// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    // aici e fost skepsis, ca nu au definit de la inceput "type"
    { name: 'Breakfast', cost: 50, selected: false,type:'mealForPeople'},
    { name: 'High Tea', cost: 25, selected: false,type:'xxx'  },
    { name: 'Lunch', cost: 65, selected: false,type:'mealForPeople'},
    { name: 'Dinner', cost: 70, selected: false,type:'mealForPeople'},
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
        state[action.payload].selected=!state[action.payload].selected;
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
