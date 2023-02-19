import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, LifebuoyIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      <div className="fixed mx-auto max-w px-2 sm:px-6 lg:px-8 z-50 ">
        <div className="relative flex h-16 justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="ml-4 sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <Link
                href="/leaderboard"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Spacer */}
      <div className='fixed h-16 w-full bg-red-500'></div>
    </>

  )
}