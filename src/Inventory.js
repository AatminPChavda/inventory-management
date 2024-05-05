import React, { useEffect, useState } from "react";
import UserType from "./components/UserType/UserType";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryStats from "./components/InventoryStats/InventoryStats";
import { useDispatch } from "react-redux";
import { actionCreators } from "./store/index";

const Inventory = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionCreators.fetchItems());
    }, []);

    return (
        <div>
            <UserType />
            <InventoryStats />
            <InventoryList />
        </div>
    );
};

export default Inventory;
