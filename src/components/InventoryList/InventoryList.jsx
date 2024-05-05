import React, { useState } from "react";
import "./InventoryList.scss";
import Actions from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store";
import { bindActionCreators } from "redux";
import EditPopup from "../EditPopup/EditPopup";

const InventoryList = () => {
    const dispatch = useDispatch();
    const inventoryItems = useSelector((state) => state.inventory.items);
    const { removeItem, disableItem } = bindActionCreators(
        actionCreators,
        dispatch
    );

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState(null);

    const handleDelete = (index) => {
        removeItem(index);
    };

    const handleEdit = (index) => {
        setEditItemIndex(index);
        togglePopup();
    };

    const handleDisable = (index) => {
        disableItem(index);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className="inventoryList">
            {isPopupOpen && (
                <EditPopup
                    item={inventoryItems[editItemIndex]}
                    index={editItemIndex}
                    onClose={togglePopup}
                />
            )}
            <table className="table">
                <tr className="tableRow">
                    <th className="tableHeading">Name</th>
                    <th className="tableHeading">Category</th>
                    <th className="tableHeading">Price</th>
                    <th className="tableHeading">Quantity</th>
                    <th className="tableHeading">Value</th>
                    <th className="tableHeading">Actions</th>
                </tr>
                {inventoryItems.length > 0 &&
                    inventoryItems.map((val, index) => {
                        return (
                            <tr key={index} className="tableRow">
                                <td className="tableData">{val.name}</td>
                                <td className="tableData">{val.category}</td>
                                <td className="tableData">{val.price}</td>
                                <td className="tableData">{val.quantity}</td>
                                <td className="tableData">{val.value}</td>
                                <td className="tableData">
                                    <Actions
                                        item={val}
                                        onDelete={() => handleDelete(index)}
                                        onEdit={() => handleEdit(index)}
                                        onDisable={() => handleDisable(index)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
            </table>
        </div>
    );
};

export default InventoryList;
