import React from 'react';
import './App.css';

import Slideshow from './components/slideshow/slideshow';

const collection = [
    { src: '/images/01.jpg', caption: "Caption one" },
    { src: '/images/02.jpg', caption: "Caption two" },
    { src: '/images/03.jpg', caption: "Caption three" },
    { src: '/images/04.jpg', caption: "Caption four" },
    { src: '/images/05.jpg', caption: "Caption five" },
    { src: '/images/06.jpg', caption: "Caption six" },
];

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Slideshow
                    input={collection}
                    ratio={`3:2`}
                    mode={`automatic`}
                    timeout={`3000`}
                />
            </div>
        );
    }
}