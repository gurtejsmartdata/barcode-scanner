/*
 * @file: RestClient.js
 * @description: Rest Client
 * @author: Gurtej Singh
 * */

"use strict";

import Connection from "../config/Connection";
import { NetInfo, Alert, Platform } from "react-native";
let logintoken = "";
class RestClient {
  static isConnected() {
    
    let context = this;
    return new Promise(function(fulfill, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) fulfill(isConnected);
        else {
          reject(isConnected);
        }
      });
    });
  }
  static post(
    url,
    params,
    token
  ) {
    let context = this;
    console.log(JSON.stringify(params));
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          console.log("url=> ",Connection.getResturl() + url ," requestObject=> ",params)
          fetch(Connection.getResturl() + url, {
            method: "POST",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Cache-Control': 'no-cache',
              "X-API-Key":token
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log("responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              fulfill({
                message:
                  "Something went wrong please try it later."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message:
              "Please check your internet connectivity or our server is not responding."
          });
        });
    });
  }
}

export default RestClient;
