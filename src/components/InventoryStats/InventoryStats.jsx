import React from "react";
import "./InventoryStats.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CategoryIcon from "@material-ui/icons/Category";
import { useSelector } from "react-redux";

const InventoryStats = () => {
    const inventoryItems = useSelector((state) => state.inventory.items);

    // Calculate total number of products (only enabled)
    const totalProducts = inventoryItems.reduce((acc, item) => {
        return !item.disabled ? acc + 1 : acc;
    }, 0);

    // Calculate total value
    const totalValue = inventoryItems.reduce((acc, item) => {
        return !item.disabled
            ? acc + parseFloat(item.price.replace("$", "")) * item.quantity
            : acc;
    }, 0);

    // Calculate out of stock quantity
    const outOfStockQuantity = inventoryItems.reduce((acc, item) => {
        return !item.disabled && item.quantity === 0 ? acc + 1 : acc;
    }, 0);

    // Calculate different number of categories
    const categories = new Set(
        inventoryItems
            .filter((item) => !item.disabled)
            .map((item) => item.category)
    );
    const numberOfCategories = categories.size;

    const displayStat = (Icon, text, value) => {
        return (
            <div className="statCon">
                <Icon fontSize="large" />
                <div className="statDetail">
                    <span className="text">{text}</span>
                    <span className="count">{value}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="invertoryStats">
            <span className="title">Inventory Stats</span>
            <div className="statWrapper">
                {displayStat(ShoppingCartIcon, "Total Product", totalProducts)}
                {displayStat(AttachMoneyIcon, "Total Store Value", totalValue)}
                {displayStat(
                    RemoveShoppingCartIcon,
                    "Out Of Stock",
                    outOfStockQuantity
                )}
                {displayStat(
                    CategoryIcon,
                    "No of Categories",
                    numberOfCategories
                )}
            </div>
        </div>
    );
};

export default InventoryStats;
