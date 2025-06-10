"use client"

import { Link } from '#components'

import { useState, useEffect, useRef } from "react";

export default function Header() {
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
                url: 'https://github.com/kash-88'
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
        <header id='scrolled enable' ref={Ref}>
            <div className="container mx-auto px-5 md:px-7 lg:px-10">
                <div className="relative flex h-10 md:h-14 items-center justify-between">
                    <a href="/" className="text-1xl md:text-2xl font-bold flex-shrink-0">{data.title}</a>

                    <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
                        {
                            data.nav.map(item => (
                                <Link href={item.url} key={item.title} className="text-md font-medium">
                                    {item.title}
                                </Link>
                            ))
                        }
                    </nav>

                    <div className="hidden md:flex items-center">
                        <Link href='/login' key='Login' className="text-md font-medium ml-6">
                            Login
                        </Link>
                    </div>

                    <div className="flex md:hidden">
                        <button className='cursor-pointer' onClick={() => {
                            setIsMenuOpen(data => {
                                const newData = !data; return newData
                            }); 
                        }}>
                            <img src="https://kamish.pro/storage/site/svg/menu.svg" alt="menu" className="w-25 h-20"/>
                        </button>
                    </div>
                </div>
            </div>

            <ul id={isMenuOpen ? 'menu' : null} ref={Ref} className={isMenuOpen ? 'md:hidden' : 'hidden'}>
            
            {
                data.nav.map((el, id) => (
                    <li key={id}>
                        <a href={el.link} 
                            className='flex items-center px-5 text-[15px] p-[10px] cursor-pointer hover:bg-[#2a2a2a]' 
                            onClick={() => setIsMenuOpen(false)}
                        >{el.title}</a>
                    </li>
                ))
            }

                <li>
                    <Link href='/login' key='LoginMobile' className="flex items-center px-5 text-[15px] p-[10px] cursor-pointer hover:bg-[#2a2a2a]" onClick={() => setIsMenuOpen(false)}>
                        Login
                    </Link>
                </li>
            </ul>
        </header>
    )
}