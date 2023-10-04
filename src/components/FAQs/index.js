import './index.css'

const FAQs = () => (
    <div className='faqs-container'>
        <div className='faqs-details'>
            <h1 className='faqs-head'>Frequently Asked <span className='questions'>Questions</span> </h1>
            <p >You can book massages 7 days a week from 6 am to 11 pm, including public holidays.</p>
        </div>
        <div className='faqs-list'>
            <div className='faq-item'>
                <div className='faq-question'>
                    <h5 >How far is nearset bus station ?</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M27 22.5L18 13.5L9 22.5" stroke="#1D263A" stroke-width="3.08333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            </div>
            <div className='faq-item faq-question'>
                <h5 >What Makes Us Different</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M9 13.5L18 22.5L27 13.5" stroke="#1D263A" stroke-width="3.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='faq-item faq-question'>
                <h5 >What Time Is Checking Out?</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M9 13.5L18 22.5L27 13.5" stroke="#1D263A" stroke-width="3.08333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
        </div>
    </div>
)

export default FAQs