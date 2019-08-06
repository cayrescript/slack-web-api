const { WebClient } = require("@slack/web-api");
const { conversationId, token } = require("../config/auth");
const templates = require("../templates");

const web = new WebClient(token);

module.exports = {
  send: async params => {
    const blocks = templates[params.type](params);

    const res = await web.chat.postMessage({
      channel: conversationId,
      ...blocks
    });

    return res.ts && 200;
  }
};
