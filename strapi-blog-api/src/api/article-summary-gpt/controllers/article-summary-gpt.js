"use strict";

/**
 * A set of functions called "actions" for `article-summary-gpt`
 */

module.exports = {
  exampleAction: async (ctx) => {
    try {
      const response = await strapi
        .service("api::article-summary-gpt.article-summary-gpt")
        .articleService(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  },
};
