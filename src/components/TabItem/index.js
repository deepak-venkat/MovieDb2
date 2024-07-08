import "./index.css";
import { Link } from "react-router-dom";
const TabItem = (props) => {
  const { tabObj, isActive, onClickTabItem } = props;
  const { tabId, displayText } = tabObj;

  const activeTabClassName = isActive ? "active-tab-btn" : "";
  const onClickTab = () => {
    onClickTabItem(tabId);
  };

  return (
    <li>
      <Link to={`/${tabId}`} className={activeTabClassName}>
        <button
          type="button"
          className={`tab-btn ${activeTabClassName}`}
          onClick={onClickTab}
        >
          {displayText}
        </button>
      </Link>
    </li>
  );
};

export default TabItem;
