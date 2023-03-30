const Field = ({ type, value, label, name, checked }) => {
    return (

        <div className="ed-item form-item">
            <label htmlFor={name}>
                {label}
                <input
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={value}
                    defaultChecked={checked}
                >
                    
                </input>
            </label>

        </div>
    )
}

export default Field