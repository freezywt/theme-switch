import React from 'react';

// import css
import '../../styles/components/Button.css';

// import image
import ButtonImage from '../../Assets/dark-mode.png';

const ThemeSwitcher = ({ toggleTheme }) => (
    <button onClick={toggleTheme} className="Button">
        <img src={ButtonImage} alt="Switch Theme" />
    </button>
);

export default ThemeSwitcher;