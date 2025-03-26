import Lottie from "lottie-react";

import PageNotFoundLottie from "../lotties/PageNotFoundLottie.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMoveBack } from "../hooks/useMoveBack";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    const moveBack = useMoveBack();

    return (
        <div className="h-screen">
            <Header />
            <div className="max-w-container mx-auto flex items-center justify-between p-5">
                <div className="space-y-4">
                    <h1 className="text-9xl font-bold tracking-wider">OOPS</h1>
                    <p className="text-2xl">Page not found!</p>

                    <div className="space-x-4">
                        <button className="px-4 py-2.5 bg-lightGray rounded-full">
                            <Link to="/">Go Home</Link>
                        </button>

                        <button
                            onClick={moveBack}
                            className="px-4 py-2.5 bg-darkSlate text-white rounded-full"
                        >
                            &larr; Go Back
                        </button>
                    </div>
                </div>

                <div className="max-w-xl">
                    <Lottie animationData={PageNotFoundLottie} loop={true} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PageNotFound;