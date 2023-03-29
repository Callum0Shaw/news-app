function generateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}

function mapWithUniqueID(array) {
  return array.map((a) => ({ ...a, id: generateUniqueId() }));
}

async function getAllArticles() {
  try {
    const res = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=088b805218af4abe9d646550c066ca54'
    );
    const jsondata = await res.json();

    if (jsondata.status === 'error') {
      console.log(`${jsondata.code}: ${jsondata.message}`);
      console.log(jsondata);

      return [];
    }
    return mapWithUniqueID(jsondata.articles);
  } catch (error) {
    console.log('Unknown error fetching articles');
    return [];
  }
}

async function getArticlesBySource(source) {
  if (source === 'all') return getAllArticles();
  const res = await fetch(
    `https://newsapi.org/v2/everything?sources=${source}&apiKey=088b805218af4abe9d646550c066ca54`
  );
  const jsondata = await res.json();
  return mapWithUniqueID(jsondata.articles);
}

async function getAllSources() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=088b805218af4abe9d646550c066ca54'
  );
  const jsondata = await res.json();
  return jsondata.sources;
}

async function getArticlesByTitle(params, source) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURI(
      params
    )}&searchIn=title&sources=${source}&apiKey=088b805218af4abe9d646550c066ca54`
  );
  const jsondata = await res.json;
  return mapWithUniqueID(jsondata.articles);
}
export { getAllArticles, getArticlesBySource, getAllSources, getArticlesByTitle };
