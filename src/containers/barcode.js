import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { RNCamera } from "react-native-camera";
import * as Act from "../actions";
import { bindActionCreators } from "redux";
const { height, width } = Dimensions.get("window");

class BarcodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrcode: "",
      scanCount: false,
      env: null
    };
    this.onBarCodeRead = this.onBarCodeRead.bind(this);
  }

  componentDidMount() {
    if (this.props) {
      console.log("thuis.props", this.props);
    }
    if (this.props.loginReducer) {
      this.setState({ env: this.props.loginReducer.env.selectedEnv });
    }
  }

  onBarCodeRead(e) {
    alert("here");
    this.setState({ qrcode: e.data, scanCount: true });
    console.log(e);
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.scanCount ? (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            onBarCodeRead={this.onBarCodeRead}
            style={{ flex: 1 }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
          >
            <View
              style={{
                flex: 1
              }}
            >
              <View style={{ flex: 0.2 }} />
              <View style={{ flex: 0.6, flexDirection: "row" }}>
                <View style={{ flex: 0.1 }} />
                <View
                  style={{
                    flex: 0.8,
                    justifyContent: "center",
                    alignItems: "center",
                    width: width,
                    height: "100%",
                    borderWidth: 5,
                    borderColor: "#66CC33",
                    overflow: "hidden"
                  }}
                >
                  <View
                    style={{
                      flex: 0.0001,
                      width: width * 0.9,
                      borderWidth: 3,
                      borderColor: "#FF6666"
                    }}
                  >
                    <Image
                      source={{ uri: "../images/line.png" }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
                <View style={{ flex: 0.1 }} />
              </View>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: "flex-end"
                }}
              />
            </View>
          </RNCamera>
        ) : (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text> Scan Successfull </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={{ justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: width * 0.05,
              textAlign: "center",
              color: "#66CCFF"
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
const mapDispatchToProps = dispatch => ({
  Act: bindActionCreators(Act, dispatch)
});
export default connect(null, mapDispatchToProps)(BarcodeScanner);
