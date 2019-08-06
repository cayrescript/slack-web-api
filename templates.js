module.exports = {
  signup: ({ name, id }) => {
    const link = "www.github.com";
    return {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*${name}* _acabou de se cadastrar_. \n <${link}|Ver detalhes>`
          },
          block_id: "signup"
        }
      ]
    };
  },
  error: ({ error }) => {
    return {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `${error}`
          },
          block_id: "error"
        }
      ]
    };
  }
};
