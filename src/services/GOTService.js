export default class GOTService {
    constructor() {
        this.charsURL = "https://www.anapioficeandfire.com/api/characters";
        this.booksURL = "https://www.anapioficeandfire.com/api/books";
        this.housesURL = "https://www.anapioficeandfire.com/api/houses";
    }

    // main fetch method

    getResourse = async (url) => {
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

    getAllCharacters = async () => {
        return await this.getResourse(this.charsURL + '?page=2&pageSize=10')
        .then(ar=> ar.map(this.transformChar));
    };

    getCharacterById = async (id) => {
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

    getAllHouses = async () => {
        return await this.getResourse(this.housesURL)
        .then(ar=> ar.map(this.transformHouse));
    }

    getHouseById = async (id) => {
        return await this.getResourse(this.housesURL + `/${id}`);
    }

    transformHouse = (obj) => {
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

    getAllBooks = async () => {
        return await this.getResourse(this.booksURL)
        .then(ar=> ar.map(this.transformBook));
    }

    getBookById = async (id) => {
        return await this.getResourse(this.booksURL + `/${id}`);
    }

    transformBook = (obj) => {
        return {
            name: obj.name,
            numberOfPages: obj.numberOfPages,
            publisher: obj.publisher,
            released: obj.released
        }
    }

}