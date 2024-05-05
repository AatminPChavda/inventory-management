import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store/index";
import "./EditPopup.scss";

const EditPopup = ({ item, index, onClose }) => {
    const dispatch = useDispatch();
    const [editedItem, setEditedItem] = useState({ ...item });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "price")
            setEditedItem({
                ...editedItem,
                [name]: value,
                ["value"]: `$${
                    parseFloat(value.replace("$", "")) * editedItem.quantity
                }`,
            });
        else if (name === "quantity")
            setEditedItem({
                ...editedItem,
                [name]: value,
                ["value"]: `$${
                    parseFloat(editedItem.price.replace("$", "")) * value
                }`,
            });
        else setEditedItem({ ...editedItem, [name]: value });
    };

    const handleSave = () => {
        dispatch(actionCreators.editItem(editedItem, index));
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Edit Product</h2>
                <h3>{editedItem.name}</h3>
                <form>
                    <div className="formInput">
                        <label>Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={editedItem.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <label>Price:</label>
                        <input
                            type="text"
                            name="price"
                            value={editedItem.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <label>Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={editedItem.quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <label>Value:</label>
                        <input
                            disabled
                            type="text"
                            name="value"
                            value={editedItem.value}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className="formButtons">
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                    <button type="button" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPopup;
