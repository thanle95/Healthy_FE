import { Image } from "antd"
import logo from '../../logo.png'
function Logo(){
    return <a href="/"><Image
        width={144}
        height={64}
        src={logo}
        preview={false}
    ></Image></a>
}
export default Logo