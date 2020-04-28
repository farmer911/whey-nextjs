import React from 'react'
import App from 'next/app';
import '../libs/extensions';
import MainLayout from '../layouts/mainLayout';
import withReduxThunk from '../redux/withReduxThunk';
import { Provider } from 'react-redux';
import handleAuthSSR from '../libs/auth';
import NProgress from 'nprogress'
import Router from 'next/router'
import htmlHelpers from "../libs/htmlHelpers";
import { init } from '../libs/ssrInit';


Router.events.on('routeChangeStart', url => NProgress.start())

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  htmlHelpers.scrollTop();
  htmlHelpers.closeMenu();
})

Router.events.on('routeChangeError', () => NProgress.done())

class LenovoMTR extends App {
  static async getInitialProps({ Component, ctx }) {
    await handleAuthSSR(ctx);

    let pageProps = {};
    if (Component.getInitialProps) {
      const componentProps = await Component.getInitialProps(ctx);
      pageProps = componentProps
    }

    //await ctx.store.dispatch(fetchLanguages());
    await init(ctx,
      async (params, __cookies) => ({

      }),
      async params => ({

      })
    );

    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const AppLayout = Component.Layout || MainLayout;

    return (
      <Provider store={store}>
        <AppLayout {...pageProps}>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    )
  }
}

export default withReduxThunk(LenovoMTR);