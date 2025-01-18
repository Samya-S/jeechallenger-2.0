"use client";

import { useState } from "react";
import Link from "next/link";
import Styles from "./Navbar.module.css";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import NavbarItems from "./NavbarItems";

export default function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  // State for individual dropdown visibility
  const [dropdownState, setDropdownState] = useState({});

  const toggleDropdown = (index) => {
    setDropdownState((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false; // Hide all dropdowns
        return acc;
      }, {});
      return {
        ...newState,
        [index]: !prevState[index], // Toggle specific dropdown
      };
    });
  };

  return (
    <nav className={`${Styles.navbar}`}>
      {/* Navbar Logo */}
      <div className={Styles.navbarLogo}>
        <Link href="/">JEE Challenger</Link>
      </div>
      {/* End of Navbar Logo */}

      {/* Desktop Navigation */}
      <ul className={Styles.navbarLinks}>
        {NavbarItems.map((item, index) => {
          if (item.type === "link") {
            return (
              <li key={index} className={Styles.li}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            );
          } else if (item.type === "dropdown") {
            return (
              <li
                key={index}
                onMouseLeave={() => toggleDropdown(index)} // Close on mouse leave
              >
                <p
                  className={Styles.columnsDropdown}
                  onMouseEnter={() => toggleDropdown(index)} // Open on hover
                  onClick={() => toggleDropdown(index)} // Toggle on click
                >
                  {item.title}&nbsp;
                  <span
                    className={Styles.columnsDropdownArrow}
                    style={{
                      transform: dropdownState[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                    }}
                  >
                    <FaCaretDown />
                  </span>
                </p>
                <div
                  className={`${Styles.columnsDropdownContent}`}
                  style={{ height: dropdownState[index] ? 'auto' : '0' }}
                >
                  <ul>
                    {item.items.map((subitem, subindex) => (
                      <li key={subindex} className={Styles.columnsDropdownContentli}>
                        <Link href={subitem.url}>{subitem.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          }
        })}
      </ul>
      {/* End of Desktop Navigation */}

      {/* Mobile Navigation */}
      <button className={Styles.hamburger} onClick={toggleMobileNav}>
        <div className={Styles.hamburgerIcon}>
          <FaBars style={{ opacity: showMobileNav ? 0 : 1 }} />
          <FaTimes style={{ opacity: showMobileNav ? 1 : 0, color: 'white' }} />
        </div>
      </button>

      <div
        className={`${Styles.mobileNav}`}
        style={{ width: showMobileNav ? '100vw' : '0' }}
      >
        <ul className={Styles.mobileNavLinks}>
          {NavbarItems.map((item, index) => {
            if (item.type === 'link') {
              return (
                <li key={index}>
                  <Link href={item.url} onClick={toggleMobileNav}>
                    {item.title}
                  </Link>
                </li>
              );
            } else if (item.type === 'dropdown') {
              return (
                <li key={index} className={Styles.mobileDropdown}>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      toggleDropdown(index);
                    }}
                  >
                    {item.title}&nbsp;
                    <span
                      className={Styles.columnsDropdownArrow}
                      style={{
                        transform: dropdownState[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                      }}
                    >
                      <FaCaretDown />
                    </span>
                  </a>
                  <div
                    className={Styles.columnsDropdownMobile}
                    style={{ height: dropdownState[index] ? 'auto' : '0' }}
                  >
                    <ul>
                      {item.items.map((subitem, subindex) => (
                        <li key={subindex}>
                          <Link href={subitem.url} onClick={toggleMobileNav}>
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      {/* End of Mobile Navigation */}
    </nav>
  );
}
