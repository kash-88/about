import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'

import Header from './page/main/Header.jsx'
import Portfolio from './page/portfolio/index.jsx'
import ParticlesBackground from "./page/components/ParticlesBackground.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
        <div className='relative z-1'>
            <Header />
            <Portfolio />
        </div>

        <ParticlesBackground />
        </BrowserRouter>
    </StrictMode>,
)
