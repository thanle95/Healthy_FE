import column1Img from "../../assets/photoes/column-1.jpg";
import column2Img from "../../assets/photoes/column-2.jpg";
import column3Img from "../../assets/photoes/column-3.jpg";
import column4Img from "../../assets/photoes/column-4.jpg";
import column5Img from "../../assets/photoes/column-5.jpg";
import column6Img from "../../assets/photoes/column-6.jpg";
import column7Img from "../../assets/photoes/column-7.jpg";
import column8Img from "../../assets/photoes/column-8.jpg";
import Button from "../../commons/Button";
import Recommend from "./Recommend";
import ScaleImage from "./ScaleImage";
import "./style.css";
function Column() {
  return (
    <div className="column container">
      <div className="recommend-list ">
        <Recommend
          title="RECOMMENDED COLUMN"
          subTitle="オススメ"
        />
        <Recommend
          title="RECOMMENDED DIET"
          subTitle="ダイエット"
        />
        <Recommend
          title="RECOMMENDED BEAUTY"
          subTitle="美容"
        />
        <Recommend
          title="RECOMMENDED HEALTH"
          subTitle="健康"
        />
      </div>
      <div className="scale-image-list ">
      <ScaleImage text="2021.05.17   23:25" img={column1Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column2Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column3Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column4Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column5Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column6Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column7Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
      <ScaleImage text="2021.05.17   23:25" img={column8Img} description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" tag="#魚料理  #和食  #DHA"/>
        </div>
      <Button title="記録をもっと見る" />
    </div>
  );
}
export default Column;
