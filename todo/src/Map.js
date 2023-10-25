import React from 'react'
import './Map.css'
const userNames = ['Jesse', 'Tom', 'Anna', 'ashif', 'afnan', 'rahul', 'abhinan']

export default function Map() {
    return (
        <div>

            {userNames.map(hai => <div className='ha'>{hai}</div>)}

        </div>
    );
}
