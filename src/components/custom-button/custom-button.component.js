import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <CustomButtonContainer className="custom-button" {...otherButtonProps}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
