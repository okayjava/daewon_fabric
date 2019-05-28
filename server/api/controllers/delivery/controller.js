import l from '../../../common/logger';
import DeliveryService from '../../services/delivery/delivery.service';

export class Controller {
  delivery(req, res) {
    DeliveryService
      .regist_delivery(req, res)
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
  getDelivery(req, res) {
    DeliveryService
      .getDelivery(req, res)
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
                        data.dv_dtm             = j.dv_dtm;
                        data.lat                = j.lat;
                        data.lng                = j.lng;
                        data.corp_user_nm       = j.corp_user_nm;
                        data.corp_nm            = j.corp_nm;
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
