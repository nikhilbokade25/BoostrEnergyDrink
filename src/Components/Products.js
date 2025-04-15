import { useState } from 'react';
import './Products.css';

import BerryCanImg from "../Assets/BerryCan.png";
import GrapesCan from "../Assets/GrapesCan.png";
import LemonCan from "../Assets/LemonCan.png";
import OrangeCan from "../Assets/OrangeCan.png";
import RaspberryCan from "../Assets/RaspberryCan.png";
import StrawberryCan from "../Assets/StrawberryCan.png";

import BlueberryInfo from "../Assets/BlueberryInfo.png";
import GrapeInfo from "../Assets/GrapeInfo.png";
import LemonInfo from "../Assets/LemonInfo.png";
import OrangeInfo from "../Assets/OrangeInfo.png";
import RaspberryInfo from "../Assets/RaspberryInfo.png";
import StrawberryInfo from "../Assets/StrawberryInfo.png";

const products = [
    { name: "Berry Blast", img: BerryCanImg, infoImg: BlueberryInfo },
    { name: "Grapes Glow", img: GrapesCan, infoImg: GrapeInfo },
    { name: "Lemon Zing", img: LemonCan, infoImg: LemonInfo },
    { name: "Orange Pop", img: OrangeCan, infoImg: OrangeInfo },
    { name: "Raspberry Rush", img: RaspberryCan, infoImg: RaspberryInfo },
    { name: "Strawberry Spark", img: StrawberryCan, infoImg: StrawberryInfo },
];

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openDialog = (product) => {
        setSelectedProduct(product);
    };

    const closeDialog = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="products_container">
            <div className='products_main'>
                <h2>PRODUCTS</h2>
                <div className='products_display'>
                    {products.map((product, index) => (
                        <div
                            className="product_box"
                            key={index}
                            onClick={() => openDialog(product)}
                        >
                            <button
                                className="info_btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openDialog(product);
                                }}
                            >
                                i
                            </button>
                            <img src={product.img} alt={product.name} className="product_img" />
                            <p className="product_name">{product.name}</p>
                        </div>
                    ))}
                </div>

                {/* Image-Only Dialog */}
                {selectedProduct && (
                    <div className="dialog_overlay" onClick={closeDialog}>
                        <div className="dialog_img_wrapper" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedProduct.infoImg} alt={selectedProduct.name} className="dialog_img" />
                            <button className="dialog_close_btn" onClick={closeDialog}>×</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
