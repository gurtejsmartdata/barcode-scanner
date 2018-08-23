'use strict';
/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 22.03.2018
 * @author: Gurtej Singh
 * */

const localhost       = "172.24.1.172:4130",
      staging         = "52.34.207.5:4179",
      live            = "q2udojqhoc.execute-api.us-east-1.amazonaws.com";
const running_url   = live,
    http_url        = `https://${running_url}`,
    apiBase_url     = `https://${running_url}/`;
    

export default class Connection {
    static getResturl() {
        return apiBase_url;
    };
    static getBaseUrl() {
        return apiBase_url;
    };
}