import './App.css';
import 'antd/dist/antd.css'; 
import ChallengeIcon from './commons/icons/ChallengeIcon';
import CloseIcon from './commons/icons/CloseIcon';
import MenuIcon from './commons/icons/MenuIcon';
import MyRecordIcon from './commons/icons/MyRecordIcon';
import NewsIcon from './commons/icons/NewsIcon';
import Logo from './commons/Logo';
import NavigationButton from './commons/NavigationButton';
import TopMyPage from './pages/TopMyPage';
import BadgeButton from './commons/BadgeButton';
import HexagonButton from './commons/HexagonButton';
import src from './assets/icon_knife.png'
import Button from './commons/Button';
import MenuItem from './commons/MenuItem';
import BackToTopButton from './commons/BackToTopButton';
import Header from './commons/Header';
import Footer from './commons/Footer';
import MyRecord from './pages/MyRecord';
function App() {
  return (
    <div className="App">
      {/* <TopMyPages/>

    <Logo/>
    <MyRecordIcon/>
    <ChallengeIcon/>
    <NewsIcon/>
    <MenuIcon/>
    <CloseIcon/>
    <NavigationButton title="自分の記録" icon={<MyRecordIcon/>}/>
    <BadgeButton count={1} icon={<NewsIcon/>}/>
    <HexagonButton title="Morning" icon={src}/>
    <Button title='記録をもっと見る'/>
    <MenuItem title='自分の記録'/>
    */}
    <Header/>
    {/* <TopMyPage/> */}
    <MyRecord/>
    <Footer/>
    <BackToTopButton/> 
          </div>
  );
}

export default App;
