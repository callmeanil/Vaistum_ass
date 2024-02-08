import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import AreaCard from "../areaCards/AreaCard";

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Announcement</h4>
      </div>
      <div className="data-table-diagram">
       
        <div>
          <p className="abc">Outling Schedule for every Department</p>
          <span className="abc1">5 minutes ago</span>
        </div>
        <div>
          <p className="abc">Meeting HR Department</p>
          <span className="abc1">Yesterday 12.30 PM </span>
          
        </div>
        <div>
          <p className="abc">IT Department need two more talents for UX/UI Designer Position</p>
          <span className="abc1">Yesterday 09.15 PM</span>
        </div>
        <div className="parent"><p className="announcement">Sell All Announcement</p></div>
      </div>

     
    </section>
  );
};

export default AreaTable;
