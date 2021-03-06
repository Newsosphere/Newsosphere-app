import React, { useState, useEffect } from "react";
import requiredItems from "../../Helpers/requiredItems";

// Styles
import './RequiredItems.css'

const RequiredItems = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(requiredItems[props.results.weather[0].main]);
    }, [props.results.weather]);

    return (
        <div className="required-things-container">
            {Object.keys(items).length > 0 && (
                <>
                    <h2>Don't forget to bring your</h2>
                    <div className="required-things">
                        {Object.keys(items).map((item, i) => (
                            <div className="card-item">
                                <div className="face face1">
                                    <div className="content">
                                        <div className="icon">
                                            <img src={items[item]} />
                                        </div>
                                    </div>
                                </div>
                                <div className="face face2">
                                    <div className="content">
                                        <h3>{item}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default RequiredItems;