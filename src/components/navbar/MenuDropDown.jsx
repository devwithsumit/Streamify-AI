import { Link } from 'react-router-dom'

const MenuDropDown = () => {
  return (
      <div id="navbar-user"
          className="items-center justify-between hidden w-full mt-1 order-4">
          <ul
              className="flex flex-col shadow font-medium p-4 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse dark:bg-[#252424] dark:border-neutral-700">
              <li>
                  <Link to={'/home'} className="block py-2 px-3 text-white bg-red-700 rounded-sm"
                      aria-current="page">
                      Home
                  </Link>
              </li>
              <li>
                  <Link to={'/about'} className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">
                      About
                  </Link>
              </li>
              <li>
                  <Link to={'/services'} className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">
                      Services
                  </Link>
              </li>
              <li>
                  <Link to={'/contact'} className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">
                      Contact
                  </Link>
              </li>
          </ul>
      </div>
  )
}

export default MenuDropDown
