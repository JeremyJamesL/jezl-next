/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "jeremyl56.sg-host.com"
            }
        ]
    }
}

module.exports = nextConfig
