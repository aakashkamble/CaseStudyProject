import axios from'axios'
const PAY_TRAIN_URL ='http://localhost:8080/pay/addPayment/';
const PAY_DETAIL = "http://localhost:8080/pay/getAll";
class PaymentService{

    doPayment(PaymentDetails){
        return axios.post(PAY_TRAIN_URL ,PaymentDetails)
    }
    getPay(){
        return axios.get(PAY_DETAIL)
    }
}
export default new PaymentService();