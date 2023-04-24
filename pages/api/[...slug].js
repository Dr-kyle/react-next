import { createProxyMiddleware } from 'http-proxy-middleware';

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
console.log('process.env.TEST', process.env.TEST)
const apiProxy = createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: false,
    // pathRewrite: { [`^/api/proxy`]: '' },
    toProxy: true,
    secure: false,
    logger: console,
});

export default function handler (req, res) {
    apiProxy(req, res, (result) => {
        if (result instanceof Error) {
            throw result;
        }
        throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
    });
};