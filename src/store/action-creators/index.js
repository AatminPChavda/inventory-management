import {
    SET_ADMIN_MODE,
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    EDIT_ITEM,
    REMOVE_ITEM,
    DISABLE_ITEM,
} from "../../appConstants";

export const setAdminMode = (val) => ({
    type: SET_ADMIN_MODE,
    payload: val,
});

export const editItem = (newItem, index) => ({
    type: EDIT_ITEM,
    payload: { newItem, index },
});

export const removeItem = (index) => ({
    type: REMOVE_ITEM,
    payload: { index },
});

export const disableItem = (index) => ({
    type: DISABLE_ITEM,
    payload: { index },
});

export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
});

export const fetchItemsFailure = (error) => ({
    type: FETCH_ITEMS_FAILURE,
    payload: error,
});

export const fetchItems = () => {
    return async (dispatch) => {
        dispatch(fetchItemsRequest());
        try {
            const response = await fetch(
                "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            dispatch(fetchItemsSuccess(data));
        } catch (error) {
            dispatch(fetchItemsFailure(error.message));
        }
    };
};
