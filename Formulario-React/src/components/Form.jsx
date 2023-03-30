const Form = ({children, submit, formRef}) => {
    return (

        <div className="ed-grid">
            <form className="ed-container l-30" onSubmit={submit} ref={formRef}>
            {children}
            </form>
        </div>
    )
}

export default Form