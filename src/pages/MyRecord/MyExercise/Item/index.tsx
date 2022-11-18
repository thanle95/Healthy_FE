import mainGraph from "../../../assets/photoes/main_graph.png";
import "./style.css";
const Item = () => {
  return (
    <li className="my-exercise-item">
      <div className="my-exercise-item-left">
        <span className="my-exercise-item-text-light">●</span>
        <div className="my-exercise-item-column">
          <span className="my-exercise-item-title">家事全般（立位・軽い</span>
          <span className="my-exercise-item-sub-title">26kcal</span>
        </div>
      </div>
      <span className="my-exercise-item-right">10 min</span>
    </li>
  );
};
export default Item;
