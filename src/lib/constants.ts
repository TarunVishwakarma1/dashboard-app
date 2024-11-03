let apiURL = process.env.NEXT_PUBLIC_API_URL
let vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL

if(process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
    apiURL = process.env.NEXT_PUBLIC_API_URL_DEV
    vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL_DEV
}


export { apiURL,
        vercelURL
 }