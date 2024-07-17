const Parser = require('@postlight/parser');
const {
  corsSuccessResponse,
  corsErrorResponse,
  runWarm,
} = require('./utils/index.ts');

const parse = async ({ queryStringParameters }, context, cb) => {
  const { url } = queryStringParameters;
  if (!url) {
    return cb(null, corsErrorResponse({ message: 'URL is required' }));
  }

  const result = await Parser.parse(url);

  return cb(
    null,
    result
      ? corsSuccessResponse(result)
      : corsErrorResponse({ message: 'There was an error parsing that URL.' })
  );
};

module.exports = runWarm(parse);
