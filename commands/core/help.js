const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: "All the commands this bot has!For further help contact the developer..",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription('This code comes from a GitHub project [Dragon4926/Discord-MusicBot](https://github.com/Dragon4926/Discord-MusicBot).\nIf you want to help the project or wanna contribute head to github repo or join the Discord server.')
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Glad to be of help~', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.reply({ embeds: [embed] });
    },
};