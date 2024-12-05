import { arrowUp } from "@/constants";
import styles from "@/styles/styles";

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full 
        border-4 bg-white border-gradient-to-r from-white to-[#5CE1E6] 
        cursor-pointer p-[2px]`}>
            <div className="flex justify-center items-center flex-col w-[100%] h-[100%] rounded-full"></div>
        </div>
    )
}

export default GetStarted;