module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `Current music ${queue.current.title} skipped ✅` : `Something went wrong ${inter.member}... try again ? ❌`, ephemeral: true});
}