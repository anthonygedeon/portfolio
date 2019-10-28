import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div>
                <svg width="99" height="100" viewBox="0 0 99 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 98.6554H33.1149V96.3615V93.4122H25.9054L30.8209 70.473H54.7432L61.2973 93.4122H54.7432V98.6554H98V93.4122H90.7905L57.6926 1L39.9966 3.62162L7.55405 94.0676H1V98.6554Z" stroke="white"/>
                    <path d="M53.1048 64.5743H31.8041L40.9798 20.0068L53.1048 64.5743Z" stroke="white"/>
                </svg>
            </div>
        );
    }
}

export default Loader