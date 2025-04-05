import { Button } from "@/components/ui/button";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
    HiOutlineUser,
} from "react-icons/hi2";

const Order = () => {
    return (
        <div className="max-w-container mx-auto py-16">
            <div className="flex items-center gap-8 mb-5">
                <h3 className="text-3xl font-bold text-darkSlate">Order ID: #5JDZEJ</h3>
                <p className="text-red-600 px-2.5 py-1 bg-red-200 inline rounded-md">
                    Undelivered
                </p>
            </div>

            <div className="flex justify-between">
                <div className="basis-1/2">
                    <h3 className="heading-tertiary">Order Item</h3>
                    <ul className="max-h-96 overflow-scroll mb-5">
                        <li className="flex gap-16 justify-between items-center py-5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightGray">
                            <div className="flex items-center gap-4">
                                <div className="max-w-[5] max-h-[5rem] rounded-md overflow-hidden">
                                    <img className="w-full h-full" src="/test.jpg" alt="bike" />
                                </div>
                                <p className="font-bold">1x</p>
                                <p>Classic Red Jogger Sweatpants</p>
                            </div>

                            <p className="font-bold">$48.99</p>
                        </li>
                    </ul>

                    <Button>Continue Shopping</Button>

                    <div className="mt-5 bg-lightGray p-5 rounded-md">
                        Estimated delivery:{" "}
                        <span className="font-bold">July 14, 06:00 PM</span>
                    </div>
                </div>

                <div className="basis-1/2 space-y-5 max-w-sm">
                    <div className="p-5 border-2 border-darkGray rounded-md">
                        <h3 className="heading-tertiary mb-5">Address & Contact</h3>
                        <ul className="text-textGray flex flex-col gap-2.5">
                            <li className="flex items-center gap-2.5">
                                <HiOutlineUser className="text-xl" />
                                David Beckham
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlineMapPin className="text-xl" />
                                Rudarska 6a, Nis
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlineEnvelope className="text-xl" />
                                davidbeckham@gmail.com
                            </li>
                            <li className="flex items-center gap-2.5">
                                <HiOutlinePhone className="text-xl" />
                                1815291925916
                            </li>
                        </ul>
                    </div>

                    <div className="p-5 border-2 border-darkGray rounded-md">
                        <h3 className="heading-tertiary mb-5">Order Summary</h3>
                        <ul className="text-textGray flex flex-col gap-2.5">
                            <li className="flex items-center justify-between gap-2.5">
                                <p>Total products</p>
                                <p>3</p>
                            </li>
                            <li className="flex items-center justify-between gap-2.5">
                                <p>Total quantity</p>
                                <p>5</p>
                            </li>
                            <li className="flex items-center justify-between gap-2.5 text-darkSlate font-bold">
                                <p>Total amount</p>
                                <p>$148.23</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;