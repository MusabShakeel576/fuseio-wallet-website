"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Logo } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { Twitter } from "lucide-react"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
	const { theme } = useTheme()

	useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

	return (
		<nav className="fixed w-full z-20 top-0 left-0">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Logo theme={theme} />
				<div className="flex items-center justify-between space-x-4 md:order-2">
					<ModeToggle />
					<Twitter className="h-[1.2rem] w-[1.2rem] hidden md:flex" />
					<button type="button" className="bg-primary text-primary-foreground hidden md:flex rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0">Build on Fuse</button>
					<button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
						</svg>
					</button>
				</div>
				<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
					<ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-primary md:p-0">Network</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-primary md:p-0">Developers</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-primary md:p-0">Solutions</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 text-primary md:p-0">Tools</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}