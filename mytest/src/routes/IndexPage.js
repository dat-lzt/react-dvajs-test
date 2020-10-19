import React, { Component } from 'react';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
import styles from './IndexPage.scss';
import Connent from '../components/Connent/connent';
import Login from '../pages/Login/login';
import Rule from '../components/Rule/rule';
class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      visibility: false,
      display: false,
      token:false,
    }
  }
  //打开活动规则
  onClickRule = () => {
    this.setState({ visibility: true })
  }
  // 关闭活动规则
  onRuleclose = () => {
    this.setState({ visibility: false })
  }
  //点击立即邀请
  onClickInvite = () => {
    if (!this.state.token) {
      Toast.info('请先登录',1.8);
      setTimeout(()=>{
        this.setState({ display: true })
      },1800)
     }
  }
  //点击邀请记录
  onClickInviteRecord = () => {
    if (!this.state.token) {
      Toast.info('请先登录',1.8);
      setTimeout(()=>{
        this.setState({ display: true })
      },1800)
    }
  }
  onunlockPoints=()=>{
    if (!this.state.token) {
      this.setState({ display: true })
    }
  }
  onClickMask = () => {
    this.setState({ display: false })
  }
  render() {
    return (
      <div className={styles.Home}>

        {/* 活动说明 */}
        <Rule AlertShow={this.state.visibility} onRuleclose={this.onRuleclose}/>

        <img className={styles.bg_img} src={require("../assets/homeheader.png")} alt=""></img>
        <img onClick={this.onClickRule} className={styles.ruleBtnBg} src={require("../assets/ruleBtnBg.png")} alt=""></img>
        <Connent onunlockPoints={this.onunlockPoints}/>
        <img onClick={this.onClickInvite} className={styles.inviteBtnBg} src={require("../assets/inviteBtnBg.gif")} alt="" />
        <img onClick={this.onClickInviteRecord} className={styles.inviteRecord} src={require("../assets/inviteRecord.png")} alt="" />
        <div onClick={this.onClickMask} className={`${styles.mask} ${styles.maskActive}`} style={{ display: this.state.display ? 'block' : 'none' }} ></div>
        <Login AlertShow={this.state.display} />
      </div>
    );
  }
}


IndexPage.propTypes = {
};

export default connect()(IndexPage);
