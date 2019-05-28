import l from '../../../common/logger';

const transaction = require('../../../blockchain/transaction/transaction');

class ProductService {

  regist_product(req,res) {
    const args = [];

    l.info(`${this.constructor.name}.byId(${req})`);
    const peers = [];
   try {
        Object.keys(req.params).map(function(objectKey, index) {
                l.info(` params    : ${objectKey} => ${req.params[objectKey]}`);
        });
        l.info('=====================================================================');

        var msg = "";

        // JSON 형태에 맞는 것인지 확인하기 위하여.
        // String 형태로 풀었다가 다시 JSON Parse함
        l.debug(JSON.stringify(req.body, null,2) );
        if ( req.body['dv_id'] === "" || req.body['seq'] === "" ) {
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

    args.push(req.body['seq']);
    args.push(base64string);

    peers.push('peer0.org1.example.com');

    l.debug(`invoke peers:${peers}`);
    return Promise.resolve(transaction.invokeChainCode(null, 'mychannel', 'product',
      'registProd', args, 'admin', 'org1'));
  }
	
  getProduct(req, res) {
    const args = [];

    try {
	Object.keys(req.params).map(function(objectKey, index) {
		l.info(` params	: ${objectKey} => ${req.params[objectKey]}`);
	});
	l.info('=====================================================================');

    } catch (error) {
        l.error(`Failed to evaluate transaction: ${error}`);
        res.status(500).json({error: error});
        process.exit(1);
    }
	l.info('Finished');

    args.push(req.params.id);
    return Promise.resolve(transaction.queryChainCode(null, 'mychannel', 'product',
      args, 'historyProd', 'admin', 'org1'));
  }

}

export default new ProductService();
