import type { FunctionComponent } from "react";

interface IInvoicingIconProps {
  size?: number;
}

const InvoicingIcon: FunctionComponent<IInvoicingIconProps> = ({
  size = 30,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M8 10.5C8 7.73858 10.2386 5.5 13 5.5H30C31.1046 5.5 32 6.39543 32 7.5V29.5C32 32.2614 29.7614 34.5 27 34.5H13C10.2386 34.5 8 32.2614 8 29.5V10.5Z"
        fill="#56CCFE"
      />
      <path
        d="M13 12.5C13 11.9477 13.4477 11.5 14 11.5H26C26.5523 11.5 27 11.9477 27 12.5C27 13.0523 26.5523 13.5 26 13.5H14C13.4477 13.5 13 13.0523 13 12.5Z"
        fill="#142C8E"
      />
      <path
        d="M13 18.5C13 17.9477 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.9477 21 18.5C21 19.0523 20.5523 19.5 20 19.5H14C13.4477 19.5 13 19.0523 13 18.5Z"
        fill="#142C8E"
      />
    </svg>
  );
};

export default InvoicingIcon;
