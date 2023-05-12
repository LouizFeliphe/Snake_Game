;

async function doe() {
    let fileLoaded = false;

    if(fileLoaded) {
        return "File loaded"
    } else {
        throw "file not loaded"
    }
}

doe().then(function(ve){console.log(`${ve}hello`)}).catch(error => console.log(error))