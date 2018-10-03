const { oneLine } = require('common-tags');
const Command = require('../base');
const { RichEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'util',
			memberName: 'ping',
			description: 'Checks the bot\'s ping to the Discord server.',
			throttling: {
				usages: 5,
				duration: 10
			}
		});
	}

	async run(msg) {
		if(!msg.editable) {
			const pingMsg = await msg.reply('Pinging...');

			var embed = new RichEmbed()
				.setTitle("Pong! :stopwatch:")
				.setDescription(`**Message round-trip:** ${pingMsg.createdTimestamp - msg.createdTimestamp}ms \n ${this.client.ping ? `**Heartbeat ping:** ${Math.round(this.client.ping)}ms.` : ''}`)
				.setFooter("Coursebot - by NightYoshi370 & Samplasion");
			return pingMsg.edit(embed);
		} else {
			await msg.edit('Pinging...');

			var embed = new RichEmbed()
				.setTitle("Pong! :stopwatch:")
				.setDescription(`**Message round-trip:** ${msg.editedTimestamp - msg.createdTimestamp}ms \n ${this.client.ping ? `**Heartbeat ping:** ${Math.round(this.client.ping)}ms.` : ''}`)
				.setFooter("Coursebot - by NightYoshi370 & Samplasion");
			return msg.edit(embed);
		}
	}
};
