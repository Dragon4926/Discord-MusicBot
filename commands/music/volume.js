const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `Are you dumb by any chance..current volume level is the same as given.. ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `Success ✅ Modified to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${inter.member}`});
    },
};