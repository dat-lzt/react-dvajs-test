import React from 'react';
import styles from './rule.scss';

export default function rule(props) {
    return (
        <div className={styles.Rule} style={{ visibility: props.AlertShow ? 'visible' : 'hidden' }}>
          <div className={`${styles.ruleconnent} ${styles.ruleConnentActive}`}>
            <div className={styles.ruletitle}>活动说明</div>
            <img className={styles.allRules} src={require("../../assets/allRules.png")} alt="" />
            <img onClick={props.onRuleclose} className={styles.ruleclose} src={require("../../assets/ruleclose.png")} alt="" />
          </div>
        </div>
    )
}
