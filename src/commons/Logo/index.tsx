import { Image } from "antd"
import logo from '../../logo.png'
function Logo(){
    return <Image
        width={144}
        height={64}
        src={logo}
        preview={false}
    ></Image>
}
export default Logo