import './App.css';
import 'antd/dist/antd.css'; 
import ChallengeIcon from './commons/icons/ChallengeIcon';
import CloseIcon from './commons/icons/CloseIcon';
import MenuIcon from './commons/icons/MenuIcon';
import MyRecordIcon from './commons/icons/MyRecordIcon';
import NewsIcon from './commons/icons/NewsIcon';
import Logo from './commons/Logo';
import NavigationButton from './commons/NavigationButton';
import TopMyPages from './pages/TopMyPage';
import BadgeButton from './commons/BadgeButton';
import HexagonButton from './commons/HexagonButton';
import src from './assets/icon_knife.png'
import Button from './commons/Button';
import MenuItem from './commons/MenuItem';
import BackToTopButton from './commons/BackToTopButton';
function App() {
  return (
    <div className="App">
      <TopMyPages/>

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
    <BackToTopButton/>
          </div>
  );
}

export default App;
