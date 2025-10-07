import React from "react"

type HamburgerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean
  onClick: () => void
  buttonRef?: React.RefObject<HTMLButtonElement>
}

export const HamburgerButton = ({ isOpen, onClick, buttonRef, ...rest }: HamburgerButtonProps) => {
  return (
    <button
      data-collapse-toggle="mobile-menu"
      type="button"
      className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:ring-2 hover:ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
      aria-controls="mobile-menu"
      aria-expanded={isOpen ? "true" : "false"}
      aria-label={isOpen ? "Close main menu" : "Open main menu"}
      onClick={onClick}
      ref={buttonRef}
      {...rest}
    >
      <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
      <svg
        className={`${isOpen ? "hidden" : "block"} size-6`}
        fill="white"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        className={`${isOpen ? "block" : "hidden"} size-6`}
        fill="white"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button >
  )
}