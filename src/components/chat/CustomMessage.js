/*
Author:Gurtej Singh
Purpose :Custom message bubble design
Date: 20th April 2018
*/
import React from "react";
import { View } from "react-native";
import { Bubble } from "react-native-gifted-chat";
import Constants from "../../constants"
const CustomMessage = props => {
  const { wrapperStyle, textStyle } = styles;
  return (
    <Bubble {...props} wrapperStyle={wrapperStyle} textStyle={textStyle} />
  );
};

const styles = {
  wrapperStyle: {
    left: {
      backgroundColor:Constants.Colors.offwhite
    },
    right: {
      backgroundColor:Constants.Colors.Primary
    }
  },
  textStyle: {
    right: {
      color: Constants.Colors.White
    },
    left: {
      color: Constants.Colors.Black
    }
  }
};

export { CustomMessage };
