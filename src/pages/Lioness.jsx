import React, { useState } from "react";
import { FaShippingFast, FaBox, FaCartArrowDown, FaExchangeAlt } from "react-icons/fa";
import { FaStore, FaLandmark } from "react-icons/fa6";
import {
    RiAccountPinCircleFill,
    RiMapPinTimeFill,
    RiArrowLeftBoxFill,
    RiGift2Fill,
    RiInformationFill,
} from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { PiCursorClickFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const Lioness = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [activeTab, setActiveTab] = useState("Shipping");


    const faqData = {
        Shipping: [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
            {
                id: 5,
                question: "Will all the products be shipped out together?",
                answer: "Products may be shipped separately depending on warehouse availability. You will be notified for each shipment.",
            },
            {
                id: 6,
                question: "Can I change my delivery address or mobile number once the order has been placed?",
                answer: "Sorry, this is not possible once the order is placed. You may cancel the order before packing and place a new one.",
            },
            {
                id: 7,
                question: "Do you deliver internationally?",
                answer: "Currently, we deliver only within India.",
            },
            {
                id: 8,
                question: "What carriers do you use?",
                answer: "We use Delhivery, Xpressbees, Ecom Express, FedEx, Shipdelight & Bluedart.",
            },
            {
                id: 9,
                question: "I need a copy of my invoice for my order placed with Maxfashion. How do I go about with it?",
                answer: "All orders include an invoice. If you need another copy, contact us for a soft copy.",
            },
            {
                id: 10,
                question: "The package I received was damaged.",
                answer: "Please do not accept damaged packages and contact us immediately.",
            },
        ],
        "My Account": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],
        Orders: [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],
        Payment: [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],
        "Buy Now": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],
        Tracking: [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],
        "Return Process": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },

        ],

        "Returns & Exchange": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "Click & Collect": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "Gift Cards": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "Other Information": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "Landmark Rewards": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "In Store": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
        "Account Deletion": [
            {
                id: 1,
                question: "When will I receive my order?",
                answer: "Depending upon your address, the delivery time may vary. On each product's display page, you can enter your pin code to check delivery timelines.",
            },
            {
                id: 2,
                question: "What if I'm not home when my order arrives?",
                answer: "If you are unavailable, our delivery partner will contact you again to reschedule the delivery.",
            },
            {
                id: 3,
                question: "How do I track my order?",
                answer: "You can track your order through the 'My Orders' section in your account dashboard.",
            },
            {
                id: 4,
                question: "How do I track my order via my account?",
                answer: "Login to your account and go to My Orders to track your shipment status.",
            },
        ],
    };

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <>
            {/* MAIN LAYOUT */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-25">



                    {/* CONTENT */}
                    <div className="md:col-span-3 ">
                        <h1 className="text-3xl font-bold text-[#3d464d] mb-8 flex gap-3 items-center">
                            {activeTab === "Shipping" && <FaShippingFast />}
                            {activeTab === "My Account" && <RiAccountPinCircleFill />}
                            {activeTab === "Orders" && <FaBox />}
                            {activeTab === "Buy Now" && <FaCartArrowDown />}
                            {activeTab === "Tracking" && <RiMapPinTimeFill />}
                            {activeTab === "Return Process" && <RiArrowLeftBoxFill />}
                            {activeTab === "Returns & Exchange" && <FaExchangeAlt />}
                            {activeTab === "Click & Collect" && <PiCursorClickFill />}
                            {activeTab === "Gift Cards" && <RiGift2Fill />}
                            {activeTab === "Other Information" && <RiInformationFill />}
                            {activeTab === "Landmark Rewards" && <FaLandmark />}
                            {activeTab === "In Store" && <FaStore />}
                            {activeTab === "Account Deletion" && <TiUserDelete />}

                            {activeTab}
                        </h1>


                        <div className="border-t">
                            {faqData[activeTab]?.map((item) => (
                                <div key={item.id} className="border-b">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex justify-between items-center py-5 text-left font-medium cursor-pointer"
                                    >

                                        <span>{item.question}</span>
                                        <span
                                            className={`transition-transform ${openAccordion === item.id ? "rotate-180" : ""
                                                }`}
                                        >
                                            <IoIosArrowDown />
                                        </span>
                                    </button>


                                    {openAccordion === item.id && (
                                        <div className="pb-5 text-gray-600">
                                            {item.answer}
                                            <div className="flex items-center gap-3 mt-4 text-sm">
                                                <span>Did you find it helpful?</span>
                                                <button className="px-4 py-1 border  cursor-pointer">Yes</button>
                                                <button className="px-4 py-1 border cursor-pointer">No</button>
                                            </div>

                                        </div>

                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* SIDEBAR */}
                    <aside className="md:col-span-1 border lg p-4 h-fit">
                        <ul className="space-y-3 font-semibold text-gray-700 ">
                            <SidebarItem icon={<FaShippingFast />} label="Shipping" active={activeTab === "Shipping"} onClick={setActiveTab} />
                            <SidebarItem icon={<RiAccountPinCircleFill />} label="My Account" active={activeTab === "My Account"} onClick={setActiveTab} />
                            <SidebarItem icon={<FaBox />} label="Orders" active={activeTab === "Orders"} onClick={setActiveTab} />
                            <SidebarItem icon={<FaCartArrowDown />} label="Buy Now" active={activeTab === "Buy Now"} onClick={setActiveTab} />
                            <SidebarItem icon={<RiMapPinTimeFill />} label="Tracking" active={activeTab === "Tracking"} onClick={setActiveTab} />
                            <SidebarItem icon={<RiArrowLeftBoxFill />} label="Return Process" active={activeTab === "Return Process"} onClick={setActiveTab} />
                            <SidebarItem icon={<FaExchangeAlt />} label="Returns & Exchange" active={activeTab === "Returns & Exchange"} onClick={setActiveTab} />
                            <SidebarItem icon={<PiCursorClickFill />} label="Click & Collect" active={activeTab === "Click & Collect"} onClick={setActiveTab} />
                            <SidebarItem icon={<RiGift2Fill />} label="Gift Cards" active={activeTab === "Gift Cards"} onClick={setActiveTab} />
                            <SidebarItem icon={<RiInformationFill />} label="Other Information" active={activeTab === "Other Information"} onClick={setActiveTab} />
                            <SidebarItem icon={<FaLandmark />} label="Landmark Rewards" active={activeTab === "Landmark Rewards"} onClick={setActiveTab} />
                            <SidebarItem icon={<FaStore />} label="In Store" active={activeTab === "In Store"} onClick={setActiveTab} />
                            <SidebarItem icon={<TiUserDelete />} label="Account Deletion" active={activeTab === "Account Deletion"} onClick={setActiveTab} />
                        </ul>

                    </aside>
                </div>
            </div>

            {/* MOST POPULAR QUESTIONS */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-xl font-bold text-gray-700 mb-8">
                    Most popular questions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 cursor-pointer">
                    <ul className="space-y-4 list-disc list-inside">
                        <li>What if I'm not at home when my order arrives?</li>
                        <li>When will I receive my order?</li>
                        <li>What is your policy on returns or exchange?</li>
                    </ul>

                    <ul className="space-y-4 list-disc list-inside">
                        <li>How do I change my email address?</li>
                        <li>How do I return my products?</li>
                        <li>
                            If I have used a promo code to place my order, how is my refund calculated?
                        </li>
                    </ul>

                    <ul className="space-y-4 list-disc list-inside">
                        <li>How do I cancel an order?</li>
                        <li>
                            I just returned my products online. When will I receive my refund?
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

const SidebarItem = ({ icon, label, active = false, onClick }) => (
    <li>
        <button
            onClick={() => onClick(label)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded transition ${active ? "bg-gray-100 text-black" : "text-gray-600 hover:bg-gray-100"
                }`}
        >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
        </button>
    </li>
);


export default Lioness;
