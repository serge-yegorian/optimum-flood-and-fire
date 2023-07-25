import './CTA.scss';
export default function CTA() {
    return (
        <section className='cta'>
            <div className='cta__div'>
                <h2 className='cta__heading'>Why Optimum:</h2>
                <ul className='cta__list'>
                    <li className='cta__item'><span className="cta__bold">Timely:</span>  We do not waste your time and finish work as fast as we can</li>
                    <li className='cta__item'><span className="cta__bold">Cost-Effective:</span> Our services not only save your home, but also save you money</li>
                    <li className='cta__item'><span className="cta__bold">Local Expertise:</span> Operating exclusively in Southeast Florida, we bring specialized knowledge to meet your region's unique needs</li>
                </ul>
            </div>
                <div className='cta__div'>
                    <a className='cta__button' href='#header'>Recover my house</a>
                </div>
        </section>
    )

}