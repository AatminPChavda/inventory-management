import {
    FETCH_ITEMS_SUCCESS,
    EDIT_ITEM,
    REMOVE_ITEM,
    DISABLE_ITEM,
    SET_ADMIN_MODE,
} from "../../appConstants";

const initialState = { isAdmin: false, items: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_MODE: return {
            ...state,
            isAdmin: action.payload
        }
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
            };
        case EDIT_ITEM:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload.index) {
                        return action.payload.newItem;
                    }
                    return item;
                }),
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(
                    (item, index) => index !== action.payload.index
                ),
            };
        case DISABLE_ITEM:
            return {
                ...state,
                items: state.items.map((item, index) => {
                    if (index === action.payload.index) {
                        return { ...item, disabled: !item.disabled };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default reducer;
