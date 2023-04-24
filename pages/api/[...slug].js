import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
// Create proxy instance outside of request handler function to avoid unnecessary re-creation
import { createProxyMiddleware } from 'http-proxy-middleware';
console.log('process.env.TEST', process.env.TEST)
const apiProxy = createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    // pathRewrite: { [`^/api/proxy`]: '' },
    toProxy: true,
    secure: false,
    logger: console
    // on: {
    //   proxyReq: (proxyReq, req, res) => {
    //     // const session = await getServerSession(req, res, authOptions)
    //     // console.log('session', session)
    //     proxyReq.setHeader('x-added', 'foobar');
    //   }
    // }
});


export default function handler (req, res) {
    req.headers.token = 'aaaaaaa'
    apiProxy(req, res, (result) => {
        if (result instanceof Error) {
            throw result;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
};