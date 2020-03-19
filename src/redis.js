const Redis = require('ioredis');

const redis = new Redis({
	host: "10.10.2.124",
	port: 6379
});


const set = async (value) => {
    await redis.set("halla", value);
    return value;
}

const get = async (key) => {
    try {
        const res = await redis.get(key) || 0;
        return Number(res);
    } catch (error) {
        return 0;
    }
} 

module.exports = {
    set,
    get
}
