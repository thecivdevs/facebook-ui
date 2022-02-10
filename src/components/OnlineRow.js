import React from 'react';

export default function OnlineRow(props){

    let obj = props.obj;

    return(
        <div>
        <span>{obj.name}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{obj.isOnline?'Online':'Offline'}</span>
    </div>
    )
}