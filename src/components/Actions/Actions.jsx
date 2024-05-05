import React from "react";
import { useSelector } from "react-redux";
import "./Actions.scss";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import DeleteIcon from "@material-ui/icons/Delete";
import { green, purple, red, grey } from "@material-ui/core/colors";

const Actions = ({ item, onDelete, onEdit, onDisable }) => {
    const isAdmin = useSelector((state) => state.inventory.isAdmin);
    const isRowDisabled = !!item.disabled;

    if (!isAdmin)
        return (
            <div className="actions">
                <CreateIcon
                    onClick={!isRowDisabled ? onEdit : null}
                    style={{ color: !isRowDisabled ? green[500] : grey[500] }}
                />
                {isRowDisabled ? (
                    <VisibilityOffIcon
                        onClick={onDisable}
                        style={{ color: purple[500] }}
                    />
                ) : (
                    <VisibilityIcon
                        onClick={onDisable}
                        style={{ color: purple[500] }}
                    />
                )}
                <DeleteIcon onClick={onDelete} style={{ color: red[500] }} />
            </div>
        );
    else
        return (
            <div className="actions">
                <CreateIcon style={{ color: grey[500] }} />
                <VisibilityIcon style={{ color: grey[500] }} />
                <DeleteIcon style={{ color: grey[500] }} />
            </div>
        );
};

export default Actions;
