import { arrowUp } from "@/constants";
import styles from "@/styles/styles";
import Image from "next/image";

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full border-4 border-gradient-to-r 
        from-white to-[#5CE1E6] cursor-pointer p-[2px] border-[#5CE1E6] md:mr-24 sm:block hidden`}>
            <div className="flex justify-center items-center bg-primary flex-col w-[100%] h-[100%] rounded-full 
            border-gradient-to-r from-white to-[#5CE1E6]">
                <div className="flex justify-center items-start flex-row">
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">
                            Get
                        </span>
                    </p>
                    <Image src={arrowUp} alt="arrow-up" width={23} height={23} />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">
                        Started
                    </span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted;