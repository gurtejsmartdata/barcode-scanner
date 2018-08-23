import React, { Element } from "react";
import { Scene, Router, Modal, Reducer } from "react-native-router-flux";
import { StatusBar } from "react-native";
import BarCodeScreen from "../containers/barcode";
import Constants from "../constants";
class Routes extends React.Component {
  render(): Element<*> {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="barcode"
            title="Scan barcode"
            initial
            component={BarCodeScreen}
            navigationBarStyle={styles.navBar}
          />
        </Scene>
      </Router>
    );
  }
}
const styles = {
  navBar: {
    backgroundColor: Constants.Colors.Primary
  }
};
export default Routes;
