/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        ignoreDuringBuilds: true,
    },




    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'firebasestorage.googleapis.com'

            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },

            
        ]
    }
}

module.exports = nextConfig
