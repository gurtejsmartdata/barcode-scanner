import React, { Component } from "react";
import {NetInfo} from "react-native";
import { Provider } from "react-redux";
import setup from "./store/setup";
import Routes from "./routes/Routes";

global.isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
console.disableYellowBox = true;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: null
    };
  }
  componentWillMount(){
    function handleFirstConnectivityChange(isConnected) {
      NetInfo.isConnected.removeEventListener('connectionChange',handleFirstConnectivityChange);
      }
      NetInfo.isConnected.addEventListener('connectionChange',handleFirstConnectivityChange);
      NetInfo.isConnected.fetch().then(isConnected => {
      });
  }
  componentDidMount() {
    setup(store => {
      this.setState({
        isLoading: false,
        store
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <Routes />
      </Provider>
    );
  }
}
