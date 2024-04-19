const baseUrl = 'http://localhost:1337';
const url = `${baseUrl}/api/articles?populate[coverImage][populate][0]=data&populate[author][populate][0]=profileImage`;

export async function fetchArticles() {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchArticleSummary(article) {
  const gptUrl = `${baseUrl}/api/article-summary-gpt/exampleAction`;
  const data = {
    data: {
      input: `Provide a concise summary of the following article with key takeaways listed - ${article}`,
    },
  };

  try {
    const response = await fetch(gptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
