function generateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}

export { generateUniqueId };
