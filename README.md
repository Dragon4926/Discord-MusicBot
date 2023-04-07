<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
    <h1>Discord Music Bot</h1>
    <p>This is a simple Discord music bot created using the discord.js library and discord-player package.</p>
    <h2>Features</h2>
    <ul>
      <li>Play audio from YouTube</li>
      <li>Pause, resume, and skip tracks</li>
      <li>Loop, shuffle, and repeat modes</li>
      <li>Display the queue and currently playing track</li>
      <li>Control the volume of the bot</li>
      <li>Works in multiple servers at the same time  *To make work in multiple servers change <code>global: true</code> in config.js*</li>
    </ul>
    <h2>Installation</h2>
    <ol>
      <li>Clone this repository: <code>git clone https://github.com/Dragon4926/Discord-MusicBot.git</code></li>
      <li>Download <code>ffmpeg</code> from <a href="https://www.ffmpeg.org/download.html">here</a>.</li>
      <li>Install dependencies: <code>npm install</code> *It will automatically install the dependencies mentioned in package.json*</li>
      <li>Create a Discord bot account and get its token<a href="#">Guide</a> *will provide the links for guides in future*</li>
      <li>Add the bot to your Discord server: <a href="#">Guide</a></li>
      <li>use the below code as <code>config.js</code> and fill out the required information.</li>
      <h2>Code Block</h2>
    <pre><code>module.exports = {
    app: {
        token: 'Your bot token',
        playing: 'by Muse~',
        global: false,
        guild: 'Your server id' 
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'role name',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
         defaultvolume: 75,
        discordPlayer: {}
    }
};
</code></pre>
      <li>Start the bot: <code>npm start</code></li>
    </ol>
    <h2>Usage</h2>
    <ul>
      <li><code>/play [song name or URL]</code>: Adds the song to the queue and starts playing if there are no songs playing.</li>
      <li><code>/pause</code>: Pauses the currently playing song.</li>
      <li><code>/resume</code>: Resumes the currently paused song.</li>
      <li><code>/skip</code>: Skips the currently playing song and plays the next song in the queue.</li>
      <li><code>/queue</code>: Shows the current queue of songs.</li>
      <li><code>/loop</code>: Toggles the loop mode on/off.</li>
      <li><code>/shuffle</code>: Shuffles the current queue.</li>
      <li><code>/volume [number]</code>: Sets the volume of the bot (0-100).</li>
      <li><code>/help</code>: Displays the help message.</li>
    </ul>
    <h2>Contributing</h2>
    <p>Contributions are welcome! If you have any suggestions, feel free to create an issue or a pull request.</p>
    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
    
    
