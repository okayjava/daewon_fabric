const log4js = require('log4js');

const logger = log4js.getLogger('DeliveryService');
logger.setLevel('DEBUG');

import l from '../../../common/logger';

//const utils = require('../../utils/utils');
const transaction = require('../../../blockchain/transaction/transaction');

class DeliveryService {
        headerlog(req)
        {
                logger.info('=====================================================================');
                logger.info('Start');
                logger.info('=====================================================================');
                var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
                 req.connection.remoteAddress ||
                 req.socket.remoteAddress ||
                 req.connection.socket.remoteAddress
                logger.info(` remote ip : ${ip}`);
                logger.info(` method    : ${req.method}`);
                logger.info(` url       : ${req.url}`);
                Object.keys(req.params).map(function(objectKey, index) {
                        logger.info(` params    : ${objectKey} => ${req.params[objectKey]}`);
                });
                logger.info('=====================================================================');
        }

  regist_delivery(req,res) {
    const args = [];

    l.info(`${this.constructor.name}.byId(${req})`);
    const peers = [];
   try {

        var msg = "";

        // JSON 형태에 맞는 것인지 확인하기 위하여.
        // String 형태로 풀었다가 다시 JSON Parse함
        l.debug(JSON.stringify(req.body, null,2) );
        if ( req.body['dv_id'] === "" ) {
                msg = { rs:461, error :  `key field can not empty (dv_id) `};
                l.error(msg);
                res.status(461).send(msg);
        } else {
                var v = JSON.stringify(req.body);
                l.info('JSON.stringify completed');

                var base64string = Buffer.from(v).toString('base64');
                var decoded = new Buffer(base64string, 'base64').toString()

                // Submit the specified transaction.
        //        await contract.submitTransaction('registDelivery', req.body.dv_id, base64string );
                l.info('Transaction has been submitted');
        }
    } catch (error) {
        l.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }

    args.push(req.body['dv_id']);
    args.push(base64string);

    peers.push('peer0.org1.example.com');

    l.debug(`invoke peers:${peers}`);
    return Promise.resolve(transaction.invokeChainCode(null, 'mychannel', 'delivery',
      'registDelivery', args, 'admin', 'org1'));
  }
	
  getDelivery(req, res) {
    const args = [];

    try {
	this.headerlog(req);

    } catch (error) {
        logger.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({error: error});
        process.exit(1);
    }
    logger.info('getDelivery sequence : %s', req.params.id);

    args.push(req.params.id);
    const ret = Promise.resolve(transaction.queryChainCode(null, 'mychannel', 'delivery',
      args, 'historyDelivery', 'admin', 'org1'));
	  /*
    this.query(args)
    .then (r => {
	    logger.info('====================');
                var j = "";
                var v = "";
                let dd = new Array();
                dd.res = "200";
                dd.arr = new Array();
                v = JSON.parse(r)
                for(var index in v)
                {
                        let data = new Object();
                        j = v[index].Value;

                        data.tx                 = v[index].TxId
                        data.dv_dtm             = j.dv_dtm;
                        data.lat                = j.lat;
                        data.lng                = j.lng;
                        data.corp_user_nm       = j.corp_user_nm;
                        data.corp_nm            = j.corp_nm;
                        dd.arr.unshift(data);
                }
                var json_data = JSON.parse(JSON.stringify(dd.arr));
	    	logger.info(`return array count : ${v.length}`);
                //res.json(r);
               return ( '{rs:200, arr_size: dd.arr.length, arr: json_data }' ) ;
              }
          );
	  */
    return ret;
  }

  query(args)
  {
    return Promise.resolve(transaction.queryChainCode(null, 'mychannel', 'delivery',
      args, 'historyDelivery', 'admin', 'org1'));
  }

}

export default new DeliveryService();
