import Contact from './Contact.jsx'
import Information from './Information.jsx';
import { useEffect } from 'react';

export default function Portfolio() {
    useEffect(() => {
        document.title = 'Kash - Personal portfiolio';
    }, []);

    return (
        <div className='flex flex-col md:flex-row'>
            <Contact />
            <Information />
        </div>
    );
}