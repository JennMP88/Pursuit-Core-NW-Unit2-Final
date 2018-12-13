// https://deckofcardsapi.com/

// ------------------HELPERS, testing
class Storage {
    constructor(key) {
        this.key = key;
    }

    getStorage() {
        const data = window.localStorage.getItem(this.key);
        if (data) {
            return JSON.parse(data); 
        }
        return data;
    }

    save(data) {
        window.localStorage.setItem(this.key, JSON.stringify(data))
    }
}


//--------------------******AJAX NOTES
const getDeck = (search, cb) => {

    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', (response) => {
        const data = (JSON.parse(response.currentTarget.response));

        // console.log(data);

   
        const deckArray = [];
        data.data.forEach(currentDeck => {
            const url = currentDeck.image.original.url;
            deckArray.push(url);
        });

        
        console.log(deckArray)
       

        return deckArray;
    })
    request.send(null);
}

let state={
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
}
//------Global html objects
const newDeck=document.querySelector('.hide');
 

//------events 
newDeck.addEventListener('click', (e) => {
    state.success = "true"; 
    storage.save(state);
    render(state);
    console.log(state);
});

//------render
const render = state => {

    if (state.success === "true") {
        //
    }
        

}
render(state)
