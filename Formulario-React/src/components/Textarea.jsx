const textarea = ({value, label, name }) => {
    return (

        <div className="ed-item form-item">
            <label htmlFor={name}>
                {label}
                <textarea
                    name={name}
                    id={name}
                    defaultValue={value}
                >
                    
                </textarea>
            </label>

        </div>
    )
}

export default textarea