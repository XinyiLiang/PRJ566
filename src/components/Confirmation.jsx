import React from 'react';
import {Toast} from 'react-bootstrap';


export function Confirmation ({toggle}){

    return (
        <Toast onClick = {() => toggle (false)}>
            <Toast.Header>
                <strong className = "mr-auto"> Your Game</strong>
                <small> just now</small>
            </Toast.Header>
            <Toast.Boddy>
                You are Registered for the game
            </Toast.Boddy>
        </Toast>

    );
}