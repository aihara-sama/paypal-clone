import type { FunctionComponent } from "react";

interface IReorderIconProps {}

const ReorderIcon: FunctionComponent<IReorderIconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 20 20"
    >
      <path d="M2 11h16v2H2zm0-4h16v2H2zm8 11l3-3H7l3 3zm0-16L7 5h6l-3-3z" />
    </svg>
  );
};

export default ReorderIcon;
