import mainGraph from "../../../assets/photoes/main_graph.png";
import Button from "./Button";
import "./style.css";
const BodyRecord = () => {
  return (
    <div className="body-record" >
      <div className="top">
        <span className="title">BODY RECORD</span>
        <span className="date">2021.05.21</span>
      </div>
      <img className="body-record-img" src={mainGraph}>
       
      </img>
      <div className="bottom">
        <Button title="日"/>
        <Button title="週"/>
        <Button title="月"/>
        <Button title="年" isPrimary/>
      </div>
    </div>
  );
};
export default BodyRecord;
