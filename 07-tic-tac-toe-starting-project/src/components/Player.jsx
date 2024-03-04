import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing === true) {
        playerName = <input type="text" required />;
    }

    return (
        <>
            <li>
                <span className="player">
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button className="edit" onClick={handleEditClick}>Edit</button>
            </li>
        </>
    );

    /*
    return (
        <>
            <li>
                <span className="player">
                { !isEditing ? <span className="player-name">{name}</span> : '' }
                { isEditing ? 
                    <span className="player-name">
                        <input type="text" value={name}/>
                    </span> 
                : ''}
                <span className="player-symbol">{symbol}</span>
                </span>
                <button className="edit" onClick={()=>{setIsEditing(!isEditing)}}>
                    { isEditing ? 'Save' : 'Edit' }
                </button>
            </li>
        </>
    );
    */
}