import { Link, useParams } from "react-router-dom";

import men1 from "../assets/images/men1.png";
import men2 from "../assets/images/men2.png";
import men3 from "../assets/images/men3.png";

const CategoryPage = () => {
  const { category } = useParams();

  const title = category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const products = [
    { id: 1, img: men1, name: `${title} Classic`, price: "₹999" },
    { id: 2, img: men2, name: `${title} Premium`, price: "₹1,299" },
    { id: 3, img: men3, name: `${title} Street Style`, price: "₹1,499" },
  ];

  return (
    <section className="min-h-screen bg-[#fdf7f4] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-extrabold text-[#633426] mb-12">
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="h-[300px] bg-[#eee] flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {product.name}
                </h3>
                <p className="font-bold mt-1">{product.price}</p>

                {/* 👇 THIS IS IMPORTANT */}
                <Link to={`/product/${product.id}`}>
                  <button className="mt-4 w-30 bg-black text-white py-2 rounded-xl">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryPage;
