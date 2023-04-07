const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "Jumps to particular track in queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to jump to',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the place/id of the song in the queue',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `Use one of the options to jump to a song ${inter.member}`, ephemeral: true });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `skiped to ${track} ✅` });
            }
        }
        return inter.reply({ content: `${track} not found\n ${inter.member}... try using the url or the full name of the song`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `Invalid track_name ${inter.member}`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `Jumped to ${trackname}  ✅` });
    }
         
    }
}