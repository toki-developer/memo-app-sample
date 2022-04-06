import Link from "next/link";
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
        <Link href="/">TOP</Link>
        <Link href="/memo">みんなのメモ一覧</Link>
      </div>
      <hr/>
      <div>
        {children}
      </div>
    </div>
  );
};
