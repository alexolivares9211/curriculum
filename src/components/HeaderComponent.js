import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';

const HeaderComponent = () => {
    const [screenColor, setScreenColor] = useState({
        'background-color': '#ffffff',
    });
    const [textButton, setTextButton] = useState('modo oscuro');
    const [fontColor, setFontColor] = useState('#ffffff');
    const [check, setCheck] = useState(false);

    const onChangeColor = (e) => {
        e.preventDefault();

        if (check) {
            setFontColor('#000000');
            setTextButton('normal');
            console.log(textButton);
            console.log(fontColor);
        }
    };

    return (
        <Container fluid className="p-c">
            <h1>Curriculum</h1>
            <h1>Alejandro Muñoz Olivares</h1>
        </Container>
    );
};

export default HeaderComponent;