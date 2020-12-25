import React from 'react';

const infoColor = 'var(--sn-stylekit-info-color)';
const foregroundColor = 'var(--sn-stylekit-foreground-color)';

interface Icons {
  condition?: boolean;
  fill?: string;
  role: string;
}

export const PrintIcon: React.FC<Icons> = ({ fill, role }) => (
  <svg
    aria-label="print icon"
    role={role}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0001 2.5H5.00008V5.83333H15.0001V2.5ZM15.8334 10C15.6124 10 15.4004 9.9122 15.2442 9.75592C15.0879 9.59964 15.0001 9.38768 15.0001 9.16667C15.0001 8.94565 15.0879 8.73369 15.2442 8.57741C15.4004 8.42113 15.6124 8.33333 15.8334 8.33333C16.0544 8.33333 16.2664 8.42113 16.4227 8.57741C16.579 8.73369 16.6668 8.94565 16.6668 9.16667C16.6668 9.38768 16.579 9.59964 16.4227 9.75592C16.2664 9.9122 16.0544 10 15.8334 10ZM13.3334 15.8333H6.66675V11.6667H13.3334V15.8333ZM15.8334 6.66667H4.16675C3.50371 6.66667 2.86782 6.93006 2.39898 7.3989C1.93014 7.86774 1.66675 8.50363 1.66675 9.16667V14.1667H5.00008V17.5H15.0001V14.1667H18.3334V9.16667C18.3334 8.50363 18.07 7.86774 17.6012 7.3989C17.1323 6.93006 16.4965 6.66667 15.8334 6.66667Z"
      fill={fill ? fill : foregroundColor}
    />
  </svg>
);