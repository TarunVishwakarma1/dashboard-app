let apiURL = process.env.NEXT_PUBLIC_API_URL

if(process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
    apiURL = process.env.NEXT_PUBLIC_API_URL_DEV
}

export { apiURL }