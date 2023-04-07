module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Singing in the void...beep boop...Bot remains idle..💸`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `Current music ${queue.current.title} has been paused ✅` : `Current music ${queue.current.title} has been resumed ✅`}`, ephemeral: true});
}