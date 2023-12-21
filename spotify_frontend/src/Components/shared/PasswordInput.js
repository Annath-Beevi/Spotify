const PasswordInput = ({label, placeholder}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-80">
            <label for={label} className="font-bold mt-3 text-white">{label}</label>
            <input type="password" placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label} />
        </div>
    )
}

export default PasswordInput