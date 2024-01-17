import React from 'react';
import styles from "../../styles/components/Navbar/BottomNavbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames/bind';

interface NavbarButtonProps {
  icon: IconDefinition;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const cx = classNames.bind(styles);

const NavbarButton = ({ icon, text, isActive, onClick }: NavbarButtonProps) => {
  
  return (
    <div
      className={cx([`${styles.btnWrapper} ${isActive ? styles.active : ''}`].join(' '))}
      onClick={onClick}
    >
      <div className={cx([`${styles.btnIcon} ${isActive ? styles.activeIcon : ''}`].join(' '))}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={cx([`${styles.btnText} ${isActive ? styles.activeText : ''}`].join(' '))}>
        {text}
      </div>
    </div>
  );
}

export default NavbarButton;