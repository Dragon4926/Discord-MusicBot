module.exports = {
    name: 'shuffle',
    description: 'shuffle the track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `No music in the queue after the current one ${inter.member}`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`Queue shuffled **${queue.tracks.length}** song(s) ! ✅`});
    },
};