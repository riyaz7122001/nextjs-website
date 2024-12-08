import styles from "@/styles/styles"

const clients = [
    {
        id: "client-1",
        logo: "/icons/airbnb.png",
    },
    {
        id: "client-2",
        logo: "/icons/binance.png",
    },
    {
        id: "client-3",
        logo: "/icons/coinbase.png",
    },
    {
        id: "client-4",
        logo: "/icons/dropbox.png",
    },
];

const Clients = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full sm:min-w-[192px] min-w-[120px]`}>
                {clients.map((client) => (
                    <div key={client.id} className={`${styles.flexCenter} flex-1`}>
                        <img src={client.logo} alt={client.id} className="sm:w-[192px] w-[100px] object-contain" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients