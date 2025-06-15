import { faq } from "./FaqDatat"
import Faq from './Faq'
function MapFaq (){

    const content = (
        <div>
            {
                faq.map((fa) =>{
                    return <Faq key={fa.id } fa={fa} />
                })
            }
        </div>
    )
    return (

        <section data-aos="zoom-in" className="py-6 sm:px-6 px-2 bg-blue-100 mx-auto">
        <h2 className="sm:text-4xl my-3 text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 mt-2 mb-10">
            {content}
        </div>
    </section>
    )
}

export default MapFaq