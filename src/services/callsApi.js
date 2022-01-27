const getApi = (filterHouse) => {
    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map((characterData) => {
            return {
                id: `${characterData.name} ${characterData.actor}`,
                image: characterData.image,
                name: characterData.name,
                status: characterData.alive,
                species: characterData.species,
                gender: characterData.gender,
                house: characterData.house,
                alternateNames: characterData.alternate_names,
            }
        });
        return cleanData;
    })
}

export default getApi;