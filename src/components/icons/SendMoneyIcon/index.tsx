import type { FunctionComponent } from "react";

interface ISendMoneyIconProps {
  size?: number;
}

const SendMoneyIcon: FunctionComponent<ISendMoneyIconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5018 6.12609L14.7674 24.7451C14.5788 24.5574 14.3524 24.4071 14.0999 24.3057L4.40786 20.4117C2.73219 19.7385 2.73653 17.3792 4.41468 16.712L31.8782 5.79424C32.4928 5.54993 33.105 5.73113 33.5018 6.12609Z"
        fill="#56CCFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5018 6.12595L14.7674 24.745C14.9551 24.9312 15.105 25.155 15.206 25.4048L19.079 34.9924C19.7486 36.65 22.1148 36.6379 22.7893 34.9734L33.8293 7.73309C34.0763 7.12353 33.8966 6.51771 33.5018 6.12595Z"
        fill="#142C8E"
      />
    </svg>
  );
};

export default SendMoneyIcon;
