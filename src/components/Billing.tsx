import styles, { layout } from "@/styles/styles"

const Billing = () => {
    return (
        <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6 relative">
            <div className={layout.sectionImgReverse}>
                <img src="/icons/bill.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            </div>
            <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient"></div>
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"></div>

            <div className={layout.sectionInfo}>
                <div className="flex flex-col flex-1 justify-center items-start">
                    <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white
                    xs:leading-[76.8px] leading-[66.8px]">Easily control your <br className="sm:block hidden" />
                        billing & invoicing.
                    </h2>
                    <p className={`${styles.paragraph} max-w-[475px] mt-5`} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus vel dolorem nobis molestiae itaque reprehenderit nam aliquam tempore odio, temporibus quasi repellat
                        commodi ipsum placeat inventore esse recusandae libero porro?
                    </p>
                    <div className="flex flex-row flex-wrap gap-8 sm:mt-10 mt-6">
                        <img src="/icons/apple.svg" alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
                        <img src="/icons/google.svg" alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Billing