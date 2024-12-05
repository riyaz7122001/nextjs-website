import styles from "@/styles/styles";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section id="home" className={`sm:py-16 py-6 flex md:flex-row flex-col text-white w-full`}>
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start flex-1 xl:px-0 sm:px-16 px-6">
                <div className="flex flex-row items-center justify-around py-[6px] px-4 bg-discount-gradient text-discount-gradient rounded-[10px] mb-2">
                    <Image src="/icons/Discount.svg" alt="discount" width={32} height={32} />
                    <p className={`${styles.paragraph}`}>
                        <span className="text-white">30% </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Discount For</span> {' '}
                        <span className="text-white">1 Month </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Account</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Generation</span>
                        <br className="sm:block hidden" />
                    </h1>
                    <div className="ss:flex md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex justify-center items-center relative">
                <img src="/icons/robot.png" className="max-w-full max-h-full" alt="billing" />
            </div>
        </section>
    );
};

export default Hero;
