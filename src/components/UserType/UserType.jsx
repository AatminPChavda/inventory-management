import React from "react";
import "./UserType.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store";

const UserType = () => {

  const dispatch = useDispatch();
  const isAdmin = useSelector(state => state.inventory.isAdmin);

    const handleToggle = () => {
        dispatch(actionCreators.setAdminMode(!isAdmin));
    };

    return (
        <div className="userType">
            <span>Admin</span>
            <label className="switch">
                <input type="checkbox" checked={isAdmin}
                    onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <span>User</span>
        </div>
    );
};

export default UserType;
