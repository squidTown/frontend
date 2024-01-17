import React from "react";
import classNames from "classnames/bind";
import styles from "../../styles/components/Button/Button.module.css"

const Button = (props: {
  size: string;
  txt: string;
  clickEvent: any;
  type: string;
}) => {
  const cx = classNames.bind(styles);

  return (
    <button
      className={cx(
        [`button-${props.size}`].join(""),
        [`button-${props.type}`].join(""),
        "btn",
      )}
      onClick={props.clickEvent}
    >
      {props.txt}
    </button>
  );
};

export default Button;
