import { Button } from "antd"
import { ReactNode } from "react"
import './style.css'
interface PropsNavigationButton {
    title: string,
    icon?: ReactNode | undefined,
    onClick?: React.MouseEventHandler<HTMLElement> | undefined
}
const NavigationButton =({title, icon, onClick}: PropsNavigationButton)=>{
    return <Button type="text" icon={icon} onClick={onClick}>
    {title}
  </Button>
}
export default NavigationButton