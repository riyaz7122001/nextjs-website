import styles, { layout } from "@/styles/styles";
import Button from "./Button";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps
                </h2>
                <p className={`${styles.paragraph} max-w-[475px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa molestiae veniam tenetur. Necessitatibus qui veniam commodi atque saepe ipsa enim reiciendis optio. Mollitia, velit dolorem illum ex ratione repudiandae.
                </p>
                <Button styles="mt-10" />
            </div>
            <div className={layout.sectionImg}>
                <img src="/icons/card.png" alt="card" className="w-[100%] h-[100%] object-contain" />
            </div>
        </section>
    )
}

export default CardDeal