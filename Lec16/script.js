function downloadBooks(unzipped){
    setTimeout(() => {
        //fetch(url);
        console.log("book downloaded")
        unzipped(parsing);
    }, 3000);
}

function unzipped(){
    setTimeout(() => {
        console.log("3  32  book unzipped")
        parsing(testBook);
    }, 1000);
}

function parsing(testBook){
    setTimeout(() => {
        console.log("your book is parsed")
        testBook();
    }, 2000);
}

function testBook(){
    setTimeout(() => {
        console.log("testing and analysing done successfully")
        upload();
    }, 4000);
}

function upload(){
    setTimeout(() => {
        console.log("book uploaded")
    }, 3000);
}

downloadBooks(unzipped);
// unzipped();
// parsing();
// testBook();
// upload();
