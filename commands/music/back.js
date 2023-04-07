module.exports = {
    name: 'back',
    description: "Goes back one step(previous song)",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `No music has been played before... ${inter.member}... try again ? ❌`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`Re-playing the **previous** track ✅`});
    },
};