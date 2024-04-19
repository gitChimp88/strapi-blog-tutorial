"use strict";
const { OpenAI } = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI,
});

/**
 * article-summary-gpt service
 */

module.exports = ({ strapi }) => ({
  articleService: async (ctx) => {
    try {
      const input = ctx.request.body.data?.input;
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
      });

      const answer = completion.choices[0].message.content;

      return {
        message: answer,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
});
