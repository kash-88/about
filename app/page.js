import { Contact, Information, Header, Particles } from '#components'
import Head from 'next/head'

import './css/contact.css'
import './css/index.css'

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Kash - Personal portfolio</title>
            </Head>

            <Header />
            
            <div className='flex flex-col md:flex-row relative z-1'>
                <Contact />
                <Information />
            </div>

            <Particles />
        </>
    )
}