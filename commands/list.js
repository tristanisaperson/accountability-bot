module.exports = {
    name: 'list',
    description: 'Lists all tagged users',
    execute(msg, args) {
        const taggedUsers = msg.mentions.users;
        if (taggedUsers.size > 0) {
            taggedUsers.forEach(user => msg.channel.send(`Hey there, ${user.username}!`));
            return;
        }
        msg.reply('List command requires tagged users.');
    },
};