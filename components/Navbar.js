import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  AdjustmentsIcon,
  BookmarkAltIcon,
  CalendarIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  LightningBoltIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  SupportIcon,
  VideoCameraIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { ChevronDownIcon } from '@heroicons/react/solid'

const services = [
  {
    name: 'Social Media Marketing',
    // description: 'To increase your visibility and reputation in Social Media. Choose the offer that suits you the best and speak with a member of our team to start quickly and easily.',
    description: 'To increase your visibility and reputation in Social Media .....',
    href: '#',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'SEO/SEA',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AdjustmentsIcon,
  },
  {
    name: 'Advisory Services',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: PresentationChartBarIcon,
  },
  { name: 'UI/UX',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: SparklesIcon },
  {
    name: 'Video Animation',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: VideoCameraIcon,
  },
  {
    name: 'Social Media Design',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: LightningBoltIcon,
  },
  {
    name: 'Build A Website',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: DesktopComputerIcon,
  },
  {
    name: 'Build A Mobile Application',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: DeviceMobileIcon,
  },
]
const callsToAction = [
  { name: 'All Services', href: '/Services', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  
  return (
    <Popover className="relative  bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
            <a >
              <span className="sr-only">LogoBrand</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-4 transform px-2 w-screen max-w-2xl lg:max-w-4xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/3">
                      <div className="rounded-lg shadow-lg  overflow-hidden">
                        <div className="relative grid gap-6 lg:grid-cols-3 grid-cols-2 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                              <Link href={item.href} key={item.name}>
                                <a
                                className="-m-3 p-3 flex items-start rounded-lg  hover:bg-gray-50"
                                >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-blue-400" aria-hidden="true" />
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link  href={item.href}>
                              <a
                               
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link href="/projects" >
              <a  className="   relative text-base font-medium   hover:text-gray-900">
              <div className={router.pathname === '/projects' ? 'active text-gray-900' : 'activee text-gray-500'}>Projects</div>
              </a>
            </Link>
            <Link  href="/Blog">

              <a className="text-base  relative font-medium text-gray-500 hover:text-gray-900">
              <div className={router.pathname === '/Blog' ? 'active text-gray-900' : 'activee text-gray-500'}>
                Blog
              </div>
              </a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-4 px-2 w-screen max-w-2xl sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                            key={item.name}
                            href={item.href}>
                            <a
                              
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-blue-400" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <Link href={post.href}>
                                  <a  className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="#">
                            <a  className="font-medium text-blue-400 hover:text-blue-300">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            
            <a
              href="mailto:mohamed@harbouli.com"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 font-bold border border-transparent rounded-full shadow-sm text-base text-white bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600" 
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {services.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}>
                    <a
                     
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-blue-400" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/projects" >
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Projects
                </a>
                </Link>
                <Link href="/Blog">
                <a  className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
                </Link>
                {resources.map((item) => (
                  <Link
                  key={item.name}
                  href={item.href}
                  >
                 
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                  </Link>
                ))}
              </div>
              <div>
                <a
                  href="mailto:mohamed@harbouli.com"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  GET IN TOUCH
                </a>
                
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}