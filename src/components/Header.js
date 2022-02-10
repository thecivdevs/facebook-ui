import React from 'react';

export default function Header() {

    let headerObject = {
        name: 'Snehil Saluja',
        friendRequests: 5,
        messages: 4,
        notifications: 3
    }

    return (
        <div id="header">
            <div>Facebook</div>
            <div id="headerRightContent">
            <div>{headerObject.name}</div>
            <div>&nbsp; Requests: {headerObject.friendRequests}</div>
            <div>&nbsp; Messages: {headerObject.messages}</div>
            <div>&nbsp; Notifications: {headerObject.notifications}</div>
            </div>
        </div>
    )
}