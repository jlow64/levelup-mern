import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardLine />,
        className: 'nav-text',
        logout: false
    },
    {
        title: 'Scratch',
        path: '/scratch',
        icon: <IoIcons.IoRocketOutline />,
        className: 'nav-text',
        logout: false
    },
    {
        title: 'My Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineProject />,
        className: 'nav-text',
        logout: false
    },
    {
        title: 'My Awards',
        path: '/awards',
        icon: <AiIcons.AiOutlineStar />,
        className: 'nav-text',
        logout: false
    },
    {
        title: 'Class Information',
        path: '/class_information',
        icon: <BiIcons.BiMessageError />,
        className: 'nav-text',
        logout: false
    },
    {
        title: 'Log Out',
        path: '/login',
        icon: <IoIcons.IoLogOutOutline />,
        className: 'nav-text',
        logout: true
    }
]