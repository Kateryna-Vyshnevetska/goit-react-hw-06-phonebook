import {
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  ERROR_MESSAGE,
} from "../types";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

export const phoneBookReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case ADD_NEW_CONTACT:
      return {
        contacts: {
          filter: "",
          items: [...state.contacts.items, payload],
        },
      };
    case DELETE_CONTACT:
      return {
        contacts: {
          filter: "",
          items: [
            ...state.contacts.items.filter((elem) => {
              return elem.id !== payload;
            }),
          ],
        },
      };
    case FILTER_CONTACTS:
      return {
        contacts: {
          items: [...state.contacts.items],
          filter: payload,
        },
      };
    default:
      return state;
  }
};

export const errors = (state = "", { type, payload }) => {
  switch (type) {
    case ERROR_MESSAGE:
      return payload;
    case ADD_NEW_CONTACT:
      return "";
    case DELETE_CONTACT:
      return "";
    case FILTER_CONTACTS:
      return "";
    default:
      return state;
  }
};
