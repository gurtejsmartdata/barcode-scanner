
  import RestClient from '../helpers/RestClient';
//   import Common from "../../helpers/common";
  export const sendMessage = (postData,token,successCallback,errorCallback) => {
    return  dispatch => {
      RestClient.post(
        "bot/messages",
        postData,
        token
      )
        .then(res => {
          successCallback(res);
        })
        .catch(error => {
          console.log(error);
          errorCallback();
        });
    };
   
  };
  