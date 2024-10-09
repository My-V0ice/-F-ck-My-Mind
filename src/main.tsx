import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Header} from "@widgets/header";
import {MainPage} from "@pages/main";
import {GalleryPage} from "@pages/gallery";
import {ProjectsPage} from "@pages/projects";
import {CertificationPage} from "@pages/certification/ui/CertificationPage.tsx";
import {ContactPage} from "@pages/contact";
import './index.scss';

import ScrollToTop from '@features/ScrollToTop/ScrollToTop.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/certifications" element={<CertificationPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
