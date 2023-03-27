import React from "react";
import Filter from "../components/Filters/Filter";

import NavBar from "../components/NavBar/NavBar";
import ShirtList from "../components/ShirtList/ShirtList";
import SortContainer from "../components/SortContainer/SortContainer";
import "./ShirtListPage.css";
import { useDispatch, useSelector } from "react-redux";
import filterProducts from "../selectors/products";
import { Drawer } from "antd";
import { setShowSimilar } from "../store/common/reducer";
export default function ShirtListPage() {
    const filters = useSelector((state) => state.filter);
    const common = useSelector((state) => state.common);
    const sortBy = useSelector((state) => state.sortBy.sortType);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.bag.allProducts);

    const filteredProducts = filterProducts(products, { sortBy, filters });


    return (
        <div className="shirt-list-page">
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
                <span className="secondary-text">
                    {" "}
                    - {filteredProducts.length} items
                </span>
            </div>
            <div className="row-items">
                <div className="left-containers">
                    <Filter />
                </div>
                <div className="right-containers">
                    <div className="right-container-top">
                        <div>
                            <SortContainer />
                        </div>
                    </div>
                    <div className="right-container-content">
                        <ShirtList
                            forWishList={false}
                            data={filteredProducts}
                        />
                    </div>
                </div>
            </div>
            <Drawer
                title={"Similar Prodcuts"}
                placement="right"
                closable={true}
                onClose={() =>
                    dispatch(
                        setShowSimilar({
                            query: common.queryForSimilar,
                            id: common.similarFor,
                        })
                    )
                }
                visible={common.showSimilar}
                width={324}
                closeIcon={true}
            >
                <ShirtList
                    forWishlist={false}
                    data={filterProducts(filteredProducts, {
                        filters: { ...filters, text: common.queryForSimilar },
                        sortBy,
                    }).filter((item) => item.id !== common.similarFor)}
                />
            </Drawer>
        </div>
    );
}
