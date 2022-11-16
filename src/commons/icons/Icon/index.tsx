import { Image } from "antd"
interface PropsIcon {
    src: string,
}
function Icon({src}: PropsIcon){
    return <Image
        width={32}
        height={32}
        src={src}
        preview={false}
    ></Image>
}
export default Icon