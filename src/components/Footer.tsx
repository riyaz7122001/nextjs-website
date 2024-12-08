import { footerLinks } from "@/constants"
import styles from "@/styles/styles"

const socialMedia = [
    {
        id: "social-media-1",
        icon: "/icons/instagram.svg",
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: "/icons/facebook.svg",
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: "/icons/twitter.svg",
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: "/icons/linkedin.svg",
        link: "https://www.linkedin.com/",
    },
];

const Footer = () => {
    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mt-8 w-full`}>
                <div className="flex flex-col flex-1 justify-start mr-10">
                    <img src="/icons/logo.svg" alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10`}>
                    {footerLinks.map((footer) => (
                        <div key={footer.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footer.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footer.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footer.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3F3E45] mt-6">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    2024 HooBank. All Rights Reserved.
                </p>
                <div className="flex flex-row mt-6">
                    <div className="flex flow-row md:mt-0 mt-6">
                        <img src="/icons/instagram.svg" alt="1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    </div>
                    <div className="flex flow-row md:mt-0 mt-6">
                        <img src="/icons/facebook.svg" alt="1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    </div>
                    <div className="flex flow-row md:mt-0 mt-6">
                        <img src="/icons/twitter.svg" alt="1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    </div>
                    <div className="flex flow-row md:mt-0 mt-6">
                        <img src="/icons/linkedin.svg" alt="1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer