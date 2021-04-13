module.exports = {
    port: 8081,
    db: {
        database: process.env.DATABASE || 'tabtracker',
        user: process.env.USER || 'tabtracker',
        password: process.env.PASSWORD || 'tabtracker',
        options: {
            dialect: process.env.DATABASE || 'sqlite',
            host: process.env.DATABASE || 'localhost',
            storage: process.env.DATABASE || './tabtracker.sqlite'
        }

    }
}