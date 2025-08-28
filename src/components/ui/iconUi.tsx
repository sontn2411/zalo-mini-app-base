import React from 'react'

interface SvgIconProps {
  className?: string
  width?: string
  height?: string
  icon: string
}

const Icons = {
  home: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='32'
        d='M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212'
      ></path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69'
      ></path>
    </svg>
  ),
  homeActive: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z'></path>
    </svg>
  ),
  newspaper: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328'
      ></path>
      <path
        fill='none'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z'
      ></path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M240 128h64m-64 64h64m-192 64h192m-192 64h192m-192 64h192'
      ></path>
      <path d='M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z'></path>
    </svg>
  ),
  newspaperActive: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='96'
        height='96'
        x='96'
        y='112'
        fill='none'
        rx='16'
        ry='16'
      ></rect>
      <path d='M468 112h-52v304a32 32 0 0 0 32 32 32 32 0 0 0 32-32V124a12 12 0 0 0-12-12z'></path>
      <path d='M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z'></path>
    </svg>
  ),
  profile: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 448 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'></path>
    </svg>
  ),
  profileActive: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 448 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path>
    </svg>
  ),
  briefcase: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='448'
        height='320'
        x='32'
        y='128'
        fill='none'
        strokeLinejoin='round'
        strokeWidth='32'
        rx='48'
        ry='48'
      ></rect>
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32m112 112H32m288 0v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24'
      ></path>
    </svg>
  ),
  briefcaseActive: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        d='M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16z'
      ></path>
      <path d='M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4z'></path>
    </svg>
  ),
}

const IconUI = ({
  icon,
  className = '',
  width = '30px',
  height = '30px',
}: SvgIconProps) => {
  const selectedIcon = Icons[icon]

  if (selectedIcon) {
    return (
      <div className={className}>
        {React.cloneElement(selectedIcon, { width, height, className })}
      </div>
    )
  } else {
    return null
  }
}

export default IconUI
