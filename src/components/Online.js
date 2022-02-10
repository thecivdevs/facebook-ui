import React from 'react';
import OnlineRow from './OnlineRow';

export default function Online() {

    let peopleArray = [
        {
            name: 'Snehil',
            isOnline: true
        },
        {
            name: 'Tejas',
            isOnline: true
        },
        {
            name: 'Neeraj',
            isOnline: true
        },
        {
            name: 'Abhay',
            isOnline: true
        },
        {
            name: 'Aman',
            isOnline: true
        },
        
    ]

    return (
        <div>
            <div>Online Friends</div>
            <div>
                {
                    peopleArray.map(
                        function(obj) {
                            return(
                               <OnlineRow obj = {obj} />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}