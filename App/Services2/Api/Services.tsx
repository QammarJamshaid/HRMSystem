import { flashErrorMessage } from "../FlashMessages";
import EndPoints from "./EndPoints";
import { Api } from "./Middleware";

class GApiServices {

    login = (email: any, password: any) => {
        return new Promise((resolve, reject) => {
            Api.get(`${EndPoints.login}?email=${'uznain11@gmail.com'}&password=${'uznain@786'}`)
                // Api.get(`${EndPoints.login}?email=${email}&password=${password}`)
                .then((res) => {
                    resolve(res?.data)
                })
                .catch((error: any) => {
                    flashErrorMessage()
                    console.log('error while login user =>', error)
                    reject('')
                })
        })
    }


    getAllJobs = () => {
        return new Promise((resolve, reject) => {
            Api.get(`${EndPoints.getAllJobs}`)
                .then((res) => {
                    resolve(res?.data)
                })
                .catch((error: any) => {
                    flashErrorMessage()
                    console.log('error while getting all jobs =>', error)
                    reject('')
                })
        })
    }
}


const ApiServices = new GApiServices();
export default ApiServices;