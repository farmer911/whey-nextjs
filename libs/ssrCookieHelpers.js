import cookies from 'next-cookies';
import localizationSettings from '../settings/localizationSettings.json'
import authenticateSettings from '../settings/authenticateSettings.json'
import generalSettings from '../settings/generalSettings.json'

const ssrCookieHelpers = {
  getCookies(ctx) {
    const cookieObject = cookies(ctx);
    let cookiesResults = {};
    if (cookieObject[localizationSettings.accessKey])
      cookiesResults[localizationSettings.headerKey] = cookieObject[localizationSettings.accessKey]

    return cookiesResults;
  },

  getAuthCookies(ctx) {
    const cookieObject = cookies(ctx);
    let cookiesResults = {};
    if (cookieObject[authenticateSettings.tokenName]) {
      cookiesResults[authenticateSettings.tokenName] = cookieObject[authenticateSettings.tokenName]
      cookiesResults[authenticateSettings.authorizationHeader] = generalSettings.jwtTokenSchema + cookieObject[authenticateSettings.tokenName]
    }

    return cookiesResults
  }
}
export default ssrCookieHelpers;