const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Get the songs in the queue',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸.. ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `No music in the queue after the current one ${inter.member}`, ephemeral: true });

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `And **${songs - 5}** other song(s)...` : `In the playlist **${songs}** song(s)...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Server queue - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Current ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
        .setFooter({ text: 'Glad be of help~', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });
    },
};