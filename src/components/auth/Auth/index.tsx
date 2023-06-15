import type { FunctionComponent } from "react";

interface IAuthProps {
  children: JSX.Element;
}

const Auth: FunctionComponent<IAuthProps> = ({ children }) => {
  return children;
};

export default Auth;
