import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Separator } from "@/components/ui/separator"
  import {
    SidebarTrigger,
  } from "@/components/ui/sidebar"
import { ModeToggle } from '@/components/utils/modeToggle'
import { Search } from '@/components/search'
import LogoutBtn from '@/components/auth/logoutBtn'

export default function Header() {

  return (
    <header className="flex flex-col gap-7 justify-between items-start  shrink-0  transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-15">
     <div className='flex justify-between items-center w-full'>
      <div className='flex gap-1 justify-start items-center'>

      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
        <Search/>
      </div>
    <div className='flex gap-3 items-center' >
      <ModeToggle />
      <LogoutBtn/>
    </div>

     </div>
      
    <div className="flex items-center gap-2">
      
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">
              Building Your Application
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
  )
}
