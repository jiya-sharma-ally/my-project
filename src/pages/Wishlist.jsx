import { useState } from "react";
import { X } from "lucide-react";


import img1 from "../assets/images/w1.png";
import img2 from "../assets/images/w2.png";
import img3 from "../assets/images/w3.png";
import img4 from "../assets/images/w4.png";

const initialWishlist = [
  {
    id: 1,
    title: "Naruto Shippuden: Konoha Leaf",
    subtitle: "Oversized Full Sleeve T-Shirts",
    price: 1199,
    mrp: 1299,
    img: img1,
  },
  {
    id: 2,
    title: "Minions: Blah Blah Blah",
    subtitle: "Oversized T-Shirts",
    price: 849,
    mrp: 899,
    img: img2,
  },
  {
    id: 3,
    title: "The Flash: Barry Allen",
    subtitle: "Oversized Jerseys",
    price: 1099,
    mrp: 1199,
    img: img3,
  },
  {
    id: 4,
    title: "HTTYD: Night Fury Chibi",
    subtitle: "Oversized T-Shirts",
    price: 749,
    mrp: 799,
    img: img4,
  },
];

const Wishlist = () => {
  const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState("Added to cart");
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
const moveToCart = (item) => {
 
  setToastMessage(`${item.title} added to cart`);
  setShowToast(true);

  
  setTimeout(() => {
    setShowToast(false);
  }, 2500);
};


  const removeFromWishlist = (id) => {
    setWishlistItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <section className="w-full mt-25 bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-lg font-semibold mb-6">
          My Wishlist{" "}
          <span className="text-gray-500">
            ({wishlistItems.length} items)
          </span>
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border-[#633426] rounded-lg overflow-hidden relative shadow-sm hover:border transition cursor-pointer  "
              >
                
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100 cursor-pointer"
                >
                  <X size={14} />
                </button>

              
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-sm font-semibold leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-2">
                    {item.subtitle}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-0.5 rounded">
                      Membership Price ₹{item.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ₹{item.mrp}
                    </span>
                  </div>

                  {/* Button */}
                  <button
  onClick={() => moveToCart(item)}
  className="w-full text-sm font-semibold text-[#633426] border-t pt-3 hover:text-teal-900 cursor-pointer"
>
  MOVE TO CART
</button>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showToast && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-black text-white px-5 py-3 rounded-md shadow-lg text-sm animate-slide-up">
      {toastMessage}
    </div>
  </div>
)}

    </section>
  );
};

export default Wishlist;
