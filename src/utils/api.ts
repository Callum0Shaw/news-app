function generateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}

function mapWithUniqueID(array) {
  return array.map((a) => ({ ...a, id: generateUniqueId() }));
}
const apiKey = '088b805218af4abe9d646550c066ca54';

async function getAllArticles() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  return await res.json();
}

async function getArticlesBySource(source) {
  const res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`);
  return await res.json();
}

async function getArticlesByTitle(source, titleParams) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURI(
      titleParams
    )}&searchIn=title&sources=${source}&apiKey=${apiKey}`
  );
  return await res.json;
}

async function getFilteredArticles(source, titleParams) {
  if (!titleParams) {
    const res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`);
    return await res.json();
  }
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURI(
      titleParams
    )}&searchIn=title&sources=${source}&apiKey=${apiKey}`
  );
}

async function getAllSources() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=088b805218af4abe9d646550c066ca54'
  );
  const jsondata = await res.json();
  return jsondata.sources;
}

export { getAllArticles, getArticlesBySource, getAllSources, getArticlesByTitle, getFilteredArticles };
