import "./App.css";
import Filter from "./components/Filters/Filter";
import RightFilter from "./components/Filters/RightFilter";

import NavBar from "./components/NavBar";
import ShirtList from "./components/ShirtList/ShirtList";
import SortContainer from "./components/SortContainer/SortContainer";

function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <div className="path-routes">
                <h4>
                    Home / Clothing / <span>Shirts for Men & Women</span>
                </h4>
            </div>
            <div className="path-routes-main">
                <span className="main-text">Shirts for Men & Women</span>
                <span className="secondary-text"> - 80550 items</span>
            </div>
            <div className="row-items">
                <div className="left-containers">
                    <Filter />
                </div>
                <div className="right-containers">
                    <div className="right-container-top">
                        <RightFilter />
                        <div>
                            <SortContainer />
                        </div>
                    </div>
                    <div className="right-container-content">
                      <ShirtList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
