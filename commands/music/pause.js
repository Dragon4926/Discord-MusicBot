module.exports = {
    name: 'pause',
    description: 'pause the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: 'paused!', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `paused, ${inter.member}`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `Current music ${queue.current.title} has been paused ✅` : `Something went wrong ${inter.member}` });
    },
};
