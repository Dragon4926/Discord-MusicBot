module.exports = async (client) => {
    console.log(`${client.user.username}\n is Ready👌\n on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.playing);

    
};