import {
  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  ERROR_MESSAGE,
} from "../types";

export const newContactAction = (contact) => ({
  type: ADD_NEW_CONTACT,
  payload: contact,
});

export const deleteContactAction = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const filterContactsAction = (value) => ({
  type: FILTER_CONTACTS,
  payload: value,
});

export const error = (value) => ({
  type: ERROR_MESSAGE,
  payload: value,
});
