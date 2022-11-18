import "./style.css";
import icon from '../../assets/icon_back_to_top.png'
import Icon from "../icons/Icon";
import {Image} from 'antd'
import { useEffect, useState } from "react";
interface PropsNavigationButton {
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}
const BackToTopButton = ({  onClick }: PropsNavigationButton) => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0){
      setVisible(true)
    } 
    else if (scrolled <= 0){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  useEffect(()=>{
    window.addEventListener('scroll', toggleVisible);
    return ()=> {
      window.removeEventListener('scroll', toggleVisible);
    }
  },[])
  return (
    <button className={`back-to-top ${visible? "" : "hidden"}`} onClick={scrollToTop}>
      <Image
        src={icon}
        preview={false}
    ></Image>
    </button>
  );
};
export default BackToTopButton;
