export default function PortfolioContact() {
  return (
    <>
        <div id='Contact-Div'>
            <div id='Contact-Block'>
                <div id='Contact-Bio' className='px-8 py-8'>
                    <div id='Contact-Avatar-Div'>
                        <img src='/storage/site/icon.png' id='Contact-Avatar' className='w-25 h-25 md:w-30 md:h-30'/>
                    </div>

                    <div id='Contact-Name' className='font-bold'>Kash</div>
                    <div id='Contact-Work'>Web Developer</div>
                </div>

                <div className='px-4'>
                    <div id='Contact-Separator'/>
                </div>

                <div id='Contact-Info' className='px-8 py-4'>
                    <div className='Contact-Info-Div'>
                        <div className='Contact-Info-Icon'>...</div>
                        <div className='Contact-Info-Title'>EMAIL</div>
                        <div className='Contact-Info-Data'><a href='mailto:ipomainkra@gmail.com'>ipomainkra@gmail.com</a></div>
                    </div>

                    <div className='Contact-Info-Div'>
                        <div className='Contact-Info-Icon'>...</div>
                        <div className='Contact-Info-Title'>Location</div>
                        <div className='Contact-Info-Data'><a href=''>Russia</a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}