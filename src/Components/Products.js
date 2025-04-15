import './Products.css';
import BerryCanImg from "../Assets/BerryCan.png";
import GrapesCan from "../Assets/GrapesCan.png";
import LemonCan from "../Assets/LemonCan.png";
import OrangeCan from "../Assets/OrangeCan.png";
import RaspberryCan from "../Assets/RaspberryCan.png";
import StrawberryCan from "../Assets/StrawberryCan.png";

const products = [
    { name: "Berry Blast", img: BerryCanImg },
    { name: "Grapes Glow", img: GrapesCan },
    { name: "Lemon Zing", img: LemonCan },
    { name: "Orange Pop", img: OrangeCan },
    { name: "Raspberry Rush", img: RaspberryCan },
    { name: "Strawberry Spark", img: StrawberryCan },
];

export default function Products(){
    return(
        <div className="products_container">
            <div className='products_main'>
                <h2>PRODUCTS</h2>
                <div className='products_display'>
                    {products.map((product, index) => (
                        <div className="product_box" key={index}>
                            <button className="info_btn">i</button>
                            <img src={product.img} alt={product.name} className="product_img" />
                            <p className="product_name">{product.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
