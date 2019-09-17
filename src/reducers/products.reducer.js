// import 

var initialState = [
    {
        id: 1,
        name: 'Sirius',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/1/18/Sirius.png/800px-Sirius.png',
        des: 'SR HMS Light Cruiser (Royal Navy)',
        price: 1400,
        stock: 10,
        rarity: 6
    },
    {
        id: 2,
        name: 'King George V',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/5/57/King_George_V.png/800px-King_George_V.png',
        des: 'SR HMS Battleship (Royal Navy)',
        price: 1300,
        stock: 15,
        rarity: 6
    },
    {
        id: 3,
        name: 'Monarch',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/9/96/Monarch.png/800px-Monarch.png',
        des: 'SR HMS Battleship (Royal Navy)',
        price: 1700,
        stock: 20,
        rarity: 6
    },
    {
        id: 4,
        name: 'Bismarck',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/3/3c/Bismarck.png/800px-Bismarck.png',
        des: 'SR KMS Battleship (IronBlood)',
        price: 1500,
        stock: 20,
        rarity: 6
    },
    {
        id: 5,
        name: 'Enterprise',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/b/b1/EnterpriseChristmas.png/800px-EnterpriseChristmas.png',
        des: 'SR USS Air Craft Carrier (Eagle Union)',
        price: 1200,
        stock: 20,
        rarity: 6
    },
    {
        id: 6,
        name: 'Ayanami',
        imageUrl: 'https://azurlane.koumakan.jp/w/images/thumb/e/e7/AyanamiRock.png/800px-AyanamiRock.png',
        des: 'Elite IJN Destroyer (Sakura Empire)',
        price: 1100,
        stock: 20,
        rarity: 5
    }
];


const products = (state = initialState, action) => {
    switch(action.type){

        default: return [...state];
    }
}

export default products;