export default function PortfolioContact() {
    const data = {
        link: [
            {
                title: 'EMAIL',
                icon: 'bi-envelope-at-fill',
                href: (<a href='mailto:ipomainkra@gmail.com'>ipomainkra@gmail.com</a>)
            },
            {
                title: 'LOCATION',
                icon: 'bi-geo-alt-fill',
                href: (<a href=''>Russia</a>)
            }
        ]
    }

    return (
        <div id='Contact-Div'>
            <div id='Contact-Block'>
                <div id='Contact-Bio' className='px-8 py-8'>
                    <div id='Contact-Avatar-Div'>
                        <img src='/storage/site/icon.png' id='Contact-Avatar' className='w-25 h-25 md:w-30 md:h-30'/>
                    </div>

                    <div id='Contact-Name' className='font-bold'>Kash</div>
                    <div id='Contact-Work'>Full-stack Developer</div>
                </div>

                <div className='px-4'>
                    <div id='Contact-Separator'/>
                </div>

                <div id='Contact-Info' className='px-8 py-4'>
                    {
                        data.link.map((item) => (
                            <div key={item.title} id='Contact-Info-Div'>
                                <div id='Contact-Info-Icon'><i className={"bi " + item.icon} /></div>
                                <div>
                                    <div id='Contact-Info-Title'>{item.title}</div>
                                    <div id='Contact-Info-Data'>{item.href}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}