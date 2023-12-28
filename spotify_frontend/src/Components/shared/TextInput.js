const TextInput = ({label, placeholder, value, setValue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label htmlFor={label} className="font-semibold text-white mt-6">{label}</label>
            <input type="text" placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label} value={value} onChange={(e) => {
                    setValue(e.target.value)
                }} />
        </div>
    )
}

export default TextInput