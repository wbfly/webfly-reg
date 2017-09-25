module.exports = {
    database: {
        pool: 10,
        ssl: true
    },
    memcached: {
        servers: process.env.MEMCACHEDCLOUD_SERVERS.split(','),
        username: process.env.MEMCACHEDCLOUD_USERNAME,
        password: process.env.MEMCACHEDCLOUD_PASSWORD
    },
    cloudflare: {
        email: process.env.CLOUDFLARE_EMAIL,
        key: process.env.CLOUDFLARE_KEY,
        zone: process.env.CLOUDFLARE_ZONE
    }
};
