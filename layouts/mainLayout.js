import React from 'react';
import withLocalize from '../HOC/withLocalize';
import { connect } from 'react-redux';
import classNames from 'classnames'
import Footer from '../components/common/footer/footer';
import Recomment from '../components/common/footer/recomment';
import Navbar from '../components/common/navbar/navbar';
import Menu from '../components/common/navbar/menu';

export default class MainLayout extends React.Component {
  render() {
    const { T, isAuthorized, isOpenMenu } = this.props;
    return (
      <div>
        <Navbar />
        <Menu />
        {this.props.children}
        <Footer />
        <Recomment />
      </div>
    )
  }
}

MainLayout = withLocalize(MainLayout);
const mapStateToProps = ({ globalState }) => ({ ...globalState })
MainLayout = connect(mapStateToProps, null)(MainLayout);
