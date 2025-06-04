import Link from '../components/ButtonLink.jsx'
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const Ref = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) return;

        function handleClick(event) {
            if (Ref.current && !Ref.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const data = {
        title: 'KASH',
        nav: [
            {
                title: 'Project',
                url: '/#project'
            },{
                title: 'Skills',
                url: '/#skills'
            },{
                title: 'GitHub',
                url: 'https://github.com/kamish522'
            },{
                title: 'Discord',
                url: 'https://discord.gg/jrTvtRXeSn'
            },{
                title: 'Telegram',
                url: 'https://t.me/Kash8_8'
            }
        ]
    }

    return (
        <header id={isScrolled ? 'scrolled enable' : null} ref={Ref}>
            <div className="container mx-auto px-5 md:px-7 lg:px-10">
                <div className="relative flex h-16 items-center justify-between">
                    <a href="/" className="text-2xl font-bold flex-shrink-0">{data.title}</a>

                    <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
                        {
                            data.nav.map(item => (
                                <Link to={item.url} key={item.title} className="text-md font-medium">
                                    {item.title}
                                </Link>
                            ))
                        }
                    </nav>

                    <div className="flex md:hidden">
                        <button className='cursor-pointer' onClick={() => {
                            setIsMenuOpen(data => { const newData = !data; if (newData) setIsScrolled(true); return newData}); 
                        }}>
                            <img src="https://kamish.pro/storage/site/svg/menu.svg" alt="menu" className="w-25 h-20"/>
 					    </button>
					</div>
                </div>
            </div>

            <ul id={isMenuOpen ? 'menu' : null} ref={Ref} className={
                isMenuOpen ? 'md:hidden' : 'hidden'
            }>{
                data.nav.map((el, id) => (
                    <li key={id}>
                        <a href={el.link} 
                            className='flex items-center text-[20px] p-[15px] cursor-pointer hover:bg-[#2a2a2a]' 
                            onClick={() => setIsMenuOpen(false)}
                        >{el.title}</a>
                    </li>
                ))
            }</ul>
        </header>
    )
}