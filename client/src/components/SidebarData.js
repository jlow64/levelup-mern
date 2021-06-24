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
        className: 'nav-text'
    },
    {
        title: 'Scratch',
        path: '/scratch',
        icon: <IoIcons.IoRocketOutline />,
        className: 'nav-text'
    },
    {
        title: 'My Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineProject />,
        className: 'nav-text'
    },
    {
        title: 'My Awards',
        path: '/awards',
        icon: <AiIcons.AiOutlineStar />,
        className: 'nav-text'
    },
    {
        title: 'Class Information',
        path: '/class_information',
        icon: <BiIcons.BiMessageError />,
        className: 'nav-text'
    },
    {
        title: 'Log Out',
        path: '/',
        icon: <IoIcons.IoLogOutOutline />,
        className: 'nav-text'
    }
]