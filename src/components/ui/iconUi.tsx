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
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
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
      strokeWidth='0.5'
      viewBox='0 0 24 24'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='User'>
        <g>
          <path d='M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z'></path>
          <path d='M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z'></path>
        </g>
      </g>
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
      <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z'></path>
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
  previous: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        stroke-width='2'
        d='M2,12 L22,12 M13,3 L22,12 L13,21'
        transform='matrix(-1 0 0 1 24 0)'
      ></path>
    </svg>
  ),
  timeOutline: (
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
        strokeMiterlimit='10'
        strokeWidth='32'
        d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z'
      ></path>
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M256 128v144h96'
      ></path>
    </svg>
  ),

  personRegister: (
    <svg
      viewBox='0 0 26 31'
      xmlns='http://www.w3.org/2000/svg'
      // stroke='currentColor'
      fill='currentColor'
    >
      <path d='M13 15.5C17.1031 15.5 20.4286 12.1426 20.4286 8C20.4286 3.85742 17.1031 0.5 13 0.5C8.89688 0.5 5.57143 3.85742 5.57143 8C5.57143 12.1426 8.89688 15.5 13 15.5ZM18.5598 17.4102L15.7857 28.625L13.9286 20.6562L15.7857 17.375H10.2143L12.0714 20.6562L10.2143 28.625L7.44018 17.4102C3.30223 17.6094 0 21.0254 0 25.25V27.6875C0 29.2402 1.24777 30.5 2.78571 30.5H23.2143C24.7522 30.5 26 29.2402 26 27.6875V25.25C26 21.0254 22.6978 17.6094 18.5598 17.4102Z'></path>
    </svg>
  ),
  location: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='256' cy='192' r='32'></circle>
      <path d='M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z'></path>
    </svg>
  ),
  file: (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke-linecap='round'
      stroke-linejoin='round'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'></path>
      <path d='M14 2v4a2 2 0 0 0 2 2h4'></path>
      <path d='M10 9H8'></path>
      <path d='M16 13H8'></path>
      <path d='M16 17H8'></path>
    </svg>
  ),
  activeFile: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM320 482a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320zm0 136a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h184a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8H320z'></path>
    </svg>
  ),
  users: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 256 256'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z'></path>
    </svg>
  ),
  activeUsers: (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 256 256'
      height='200px'
      width='200px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z'></path>
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
