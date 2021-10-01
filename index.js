/* jshint esversion:8 */
import message from "./lib/message.json";
import slack from "./lib/slack";

const getRandomMessage = array => array[Math.floor(Math.random() * array.length)];

const checkStatus = res => {
    if (res.ok) { // res.status >= 200 && res.status < 300
        return res;
    } else {
        throw { error: res.statusText };
    }
};

Promise.resolve(getRandomMessage(Object.keys(message)))
    .then(topic => ({
        level: topic,
        conf: message[topic].conf,
        data: getRandomMessage(Object.keys(message[topic].messages))
    }))
    .then(title => ({
        title: title.data,
        conf: title.conf,
        data: getRandomMessage(message[title.level].messages[title.data])
    }))
    .then(slack.getPayload)
    .then(slack.send)
    .then(checkStatus);