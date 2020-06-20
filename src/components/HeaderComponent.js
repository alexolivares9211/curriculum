import React, {useState} from 'react';
import { Button } from 'react-bootstrap';

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
        <div>
            <checkbox onChange={onChangeColor} value={check}>{textButton}</checkbox>
        </div>
    );
};

export default HeaderComponent;