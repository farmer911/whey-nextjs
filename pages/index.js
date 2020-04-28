import React, { Component } from 'react'
import { init } from '../libs/ssrInit';
import { connect } from 'react-redux';
import withLocalize from '../HOC/withLocalize';
import HomepageService from '../services/home/homePageService'
import Banner from '../components/common/banner/banner';
import NewProducts from '../components/common/product/newProducts';
import ItemProducts from '../components/common/product/itemProducts';
import News from '../components/common/news/news';

export default class Home extends Component {
  render() {
    const { T, banner,product,hotProduct } = this.props;
    // console.log(hotProduct)
    return (
      <div>
        <Banner data={banner.data}/>
        <NewProducts />
        <ItemProducts data={hotProduct}/>
        <div className={'container my-4'.css()}><img src="https://cdn.wheystore.vn/upload/ad/ad_1587134132_image_1587134132.jpg"  className={'w-100'.css()}/></div>
        <News />
      </div>
    );
  }
}

const mapStateToProps = ({ }) => ({});
Home = withLocalize(Home);
Home = connect(mapStateToProps, null)(Home);
Home.getInitialProps = async ctx => {
  return await init(ctx,
    async (params, __cookies) => ({
      banner: await HomepageService.banner(),
      product: await HomepageService.product(),
      hotProduct: await HomepageService.hotProduct(),
    }),
    async params => ({
      banner: await HomepageService.banner(),
      product: await HomepageService.product(),
      hotProduct: await HomepageService.hotProduct(),
    })
  );
}
