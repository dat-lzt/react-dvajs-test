import React from 'react';
import styles from './login.scss';

export default function login(props) {
    console.log(props)
    // style={{display: props.AlertShow ? 'block':'none'}}
    // render() {
        return (
            <div className={props.AlertShow ? `${styles.LoginMain} ${styles.LoginMainBind} ${styles.LoginMainActive}`:`${styles.LoginMain} ${styles.LoginMainBind}`} >
                <div className={styles.LoginMainTop}>
                    <img className={styles.LoginTop} src={require("../../assets/LoginTop.png")} alt=""/>
                    <div className={styles.LoginMainTopTitle}>快速登录</div>
                </div>
                <div className={styles.LoginMainInput}>
                    <img className={styles.iPhoneInput} src={require("../../assets/iPhoneInput.png")} alt=""/>
                    <div className={styles.input}>
                        <input className={styles.IPhoneInputFrom} type="number" placeholder="输入手机号"/>
                    </div>
                </div>
                <div className={`${styles.LoginMainInput} ${styles.LoginMainInputBom}`}>
                    <img className={styles.VerificationInput} src={require("../../assets/VerificationInput.png")} alt=""/>
                    <div className={styles.input}>
                        <input className={styles.VerificationInputFrom} type="tel" placeholder="填写验证码" maxLength="6"/>
                        <div className={styles.VerificationInputBtn}>获取验证码</div>
                    </div>
                </div>
                <div className={styles.LoginMainBom}>
                    <div className={styles.LoginMainBomInner}></div>
                    <div className={styles.LoginMainBomBtn}>
                        <div className={styles.LoginMainBomBtnInner}>
                        <img className={styles.LoginMainBomBtnpg} src={require("../../assets/LoginMainBomBtnpg.png")} alt=""/>
                        <div className={styles.LoginMainBomBtnText}>立即登录</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    // }
}