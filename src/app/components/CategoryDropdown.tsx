import autoAnimate from '@formkit/auto-animate';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { CategoryDropdownProps } from '../interfaces/common.interface';
import { categories } from '../constants/common.constant';


export default function CategoryDropdown({ postCategory, setPostCategory }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className="dropdown dropdown-end" >
      <div tabIndex={0} role="button" className="flex btn btn-ghost" onClick={toggleDropdown}>
        {postCategory} <Icon icon={`mdi:${isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}`} width={20} height={20} />
      </div>
      <div ref={parent}>
        {isOpen && (
          <ul tabIndex={0} className="dropdown-content z-[1] p-0 menu shadow bg-white rounded w-52" >
            {categories.map(category => (
              <li
                className={`flex flex-row cursor-pointer px-3 py-3 px-2 rounded ${category === postCategory ? 'bg-green-100' : 'hover:bg-gray-100'}`}
                key={category}
                onClick={() => {
                  setPostCategory(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
