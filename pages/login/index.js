import FacebookLogin from 'react-facebook-login';

const Login = () => {

    const handleFacebookLogin = (res) => {
        alert(res.email)
    }

    const fetchExpress = () => {
        alert('in fetch')
        fetch('http://localhost:3003/activities', {})
            .then(res => {
                const contentType = res.headers.get('Content-Type');
                let resParse
                if(contentType != null) {
                    if(contentType.indexOf('text') > -1) {
                        resParse = res.text()
                    }
                    if(contentType.indexOf('form') > -1) {
                        resParse = res.formData();
                    }
                    if(contentType.indexOf('video') > -1) {
                        resParse = res.blob();
                    }
                    if(contentType.indexOf('json') > -1) {
                        console.log('res is json', res)
                        resParse = res.json();
                    }
                }
                return resParse
                console.log(res.body)
            })
            .then(data => alert(data))
            .catch(err => alert(err))
    }

    return (
        <div>
            <h1>Login</h1>
            <p onClick={fetchExpress}> fetch express</p>
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

