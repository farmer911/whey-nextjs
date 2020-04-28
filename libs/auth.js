import cookies from 'next-cookies';
import { Cookies } from 'react-cookie';
import redirectTo from './redirectTo';
import authenticateSettings from '../settings/authenticateSettings.json';
import appRoutes from '../routes/appRoutes';

function getAuthorizeRoutes() {
  const excepts = [appRoutes.home.path];
  let authorizeRoutes = [];
  for (const routeField in appRoutes) {
    const route = appRoutes[routeField];
    if (!excepts.includes(route.path))
      authorizeRoutes.push(route.path)
  }
  return authorizeRoutes;
}


export default async function handleAuthSSR(ctx) {
  const authorizeRoutes = getAuthorizeRoutes();
  let token = null;
  if (authorizeRoutes.includes(ctx.pathname)) {
    if (ctx.req) {
      const appCookie = cookies(ctx)[authenticateSettings.tokenName];
      token = appCookie;
    } else {
      const cookies = new Cookies();
      token = cookies.get(authenticateSettings.tokenName);
    }

    const isAthorized = Boolean(token);
    if (!isAthorized)
      redirectTo(appRoutes.login, { res: ctx.res })
  }
}