import HttpClientProvider from "../../../../api/providers/HttpClientProvider";
import MockHttpServiceFake from "../mocks/HttpServiceFake";

describe('HttpClientProvider', () => {
    it('Send no key', () => {
        expect(() => HttpClientProvider.resolve()).toThrowError(`Key not sent`);
    });

    it('Service not found', () => {

        const key = "key";

        expect(() => HttpClientProvider.resolve(key)).toThrowError(`Service ${key} not found`);
    });

    it('Return a service', () => {
        const service = HttpClientProvider.resolve('test');
        expect(service).toBeInstanceOf(MockHttpServiceFake);
    })

});