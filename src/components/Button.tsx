const Button = ({ styles }: { styles: string }) => {
    return (
        <button type="button" className={`md:py-4 py-3 md:px-6 px-5 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
            Get Started
        </button>
    )
}

export default Button