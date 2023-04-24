function removeTrailingSource(string: string): string {
  const regex = /^.*?(?= - )/;
  const match = string.match(regex);
  const title = match ? match[0] : '';
  return title;
}

export { removeTrailingSource };
