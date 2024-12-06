"use client";
import styles from "@/styles/styles";
import Image from "next/image";
import "@/styles/globals.css"
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section id="home" className={`sm:py-16 py-6 flex md:flex-row flex-col text-white w-full`}>
            {/* Left Section */}
            <div className="flex flex-col justify-start md:mt-16 items-start flex-1 xl:px-0 sm:px-16 px-6 gap-y-6">
                <div className="flex flex-row items-center justify-around py-[6px] px-4 bg-discount-gradient text-discount-gradient rounded-[10px]">
                    <Image src="/icons/Discount.svg" alt="discount" width={32} height={32} />
                    <p className={`${styles.paragraph}`}>
                        <span className="text-white">30% </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Discount For</span> {' '}
                        <span className="text-white">1 Month </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Account</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-4">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[96px] text-[64px] ss:leading-[114px] leading-[80px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Generation</span>
                        <br className="sm:block hidden" />
                    </h1>
                    <div className="ss:flex md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[96px] text-[64px] ss:leading-[114px] leading-[80px] w-full md:mt-[-12px]">
                    Payment Method.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] text-[16px] text-gray-400 mt-4`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 justify-end items-end">
                <img src="/icons/robot.png" className="max-w-full max-h-ful relative z-[5]" alt="billing" />

                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
            </div>
        </section>
    );
};

export default Hero;
