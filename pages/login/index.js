import FacebookLogin from 'react-facebook-login';

const Login = () => {

    const handleFacebookLogin = (res) => {
        console.log(res)
    }

    return (
        <div>
            <h1>Login</h1>
            <p> FB login</p>
            <FacebookLogin
              icon="icon" // icon className
              authType="rerequest"
              appId={2735457190067703}
              fields="name,email"
              // scope="name"
              cssClass="facebook" // dont remove it, because default style isn't beautiful
              textButton="使用 Facebook 登入"
              callback={handleFacebookLogin}
              // for Line
              isMobile
              redirectUri="https://next-demo-ecru.vercel.app/login"
            />
        </div>
    )
}

export default Login

