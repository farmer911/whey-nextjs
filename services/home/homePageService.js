import httpService from '../httpService'

class HomePage {
    banner() {
        return httpService.get('/general/getBanner');
    }

    product() {
        return httpService.get('/general/getTrademark');
    }

    hotProduct() {
        return httpService.get('/product/getProductByGroups?group=1')
    }
}

export default new HomePage();