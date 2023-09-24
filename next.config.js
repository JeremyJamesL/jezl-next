/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "darekkay.com"
            },
            {
                protocol: "https",
                hostname: "jeremyl56.sg-host.com"
            }
        ]
    }
}

module.exports = nextConfig
