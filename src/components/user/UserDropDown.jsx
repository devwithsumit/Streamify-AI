import React from 'react'
import { Link } from 'react-router-dom'

const UserDropDown = ({user, handleSignOut}) => {
  return (
      <div id="user-dropdown" className="z-[100] hidden my-4 -right-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
          data-popper-placement="bottom">
          <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName || "Bonnie Green"}</span>
              <span className="block text-sm text-wrap text-gray-500 truncate dark:text-gray-400">{user?.email.slice(0, 15).concat("...") || "name@flowbite.com".concat("...")}</span>
          </div>
          <ul
              className="py-2" aria-labelledby="user-menu-button">
              <li>
                  <Link to='/home' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Dashboard
                  </Link>
              </li>
              <li>
                  <Link to='/update-profile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Settings
                  </Link>
              </li>
              <li>
                  <button onClick={handleSignOut} className="w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                  </button>
              </li>
          </ul>
      </div>
  )
}

export default UserDropDown
