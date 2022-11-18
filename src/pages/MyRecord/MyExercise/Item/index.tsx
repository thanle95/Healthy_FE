import mainGraph from "../../../assets/photoes/main_graph.png";
import "./style.css";
const Item = () => {
  return (
    <li className="my-exercise-item" >
      <div className="left">
        <span className="text-light">●</span>
        <div className="column">
        <span className="title">家事全般（立位・軽い</span>
        <span className="sub-title">26kcal</span>
        </div>
        
      </div>
      <span className="right">10 min</span>
     
    </li>
  );
};
export default Item;
