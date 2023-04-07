const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `Invalid Action\n..lower limit reached..\ncannot decrease volume any further..\n ${inter.member}... try again ?`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `Are you dumb by any chance..current volume level is the same as given.. ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `Success✅ modified to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${inter.member}... try again ? ❌`, ephemeral: true});
}