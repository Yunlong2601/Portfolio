import React from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { HEADER_ITEMS } from '@/const'
import { asset } from '@/lib/utils'
import { ThemeToggle } from '../custom/theme-toggle'

const AppHeader = () => {
  const headerList = HEADER_ITEMS

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="app-container py-5 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-primary font-extrabold text-2xl uppercase tracking-wide">
          Shen Yunlong
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {headerList.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary font-semibold transition duration-300 text-sm cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}

          <li>
            <a
              href={asset('/resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 font-semibold"
              >
                View Resume
              </Button>
            </a>
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-max px-6">
              <ul className="flex flex-col items-end space-y-6 mt-10">
                {headerList.map((item) => (
                  <li
                    key={item.id}
                    className="hover:text-primary font-semibold transition duration-300 text-sm cursor-pointer"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}

                <li>
                  <a
                    href={asset('/resume.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="min-w-32 bg-orange-500 hover:bg-orange-600 font-semibold"
                    >
                      Download CV
                    </Button>
                  </a>
                </li>

                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
