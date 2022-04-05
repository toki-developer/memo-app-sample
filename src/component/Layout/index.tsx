import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0User } from "../../hooks/useAuth0User";

type Props = {
  children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  const {loginWithRedirect, logout, isAuthenticated} = useAuth0User()

  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      <div>
        {isAuthenticated ?
          <button onClick={handleLogout}>ログアウト</button>
          : <button onClick={loginWithRedirect}>ログイン</button>
        }
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
