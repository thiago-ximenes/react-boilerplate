import MockHttpServiceFake from "../../tests/unit/api/mocks/HttpServiceFake";

export default class HttpClientProvider {
    private static SERVICES = {test: MockHttpServiceFake }

     public static resolve(key: keyof typeof this.SERVICES){

        if(!key){
            throw new Error(`Key not sent`);
        }

        if(!this.SERVICES[key]){
            throw new Error(`Service ${key} not found`);
        }

       return new this.SERVICES[key];
     }


 }