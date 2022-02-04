import React from 'react';
import './CustomButton.styles.scss'

function CustomButton({children,isInverted,isGoogleSignIn,...otherProps}) {
  return <div style={{display: 'inline-block'}}>
      <button className={` ${isInverted?"inverted":''} ${isGoogleSignIn? "google_signIn " : ""}custom-button`} {...otherProps}>{children}</button>
  </div>;
}

export default CustomButton;
