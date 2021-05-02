export default class GOTService {
    constructor() {
        this.charsURL = "https://www.anapioficeandfire.com/api/characters";
        this.booksURL = "https://www.anapioficeandfire.com/api/books";
        this.housesURL = "https://www.anapioficeandfire.com/api/houses";
    }

    // main fetch method

    async getResourse(url) {
        const resourse = await fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error(`something go wrong by fetching ${url}, status is ${res.status}`)
                }
            })
            .catch(e => console.error(e));
        return await resourse;
    }


    // chars

    async getAllCharacters() {
        return await this.getResourse(this.charsURL + '?page=2&pageSize=10')
        .then(ar=> ar.map(this.transformChar));
    };

    async getCharacterById(id) {
        return this.transformChar(await this.getResourse(this.charsURL + `/${id}`));
    }

    transformChar(obj) {
        return {
            name: obj.name,
            gender: obj.gender,
            born: obj.born,
            died: obj.died,
            culture: obj.culture
        }
    }

    checkChar(char) {
        const { name, gender, born, died, culture } = char;
        if (name && gender && born) {
            return true;
        }
        else { return false };
    }

    // houses----------------------------------------

    getAllHouses() {
        return this.transformData(this.getResourse(this.housesURL));
    }

    getHouseById(id) {
        return this.getResourse(this.housesURL + `/${id}`);
    }

    transformHouse(obj) {
        return {
            name: obj.name,
            region: obj.region,
            words: obj.words,
            titles: obj.titles,
            overlord: obj.overlord,
            ancestralWeapons: obj.ancestralWeapons
        }
    }


    // books-------------------------------------------

    getAllBooks() {
        return this.getResourse(this.booksURL);
    }

    getBookById(id) {
        return this.getResourse(this.booksURL + `/${id}`);
    }

    transformBook(obj) {
        return {
            name: obj.name,
            numberOfPages: obj.numberOfPages,
            publisher: obj.publisher,
            released: obj.released
        }
    }

}