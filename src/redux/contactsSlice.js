import { createSlice } from "@reduxjs/toolkit";
import data from "../contactsData.json";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "items",
  initialState: { data },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.data = state.data.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.data;
