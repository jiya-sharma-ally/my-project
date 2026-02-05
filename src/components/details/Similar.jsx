import similar1 from "../../assets/images/similar1.png";
import similarback1 from "../../assets/images/similarback1.png";
import similar2 from "../../assets/images/similar2.png";
import similarback2 from "../../assets/images/similarback2.png";
import similar3 from "../../assets/images/similar3.png";
import similarback3 from "../../assets/images/similarback3.png";
import similar4 from "../../assets/images/similar4.png";
import similarback4 from "../../assets/images/similarback4.png";
import similar5 from "../../assets/images/similar5.png";
import similarback5 from "../../assets/images/similarback5.png";
import similar6 from "../../assets/images/similar6.png";
import similarback6 from "../../assets/images/similarback6.png";
import similar7 from "../../assets/images/similar7.png";
import similarback7 from "../../assets/images/similarback7.png";
import { BsCart } from "react-icons/bs";

const Similar = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#633426] mb-10 text-center">
                You might also like
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

                {/* CARD1 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar1}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback1}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />


                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">

                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                {/* Tooltip */}
                                <span className="absolute right-12 top-1/2 -translate-y-1/2 
                     bg-black text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap">
                                    Add to cart
                                </span>
                            </div>

                        </div>


                    </div>


                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 759.00 <span className="line-through text-gray-400 ml-2">Rs. 1,999.00</span>
                    </p>
                </div>

                {/* CARD2 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar2}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback2}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />


                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span className="absolute right-12 top-1/2 -translate-y-1/2 
                         bg-black text-white text-xs px-2 py-1 rounded
                         opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap">
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 699.00 <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>
                {/* CARD3 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar3}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback3}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />

                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span className="absolute right-12 top-1/2 -translate-y-1/2 
                         bg-black text-white text-xs px-2 py-1 rounded
                         opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap">
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 999.00 <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>

                {/* CARD4 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar4}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback4}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />


                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span
                                    className="absolute right-12 top-1/2 -translate-y-1/2
                     bg-black text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap"
                                >
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 799.00{" "}
                        <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>

                {/* CARD5 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar5}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback5}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />


                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span
                                    className="absolute right-12 top-1/2 -translate-y-1/2
                     bg-black text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap"
                                >
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 899.00{" "}
                        <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>

                {/* CARD6 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar6}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback6}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />


                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span
                                    className="absolute right-12 top-1/2 -translate-y-1/2
                     bg-black text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap"
                                >
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 1299.00{" "}
                        <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>

                {/* CARD7 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100">

                        {/* Main Image */}
                        <img
                            src={similar7}
                            alt="product"
                            className="w-full transition duration-500 group-hover:opacity-0"
                        />

                        {/* Hover Image */}
                        <img
                            src={similarback7}
                            alt="product hover"
                            className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        />

                        <div className="absolute top-3 right-[-60px] group-hover:right-3 transition-all duration-500">
                            <div className="relative group/cart">
                                <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer">
                                    <BsCart size={18} />
                                </div>

                                <span
                                    className="absolute right-12 top-1/2 -translate-y-1/2
                     bg-black text-white text-xs px-2 py-1 rounded
                     opacity-0 group-hover/cart:opacity-100 transition whitespace-nowrap"
                                >
                                    Add to cart
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Info */}
                    <p className="mt-3 text-sm font-medium">
                        Polo - Speed Hunters Oversized
                    </p>
                    <p className="text-red-500 font-semibold">
                        Rs. 599.00{" "}
                        <span className="line-through text-gray-400 ml-2">Rs. 1,899.00</span>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Similar;
