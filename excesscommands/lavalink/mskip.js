const { EmbedBuilder } = require('discord.js');
const musicIcons = require('../../UI/icons/musicicons');
const lang = require('../../events/loadLanguage');

module.exports = {
    name: 'mskip',
    description: lang.mskipDescription,
    async execute(message) {
        const player = message.client.riffy.get(message.guild.id);
        if (!player) return message.reply(lang.noMusicPlayingError);

        player.stop(); 

      
        const nextTrack = player.queue[0];
        if (!nextTrack) return message.reply(lang.skipNoUpNextMessage); 

        const nextSongEmbed = new EmbedBuilder()
            .setColor('#DC92FF')
            .setAuthor({
                name: lang.songSkippedTitle,
                iconURL: musicIcons.skipIcon,
                url: "https://discord.gg/2nB9Vney5X"
            })
            .setFooter({ text: lang.footerText, iconURL: musicIcons.footerIcon })
            .setDescription(`${lang.playingNextSongText}\n\n **${nextTrack.info.title}**`);

        message.reply({ embeds: [nextSongEmbed] });
    }
};
