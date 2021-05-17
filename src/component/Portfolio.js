import React from 'react';
const LT = () =>{
    return(
        <>
            <h2>参加したTL会/ハッカソンと登壇資料</h2>
            <div>
                <h3>5月16日 <br/>
                    「焼肉争奪戦！NU CAMP Dev&Pub LT Party presented by ねこもり」<br/>
                    LT発表資料</h3>
                <p>イベントURL<a href=' https://ntsa.connpass.com/event/211862/'> https://ntsa.connpass.com/event/211862/</a></p>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTHbVvvMylonp9evDqKOm36Po4GSTKnBNm3Q9VH6JRscBra58QBRbCwDuXFqtuPpeYxtqHF5ujmyjqn/embed?start=false&loop=false&delayms=10000"
                    frameBorder="0"  allowFullScreen="false" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
            </div>
            <div>
                <h3> 2020年12月13日<br/>
                    「#stdout2020 学生LT会」  LT発表資料</h3>
                <p>イベントURL <a href='https://joken-nuce.connpass.com/event/195933/'>https://joken-nuce.connpass.com/event/195933/</a></p>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRvsUQbtzD0Mz2saqZO_Byo0MnaLbgMbG2mJr489KL5iMtwO-leEkGbtFLwrfWZEmmkQRCzpqpkCYBy/embed?start=false&loop=false&delayms=3000"
                    allowFullScreen="true" mozallowfullscreen="true"
                    webkitallowfullscreen="true"></iframe>
            </div>

        </>
    )
}
const Profile = () =>{

    return(<>
            <h2>プロフィール(2021年5月現在)</h2>
            <p>
                ハンドルネーム: 上原ゆりあ<br/>
                本名: 土田 妃華<br/>
                所属:慶応義塾大学 環境情報学部 4年 萩野服部研究室<br/>
                Twitter: @yuria_cats
            </p>
            <p>
                所持スキル:
                <li>Python :Django/Flaskを利用したWEB APP、Frameworkを活用した機械学習のコードが書ける程度</li>
                <li>Ruby: Ruby on rails を使ったWEBアプリがWEBの記事を参考にしながらかける程度</li>
                <li>Javascript : ReactやNodejsを活用してブログアプリが作れる程度</li>
            </p>
    </> )
}

const Portfolio = ()=>{
    return (
        <section className={'content'}>
            <Profile/>
            <LT/>
        </section>
    )

}
export default Portfolio
