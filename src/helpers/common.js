'use strict';
import Snackbar from 'react-native-snackbar';
import Constants from "../constants";
var Common = {
 ShowToast:(val)=>{
     setTimeout(()=>{
        Snackbar.show({
            title: val,
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:Constants.Colors.Primary
        });
     },50)
   
   }
}

module.exports = Common;