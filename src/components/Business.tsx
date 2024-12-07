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

            <div className={layout.sectionImg}>
                {features.map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
        </section>
    )
}

export default Business

const FeatureCard = ({ id, icon, title, content }: any) => {
    return (
        <div className="flex flex-row">
            <div>
                <img src={icon} alt={`${title}`} className="w-[50%] h-[50%] object-contain" />
            </div>
        </div>
    )
}