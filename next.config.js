/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "jlwp.online"
            },
            {
                protocol: "https",
                hostname: "jlwp.online"
            }
        ]
    }
}

module.exports = nextConfig
