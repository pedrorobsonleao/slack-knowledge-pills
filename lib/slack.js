/* jshint esversion:8 */
import fetch from "node-fetch";

const slack = {};

const payload = {
    channel: process.env.SLACK_CHANNEL,
    username: "Agile Tips Tricks",
    icon_emoji: (process.env.SLACK_EMOJI) ? process.env.SLACK_EMOJI : ":sparkles:",
    color: "#03fcfc",
    fields: [{
        title: null,
        value: null,
        short: false
    }]
};

slack.getPayload = (data) => {
    let p = Object.assign({}, payload);

    p.username = p.username ? data.conf.username : p.username;
    p.icon_emoji = p.icon_emoji ? data.conf.emoji : p.icon_emoji;
    p.color = p.color ? data.conf.color : p.color;

    p.fields[0].title = data.title;
    p.fields[0].value = `\`\`\`${data.data}\`\`\`
* <${data.conf.info.source}|${data.conf.info.description}>`;
    return p;
}

slack.send = payload => process.env.SLACK_URL ? fetch(process.env.SLACK_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
}) : null;

export default slack;