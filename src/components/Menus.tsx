const Menus = ({ title, onClick }: { title: string, onClick?: () => void }) => {
    return (
        <li
            className="font-poppins font-normal cursor-pointer text-[16px] text-white menu"
            onClick={onClick}
        >
            {title}
        </li>
    )
}

export default Menus
