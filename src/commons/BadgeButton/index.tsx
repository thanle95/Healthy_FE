import { ReactNode } from "react"
import './style.css'
interface PropsNavigationButton {
    count: number,
    icon?: ReactNode | undefined,
    onClick?: React.MouseEventHandler<HTMLElement> | undefined
}
const BadgeButton =({count, icon, onClick}: PropsNavigationButton)=>{
    return <div className="badge">
    {icon}
    <span className="badge-count">{count}</span>
  </div>
}
export default BadgeButton