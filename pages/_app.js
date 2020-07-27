import "styles/index.css";
import {useEffect} from "react";
import "/node_modules/"
export default function App({Component, pageProps, router, status}) {

  useEffect(() => {
      if (window) {
        window.scrollTo(0, 1);
      }
    },
    [router?.route]);
  return (
    <>
        <Component
          {...pageProps}
          key={router.route}
        />
      <style global jsx>
        {`  
            html {
                box-sizing: border-box;
                font-size: 16px;
                height: 100%;
            }
            
            body {
                width: 100%;
                height: 100%;
                margin: 0;
            }
            
            #__next {
              height: 100%;
            }
            
            button:focus, input:focus {
               outline: 0;
            }
            
            .structure-container {
              margin: 0 auto;
            }
            
            * { font-family: 'NanumSquareRound', 'Sans-serif'; }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }

            #__next-build-watcher,
            #__next-prerender-indicator {
                display: none !important;
            }
            
            p, h1, h2, h3, h4, h5, h6, span, button {
                margin: 0;
                padding: 0;
            }
                    `}
      </style>
    </>
  );
}

App.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};
  const {req, isServer, res} = ctx;
  const cookie = isServer ? req.headers.cookie : "";

  if (res && res.statusCode === 404) {
    const status = 404;
    return {status};
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ctx});
  }

  return {pageProps};
};
