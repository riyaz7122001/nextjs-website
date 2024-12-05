import styles from "@/styles/styles";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section
            id="home"
            className={`sm:py-16 py-6 flex md:flex-row flex-col text-white`}>
            <div className={`flex flex-col justify-center items-start flex-1 xl:px-0 sm:px-16 px-6`}>
                <div className={`flex flex-row items-center justify-around py-[6px] px-4 bg-discount-gradient text-discount-gradient rounded-[10px] mb-2 text-${styles.glass}`}>
                    <Image src={"/icons/Discount.svg"} alt="discount" width={32} height={32} />
                    <p className={`${styles.paragraph}`}>
                        <span className="text-white">30% </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Discount For</span> {' '}
                        <span className="text-white">1 Month </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Account</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                        The Next <br className="sm:block hidden" />{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">Generation</span>
                        <br className="sm:block hidden" /> Payment Method.
                    </h1>
                    <div className="ss:flex md:mr-4 mr-0 text-white">
                        <GetStarted />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
