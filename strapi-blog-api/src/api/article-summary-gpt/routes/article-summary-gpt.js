module.exports = {
  routes: [
    {
      method: "POST",
      path: "/article-summary-gpt/exampleAction",
      handler: "article-summary-gpt.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
