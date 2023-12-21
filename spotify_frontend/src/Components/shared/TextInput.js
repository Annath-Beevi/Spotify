const TextInput = ({label, placeholder}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-80">
            <label for={label} className="font-bold text-white mt-3">{label}</label>
            <input type="text" placeholder={placeholder}
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label} />
        </div>
    )
}

export default TextInput