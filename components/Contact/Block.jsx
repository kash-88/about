'use client'

import { useState } from 'react';

export default function PortfolioInformation() {
    const [activeTab, setActiveTab] = useState('about');
    
    const data = {
        about: {
            name: 'About me',
            description: (
                <>I am a web developer specializing in building websites and web applications, as well as enhancing existing products. In my work, I actively learn and apply tools and technologies such as React, Next.js, and other popular libraries.

                I have intermediate experience in developing interfaces with Tailwind CSS and am also deepening my knowledge of classic JavaScript and TypeScript. Additionally, I create Discord bots.</>
            )
        },
        project: {
            name: 'My project',
            item: [
                { 
                    title: 'KAMISH', 
                    description: 'Discord gaming bot with mini-games on board!', 
                    link: [
                        { 
                            icon: 'bi-box-arrow-up-right', 
                            url: 'https://kamish-page.vercel.app/'
                        }
                    ]
                }
            ]
        },
        stack: {
            name: 'My stack',
            icon: [
                { name: 'Node.js', icon: 'https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226034.png', star: 5 },
                { name: 'React', icon: 'https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226053.png', star: 4 },
                { name: 'Discord.js', icon: 'https://avatars.githubusercontent.com/u/26492485?s=280&v=4', star: 5 },
                { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/96px-Unofficial_JavaScript_logo_2.svg.png', star: 4 },
                { name: 'Figma', icon: 'https://www.svgrepo.com/show/452202/figma.svg', star: 5 },
                { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png', star: 3 }
            ]
        }
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch(activeTab) {
            case 'about':
                return (
                    <p>{data.about.description}</p>
                );
            case 'project':
                return (
                    <div className="p-6 relative w-full">
                        {
                            data.project.item.map((item) => (
                            <div key={item.title} className="mb-4">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mb-2">{item.description}</p>

                                {
                                    item.link.map((link, linkIndex) => (
                                        <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" 
                                            className="inline-flex items-center text-blue-500 hover:text-blue-700"
                                        ><i className={`bi ${link.icon} mr-2`}></i></a>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            case 'stack':
                return (
                    <div className="p-6 relative w-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {data.stack.icon.map((tech, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                                    <span>{tech.name}</span>
                                    <div className="flex ml-auto">
                                        {[...Array(tech.star)].map((_, i) => (
                                            <i key={i} className="bi bi-star-fill text-yellow-400"></i>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div id='Contact-Div' className="w-full">
            <div id='Contact-Block' className='w-full'>
                <div className="p-6 relative w-full">
                    <div className="absolute top-0 right-0 flex bg-[#303030] rounded-tr-[25px]">
                        {
                            Object.keys(data).map((item) => (
                                <button key={item} onClick={() => handleTabChange(item)}
                                    className={`px-3 py-1 rounded-full text-sm ${activeTab === item ? ' text-white' : ''}`}
                                >{item}</button>
                            ))
                        }
                    </div>

                    <h2 className="text-2xl font-bold mb-4">{data[activeTab].name}</h2>
                    {
                        renderContent()
                    }
                </div>
            </div>
        </div>
    );
}