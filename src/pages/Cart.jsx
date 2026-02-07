import { useState } from "react";
import tee1 from "../assets/images/man.png";
import tee2 from "../assets/images/man2.png";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import rec1 from "../assets/images/oversize.png";
import rec2 from "../assets/images/redhoodie.png";
import rec3 from "../assets/images/sagewhite.png";
import rec4 from "../assets/images/man2.png";

const recommendations = [
    {
        id: 1,
        title: "Oversized Tee",
        price: 154,
        mrp: 499,
        img: rec1,
        category: "All",
    },
    {
        id: 2,
        title: "Red Hoodie",
        price: 100,
        mrp: 200,
        img: rec2,
        category: "Perfume",
    },
    {
        id: 3,
        title: "Sage White Tee",
        price: 614,
        mrp: 798,
        img: rec3,
        category: "Skin Care Combo",
    },
    {
        id: 4,
        title: "Classic Tee",
        price: 192,
        mrp: 275,
        img: rec4,
        category: "Home Gift Sets",
    },
];



const Cart = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Men Oversized Tee",
            price: 2999,
            size: "M",
            color: "Black",
            qty: 1,
            img: tee1,
        },
        {
            id: 2,
            name: "Classic Printed Tee",
            price: 2499,
            size: "L",
            color: "White",
            qty: 2,
            img: tee2,
        },
    ]);

    const increaseQty = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    return (
        <section className="w-full min-h-screen bg-[#f6f6f6] py-12">
            <div className="max-w-7xl mx-auto px-6">


                <div className="flex justify-center gap-6 mb-8 text-sm font-semibold">
                    <span className="text-[#633426]">BAG</span>
                    <span className="text-gray-400">----------</span>
                    <span className="text-gray-400">ADDRESS</span>
                    <span className="text-gray-400">----------</span>
                    <span className="text-gray-400">PAYMENT</span>
                </div>

                <h1 className="text-2xl font-semibold mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


                    <div className="lg:col-span-8 space-y-6">
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-6 rounded-lg hover:border border-[#633426] shadow-sm"
                                >
                                    <div className="flex gap-6">


                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-32 h-32 object-cover"
                                        />


                                        <div className="flex-1">
                                            <h2 className="text-lg font-semibold  text-[#633426]">
                                                {item.name}
                                            </h2>


                                            <p className="text-green-600 text-sm mt-1">
                                                In stock
                                            </p>

                                            <p className="text-sm mt-1">
                                                <span className="font-medium">Size:</span> {item.size} <br />
                                                <span className="font-medium">Colour:</span> {item.color}
                                            </p>

                                            <div className="flex items-center gap-4 mt-4">


                                                <div className="flex items-center border  overflow-hidden">
                                                    <button
                                                        onClick={() => decreaseQty(item.id)}
                                                        className="px-3 py-1 hover:bg-gray-100"
                                                    >
                                                        <HiMinusSmall />
                                                    </button>

                                                    <span className="px-4 font-medium">
                                                        {item.qty}
                                                    </span>

                                                    <button
                                                        onClick={() => increaseQty(item.id)}
                                                        className="px-3 py-1 hover:bg-gray-100"
                                                    >
                                                        <IoIosAdd />
                                                    </button>
                                                </div>


                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-md text-[#633426] hover:underline"
                                                >
                                                    Delete
                                                </button>

                                                <button className="text-md text-[#633426] hover:underline">
                                                    Save for later
                                                </button>

                                            </div>
                                        </div>


                                        <div className="text-right">
                                            <p className="text-xl font-semibold">
                                                ₹{item.price * item.qty}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )}

                        {/* Filter Buttons */}
                        <div className="flex gap-3 mb-6 flex-wrap">
                            {["All", "Skin Care Combo", "Perfume", "Home Gift Sets"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveFilter(item)}
                                    className={`px-4 py-1 border rounded-full text-sm transition
                                                ${activeFilter === item
                                            ? "bg-[#633426] text-white border-[#633426]"
                                            : "hover:bg-[#633426] hover:text-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}




                            {/* Product Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {recommendations.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white p-5 rounded-xl hover:border
              transition
             h-[320px] flex flex-col justify-between"
                                    >

                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-full h-40 object-contain mb-4"
                                        />

                                        <h3 className="text-sm font-medium leading-snug">
                                            {item.title}
                                        </h3>

                                        <div className="mt-2">
                                            <span className="text-[#633426] font-semibold">
                                                ₹{item.price}
                                            </span>
                                            <span className="text-gray-400 line-through text-xs ml-2">
                                                ₹{item.mrp}
                                            </span>
                                        </div>

                                        <button
                                            className="mt-3 w-full border border-[#633426]
                     text-[#633426] py-1.5 text-sm rounded
                     hover:bg-[#633426] hover:text-white transition"
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>


                    <div className="lg:col-span-4">
                        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                            <h2 className="text-lg  text-[#633426] font-semibold mb-4">
                                Order Summary
                            </h2>

                            <div className="flex justify-between text-sm mb-2">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <div className="flex justify-between text-sm mb-2">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div className="flex justify-between text-sm mb-4">
                                <span>Tax</span>
                                <span>₹0</span>
                            </div>

                            <div className="flex justify-between font-semibold border-t pt-4 mb-6">
                                <span>Total</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <button
                                disabled={cartItems.length === 0}
                                className="w-full bg-[#633426] text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;
