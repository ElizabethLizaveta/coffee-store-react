export default class Service {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getBestsellers = async () => {
        return await this.getResource(`/bestsellers/`);
    }

    getShopItems = async () => {
        return await this.getResource(`/coffee/`);
    }

    getShopItem = async (name) => {
        const res = await this.getResource(`/coffee/`);
       
        return res.find(item => item.name === name); 
    }

    getGoods = async () => {
        return await this.getResource(`/goods/`);
    }
}