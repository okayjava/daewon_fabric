import l from '../../../common/logger';

class Utils {
	// random string of x length
	randStr(length) {
	  let text = '';
	  const possible = 'abcdefghijkmnpqrstuvwxyz0123456789ABCDEFGHJKMNPQRSTUVWXYZ';
	  for (let i = 0; i < length; i += 1) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}
//	module.exports.randStr = randStr;

	// left pad string with "0"s
	leftPad(str, length) {
	  for (let i = str.length; i < length; i += 1) str = `0${String(str)}`;
	  return str;
	}
//	module.exports.leftPad = leftPad;

	headerlog(req)
	{
		l.info('=====================================================================');
		l.info('Start');
		l.info('=====================================================================');
		var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
		 req.connection.remoteAddress ||
		 req.socket.remoteAddress ||
		 req.connection.socket.remoteAddress
		l.info(` remote ip : ${ip}`);
		l.info(` method    : ${req.method}`);
		l.info(` url       : ${req.url}`);
		Object.keys(req.params).map(function(objectKey, index) {
			l.info(` params    : ${objectKey} => ${req.params[objectKey]}`);
		});
		l.info('=====================================================================');
	}

}
const utils = new Utils();
module.exports = utils;
