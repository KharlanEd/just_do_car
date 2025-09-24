/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://justdocar.com.ua',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.8,
    sitemapSize: 5000,
    exclude: ['/admin/*'],
}
