import React from 'react';
import styles from './connent.scss';

function connent(props) {
    return (
      <div className={styles.connent} >
        <div className={styles.integralFrame}>
          <div className={styles.integralFrameTop}>
            <div className={styles.TopText}>
              邀请
             <span>1</span>
             位新同学
           </div>
            <img className={styles.NotFinished} src={require("../../assets/NotFinished.png")} alt="" />
          </div>
          <img onClick={props.onunlockPoints} className={styles.unlockPoints} src={require("../../assets/unlockPoints.png")} alt="" />
        </div>
        <img className={styles.unlockPoints2} src={require("../../assets/unlockPoints2.png")} alt="" />
        <div className={styles.integralFrame2}>
          <img className={styles.frame2title} src={require("../../assets/frame2title.png")} alt="" />
          <div className={styles.integralFrame2Item}>
            <div className={styles.itemTop}>
              <div className={styles.itemTopText}>
                邀请
              <span>3</span>
              位新同学
              <span className={styles.samllspan}>(150积分+以下任选其一)</span>
              </div>
              <img className={styles.NotFinished2} src={require("../../assets/NotFinished2.png")} alt="" />
            </div>
            <div className={styles.itemBottom}>
              <img className={styles.itemBottombg} src={require("../../assets/itemBottombg.png")} alt="" />
              <div className={styles.itemBottominput}></div>
            </div>
          </div>
          <div className={styles.integralFrame2Item}>
            <div className={styles.itemTop}>
              <div className={styles.itemTopText}>
                邀请
              <span>5</span>
              位新同学
              <span className={styles.samllspan}>(150积分+以下任选其一)</span>
              </div>
              <img className={styles.NotFinished2} src={require("../../assets/NotFinished2.png")} alt="" />
            </div>
            <div className={styles.itemBottom}>
              <img className={styles.itemBottombg} src={require("../../assets/itemBottombg.png")} alt="" />
              <div className={styles.itemBottominput}></div>
            </div>
          </div>
          <div className={styles.integralFrame2Item}>
            <div className={styles.itemTop}>
              <div className={styles.itemTopText}>
                邀请
              <span>8</span>
              位新同学
              <span className={styles.samllspan}>(150积分+以下任选其一)</span>
              </div>
              <img className={styles.NotFinished2} src={require("../../assets/NotFinished2.png")} alt="" />
            </div>
            <div className={styles.itemBottom}>
              <img className={styles.itemBottombg} src={require("../../assets/itemBottombg.png")} alt="" />
              <div className={styles.itemBottominput}></div>
            </div>
          </div>
          <div className={styles.notes1}>注: 不同阶梯实物奖品不可累计，用户仅可获得一件</div>
          <img className={styles.quanBanner} src={require("../../assets/quanBanner.png")} alt="" />
          <div className={styles.notes2}>点击领取新人奖学金</div>
          <div className={styles.notes3}>领取后邀请好友再得100元&nbsp;多邀多得无上限</div>

        </div>
      </div>
    )
}
export default connent;