import Link from '../components/ButtonLink.jsx'
import { useEffect } from 'react';

export default function PortfolioInformation() {
  function Stars({ count, className }) {
    const stars = '⭐'.repeat(count);

    return <div className={className}>{stars}</div>;
  }

  const data = {
    main: {
      title: 'Hello, I\'m Kash!',
      description: (
        <>Я — Full-Stack разработчик с опытом создания сайтов и Discord-приложений. Люблю изучать что-то новое и постоянно развиваться. Основной язык — <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-300 bg-clip-text text-transparent">JavaScript</span></>
      )
    },
    project: {
      title: 'My project',
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
      title: 'My stack',
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

  return (
    <>
<div id='Contact-Div'>
            <div id='Contact-Block' className='text-[#1c1c1c]'>
                About me
A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs, UI/UX, widgets, and state management solutions. Proven track record in delivering cutting-edge solutions, including API integration, third-party libraries, and performance optimization. Adept at debugging to ensure high-quality, responsive apps and An agile collaborator committed to staying current with industry trends.

If you're seeking a skilled Flutter developer to breathe life into your project and exceed your expectations, I am here to collaborate and create magic together. Reach out, and let's transform your vision into a reality!

What i'm doing
mobile app icon
Mobile Apps
Professional development of applications for Android and ios.

Web development icon
Web development
High-quality development of sites at the professional level.

design icon
UI/UX Design
The most modern and high-quality design made at a professional level.

camera icon
Backend Development
High-performance backend services designed for scalability and seamless user experience.


Skills
            </div>
        </div>
    </>
  );
}