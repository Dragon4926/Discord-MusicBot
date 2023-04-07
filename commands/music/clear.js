module.exports = {
    name: 'clear',
    description: 'clears all the music in the queue',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `No music in the queue after the current one ${inter.member}... try again ? ❌`, ephemeral: true });

        await queue.clear();

        inter.reply(`Queue is empty...🗑️`);
    },
};