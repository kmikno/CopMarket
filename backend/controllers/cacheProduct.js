const fs = require('node:fs/promises');
const { extname, join } = require('node:path');

/**
 * @async
 * @param {string} name - The Store|Vendor that you scrapped
 * @param {string} query - Product word to search for
 * @returns {Promise<{
 *  lastUpdate: number;
 *  data:{
 *  title: string,
 *  url?: string,
 *  img?: string,
 *  price?: string
 *  category?: object[]
 *  }[]|null
 * }>}
 */
exports.cacheFile = async (name, query) => {
  const { storagePath } = await import('../utils/rootDir.mjs');
  console.log({ name, query });
  try {
    await fs.access(storagePath);
  } catch (error) {
    console.log('Creating Storage Folder');
    await fs.mkdir(storagePath, { recursive: true });
    return null;
  }

  const files = await fs.readdir(storagePath);
  const cacheFiles = files.map((f) => {
    if (extname(f) === '.json') {
      return f;
    }
  });

  const cacheRegEx = new RegExp(`${name}\_${query}`, 'i');

  const foundFile = cacheFiles.find((f) => cacheRegEx.test(f));
  if (!foundFile) {
    return null;
  }

  const resFile = JSON.parse(
    await fs.readFile(join(storagePath, foundFile), { encoding: 'utf8' })
  );
  console.log('\x1b[33mProduct cached\x1b[0m');
  //   console.log({ name, query, cacheFiles, foundFile });

  return resFile;
};
