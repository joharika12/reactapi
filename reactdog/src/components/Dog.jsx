import './Dog.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dog() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://dog.ceo/api/breeds/image/random/10')
            .then((res) => {
                setData(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        
        <div className='Dog'>
            <h1>Random Dogs</h1>
            {
                data.map((obj, index) => {
                    return (
                        <div className='Dog' key={index}>
                            <img src={obj} alt="Dog" />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Dog;