import React from 'react';
import { useEffect } from 'react';
// import Try from '../style/TryOn.style.css';

import {
    IntializeEngine, IntializeThreejs
} from '../Render/Render.js';


export const TryOn = () => {

    useEffect(() => {

        async function init() {
            var video = document.getElementById('tryonvideo');

            await navigator.mediaDevices.getUserMedia({
                'audio': false,
                'video': {
                    facingMode: 'user',
                }
            }).then(stream => {
                video.srcObject = stream;
            });

            video.oncanplay = () => {
                video.play();
                IntializeThreejs("purple1");
                IntializeEngine();
            }
        }

        init();

        return () => {

        };
    }, []);

    return (
        <div className="row arcomp">
            <div id="threejsContainer">
                <video id="tryonvideo"></video>
            </div>
        </div>

    )
}