import l from '../../../common/logger';
import ProductService from '../../services/product/product.service';

export class Controller {
  product(req, res) {
    ProductService
      .regist_product(req, res)
      .then(r => {
        if (r) {
                var j = "";
                var v = "";
                let dd = new Array();
                dd.res = "200";
                dd.arr = new Array();
                var json_data = JSON.parse(JSON.stringify(dd));
                l.debug(json_data);
                res.status(200).json( {rs:200,tx:r} );
        }
        else res.status(404).end();
      });
  }
  getProduct(req, res) {
    ProductService
      .getProduct(req, res)
      .then(r => {
        if (r) {
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
			data.corp_nm            = j.corp_nm;
			data.lat                = j.lat;
			data.lng                = j.lng;
			data.rgst_dtm           = j.rgst_dtm;
			data.dstrb_typ_cd       = j.dstrb_typ_cd;
			data.corp_user_nm       = j.corp_user_nm;
			data.full_addr          = j.full_addr;
			data.dv_id              = j.dv_id;
                        dd.arr.unshift(data);
                }
                var json_data = JSON.parse(JSON.stringify(dd.arr));
                //res.json(r);
                res.status(200).json( {rs:200, arr_size: dd.arr.length, arr: json_data } );
        }
        else res.status(404).end();
      });
  }
}
export default new Controller();
