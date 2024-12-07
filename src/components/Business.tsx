import { features } from "@/constants";
import Button from "./Button";
import styles, { layout } from "@/styles/styles";

const Business = () => {
    return (
        <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex flex-col flex-1 justify-center items-start">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white
                    xs:leading-[76.8px] leading-[66.8px]">You do the business, <br className="sm:block hidden" />
                    we'll handle the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[475px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sunt, blanditiis hic reiciendis nam sapiente totam! Debitis autem quo, deleniti dolorum, dolor blanditiis eveniet minus consequatur reiciendis labore, perferendis laboriosam.
                </p>
                <Button styles="mt-10" />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
        </section>
    )
}

export default Business

const FeatureCard = ({ id, icon, title, content, index }: any) => {
    return (
        <div className={`flex flex-row p-6 gap-x-2 rounded-[20px]  ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card `}>
            <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                <img key={id} src={icon} alt={`${title}`} className="w-[50%] h-[50%]" />
            </div>
            <div className="flex flex-col flex-1 ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">
                    {title}
                </h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div>
    )
}