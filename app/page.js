import { Contact, Information, Header, Particles } from '#components'

import './css/contact.css'
import './css/index.css'

export const metadata = {
  title: 'Kash - Personal portfolio',
}

export default function Portfolio() {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
            
            <Header />
            
            <div className='flex flex-col md:flex-row relative z-1'>
                <Contact />
                <Information />
            </div>

            <Particles />
        </>
    )
}