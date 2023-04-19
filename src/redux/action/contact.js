// ../redux/action/contact.js

import Axios from 'axios';
import { CONTACT_LOADING, CONTACT_SUCCESS, CONTACT_ERROR } from './types';

// definir la acción para actualizar un contacto
export const updateContact = (contact) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CONTACT_LOADING });
            const response = await Axios.put(`http://localhost:5000/api/contacts/${contact.id}`, contact);
            dispatch({
                type: CONTACT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: CONTACT_ERROR,
                payload: error.message,
            });
        }
    };
};
