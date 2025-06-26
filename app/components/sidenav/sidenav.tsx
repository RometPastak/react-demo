"use client";

import { SideNav } from "@tehik-ee/tedi-react/tedi";
import { useState } from "react";

export default function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 h-full">
            <SideNav.Toggle menuOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
            <SideNav 
                ariaLabel="Menu title" 
                isMobileOpen={isOpen}
                showMobileOverlay={true}
                navItems={[
                    {
                        children: 'Home',
                        href: '/',
                        icon: 'home'
                    },
                    {
                        children: 'Select',
                        href: '/select',
                        icon: 'lists'
                    }
                ]}
            />
        </div>
    );
}