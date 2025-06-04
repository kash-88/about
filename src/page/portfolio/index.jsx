import Link from '../components/ButtonLink.jsx'
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Добро пожаловать!';
  }, []);

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
          description: 'Gaming bot for discord', 
          link: [
            { 
              icon: 'bi-box-arrow-up-right', 
              url: 'https://kamish-page.vercel.app/'
            }
          ]
        }
      ]
    }
  }

  return (
    <><div className="flex flex-col md:flex-row pt-22 pb-8 px-3 md:px-5 gap-8">

      {/** Main Block */}
      <div className="flex flex-col px-4 py-4 rounded-lg shadow-md border border-[#1f1f1f] bg-[#1c1c1c] w-full md:w-1/2">
        <div className="flex items-center justify-center mb-4">
          <div className="text-3xl font-semibold">{data.main.title}</div>
        </div>

        <div className="text-[15px] text-gray-200">
          {data.main.description}
        </div>
      </div>
          
      {/** Project Block */}
      <div className="flex flex-col px-4 py-4 rounded-lg shadow-md border border-[#1f1f1f] bg-[#1c1c1c] w-full md:w-1/2">
        <div className="flex items-center justify-center mb-4">
          <div className="text-3xl font-semibold">{data.project.title}</div>
        </div>

        <div>
          {
            data.project.item.map(item =>
              <div key={item.title} className="flex bg-[#171717] rounded-lg px-3 py-3 items-center space-x-1">
                <div>{item.title}</div>
                <span>−</span>
                <div className="text-[13px]">{item.description}</div>

                <div className='flex items-center ml-auto'>
                  {
                    item.link.map(link => 
                      <Link to={link.url} key={link.icon}>
                        <i className={`bi ${link.icon}`}></i>
                      </Link>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

                  {/** Stack Block */}

        <div className="flex flex-col md:flex-row px-3 md:px-5 gap-8">
          <div className="w-full flex flex-col px-4 py-4 bg-[#1c1c1c] rounded-lg shadow-md">
            <span className="font-semibold">Мои навыки</span>
          </div>
        </div>
        
        </>
  );
}