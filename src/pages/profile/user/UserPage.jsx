import styles from "./UserPage.module.css";
import { Link } from "react-router-dom";
import { Avatar } from "../../../components/avatar/Avatar";
import { useState } from "react";
import { Byline } from "../../../components/byline/Byline";

export const UserPage = () => {
    const title = "Users Profile";
    // const name = 'your name here';

    const [name, setName] = useState("Jaapie");
    const [editMode, setEditMode] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const edit = (event) => {
        setEditMode(true);
    };

    return (
        <div>
            <ul className={styles["profile-nav"]}>
                <li>
                    <Link to="/profile">Back to Profile</Link>
                </li>
            </ul>
            <h1>{title}</h1>
            <br />
            <p>Name: {name} </p>
            <p>Editmode = {editMode}</p>
            {editMode} ?{" "}
            <button type="submit" className="btn nav-btn-red">
                SIGN UP
            </button>{" "}
            : <button onClick={edit}>Change name</button>
            {/* {this.props.editMode ? Change your name here: <input type="text" name="title" onChange={handleChange} /> : null} */}
            <Avatar className={styles.avatar} />
            <Byline storeName="name" bylineText="edit your name" />
            <hr />
        </div>
    );
};
