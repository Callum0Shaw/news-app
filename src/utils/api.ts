function generateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}
async function getAllArticles() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=088b805218af4abe9d646550c066ca54'
  );
  const jsondata = await res.json();

  return jsondata.articles.map((a) => ({ ...a, id: generateUniqueId() }));
}

async function getArticlesBySource(source) {
  if (source === 'all') return getAllArticles();
  const res = await fetch(
    `https://newsapi.org/v2/everything?sources=${source}&apiKey=088b805218af4abe9d646550c066ca54`
  );
  const jsondata = await res.json();
  return jsondata.articles.map((a) => ({ ...a, id: generateUniqueId() }));
}

async function getAllSources() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=088b805218af4abe9d646550c066ca54'
  );
  const jsondata = await res.json();
  console.log(jsondata);
  
}
export { generateUniqueId, getAllArticles, getArticlesBySource, getAllSources };
