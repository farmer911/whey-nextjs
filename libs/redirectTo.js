import Router from 'next/router'

// export default function redirectTo(destination, { res, status } = {}) {
//   if (res) {
//     res.writeHead(status || 302, { Location: destination })
//     res.end()
//   } else {
//     if (destination[0] === '/' && destination[1] !== '/') {
//       Router.push(destination)
//     } else {
//       window.location = destination
//     }
//   }
// }

export default function redirectTo(destination, { res, status } = {}) {
  if (res) {
    res.writeHead(status || 302, { Location: destination.asPath })
    res.end()
  } else {
    if (destination.path[0] === '/' && destination.path[1] !== '/') {
      Router.replace(destination.path, destination.asPath)
    } else {
      window.location = destination.asPath
    }
  }
}