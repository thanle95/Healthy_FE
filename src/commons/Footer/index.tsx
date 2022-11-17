import ChallengeIcon from '../icons/ChallengeIcon'
import MenuIcon from '../icons/MenuIcon'
import MyRecordIcon from '../icons/MyRecordIcon'
import NewsIcon from '../icons/NewsIcon'
import Logo from '../Logo'
import NavigationButton from '../NavigationButton'
import './style.css'
function Footer(){
    return <div className="footer">
        <div className='container'>
           <a href='#'>会員登録</a>
           <a href='#'>運営会社</a>
           <a href='#'>利用規約</a>
           <a href='#'>個人情報の取扱について</a>
           <a href='#'>特定商取引法に基づく表記</a>
           <a href='#'>お問い合わせ</a>
        </div>
    </div>
}
export default Footer