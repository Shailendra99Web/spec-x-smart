'use client'
import { Calendar, FileText, Glasses, Headset, Home, Inbox, Menu, MessageCircleQuestion, ScanEye, Search, Settings, X } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Specx",
        url: "#",
        icon: Glasses,
    },
    {
        title: "Book An Eye Exam",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Eye XBucks",
        url: "#",
        icon: ScanEye,
    },
    {
        title: "About Us",
        url: "#",
        icon: FileText,
    },
    {
        title: "FAQ",
        url: "#",
        icon: MessageCircleQuestion,
    },
    {
        title: "Contact Us",
        url: "#",
        icon: Headset,
    },
]

export function AppSidebar() {
    return (
        <div className="fixed left-0 z-50 h-full">
            <Sidebar className='h-full '>
                <SidebarContent className='bg-customColor3 '>
                    <div className="relative flex justify-end pt-2 pr-2">
                        <X className="text-gray-500" />
                        <SidebarTrigger className=' absolute h-full top-0 right-0 !bg-transparent' />
                    </div>
                    <SidebarGroup className='p-0'>
                        <SidebarGroupLabel className='justify-center items-center pb-2'>
                            <div id='logo' className='text-center mx-auto'>
                                <p className='text-customColor2 text-2xl font-bold pb-0 mb-0'>Spec<span className='text-customColor text-3xl'>X</span>Smart</p>
                                {/* <p className='text-[#c1c1c1] text-sm font-semibold pt-0 mt-0'>Eyewear Evolved</p> */}
                            </div>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className='!bg-customColor3'>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title} className=''>
                                        <SidebarMenuButton asChild className='text-primary hover:text-customColor hover:!bg-white'>
                                            <a href={item.url} className='rounded-none p-4'>
                                                <item.icon />
                                                <span className='font-bold'>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                {/* <SidebarFooter /> */}
            </Sidebar>
        </div>
    )
}
