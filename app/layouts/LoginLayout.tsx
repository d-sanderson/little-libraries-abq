/** @jsx jsx */
/** @jsxFrag  Fragment */
import { jsx } from "hono/jsx";
import LoginForm from "../components/LoginForm";

const LoginLayout = async ({ context }) => {
  const title = context.req.path === '/signup' ? 'Create an Account' : 'Login'
  return (
    <div>
      <h1>{title}</h1>
      <LoginForm />
    </div>
  )
}

export default LoginLayout
