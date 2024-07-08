import { Component } from "react";
import TabItem from "../TabItem";
import "./index.css";
import { Link } from "react-router-dom";

const tabsList = [
  { tabId: "POPULAR", displayText: "popular" },
  { tabId: "TOP_RATED", displayText: "top rated" },
  { tabId: "UPCOMING", displayText: "upcoming" },
];

class NavBar extends Component {
  state = {
    inputVal: "",
    activeTab: tabsList[0].tabId,
  };

  onClickTabItem = (tabId) => {
    this.setState({ activeTab: tabId});
  };

  onChangeInputVal = (event) => {
    const inputVal = event.target.value;
    this.setState({ inputVal });
  };


  render() {
    const { inputVal, activeTab} = this.state;
    return (
        <nav className="nav-bar">
          <h1 className="header">MovieDb</h1>
          <div className="nav-left-cont">
            {tabsList.map((tab) => (
              <TabItem
                key={tab.tabId}
                tabObj={tab}
                isActive={activeTab === tab.tabId}
                onClickTabItem={this.onClickTabItem}
              />
            ))}
            <input
              type="search"
              placeholder="Enter Movie Name"
              value={inputVal}
              onChange={this.onChangeInputVal}
            ></input>
            <Link to={inputVal}>
              <button type="button" className="search-btn">
                Search
              </button>
              </Link>
          </div>
        </nav>
    );
  }
}

export default NavBar;
