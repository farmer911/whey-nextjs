import axios from 'axios';
import jsCookie from 'js-cookie';
import authenticateSettings from '../settings/authenticateSettings.json';
import { notification } from 'antd';
import localizationSettings from '../settings/localizationSettings.json';
import generalSettings from '../settings/generalSettings.json'

const httpClient = axios.create({
  baseURL: generalSettings.remoteServiceBaseUrl
});

httpClient.interceptors.request.use(
  function (config) {
    if (typeof (document) !== 'undefined') {
      const auToken = jsCookie.get(authenticateSettings.tokenName);
      const languageId = jsCookie.get(localizationSettings.accessKey);
      if (auToken)
        config.headers.common['Authorization'] = generalSettings.jwtTokenSchema + jsCookie.get(authenticateSettings.tokenName);

      if (languageId)
        config.headers.common[localizationSettings.headerKey] = jsCookie.get(localizationSettings.accessKey)
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  response => response.data ? response.data : null,
  error => {
    console.log(error)
    const { response } = error;
    if (typeof (document) !== 'undefined') {
      if (response) {
        switch (response.status) {
          case 400:
            if (Boolean(response.data.Email)) {
              const [message] = response.data.Email;
              notification.error({ message });
            }
            break;
          default:
            notification.error({ description: error.message, message: response.statusText })
            break;
        }
      } else {
        notification.error({ message: error.message, description: error.stack })
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;