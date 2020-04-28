import ssrCookieHelpers from "./ssrCookieHelpers"

export async function init(ctx, serverHandle, clientHandle) {
  if (ctx.req)
    return await serverHandle(ctx.req.params || {}, {
      ...ssrCookieHelpers.getCookies(ctx),
      ...ssrCookieHelpers.getAuthCookies(ctx)
    })
  return await clientHandle(ctx.query)
}