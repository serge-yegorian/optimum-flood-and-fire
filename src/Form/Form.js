import './Form.scss'
function Form() {
    return (
        <section className="form">
            <form>
                <div className='form__small-fields'>
                <div className='form__div'>
                    <label className='form__label'>Name:</label>
                    <input id="name" name='name' className='form__input' type='text' />
                </div>
                <div className='form__div'>
                    <label className='form__label'>Email:</label>
                    <input id="email" name='email' className='form__input' type='email' />
                </div>
                <div className='form__div'>
                    <label className='form__label'>Phone:</label>
                    <input id="phone" name='phone' className='form__input' type='phone' />
                </div>
                </div>
                <div className='form__big-field'>
                    <label className='form__label'>How can we help:</label>
                    <textarea></textarea>
                </div>
            </form>
        </section>
    )
}

export default Form;