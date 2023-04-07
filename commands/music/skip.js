module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Current music ${queue.current.title} skipped ✅` : `Something went wrong ${inter.member}`});
    },
};