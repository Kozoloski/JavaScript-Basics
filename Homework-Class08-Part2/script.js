function checkStatus() {
    let bookTitle = document.getElementById("bookTitle").value;
    let authorName = document.getElementById("authorName").value;
    let reading = document.getElementById("read").value;

    function DisplayReadingStatus(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    
        this.readingStatusInfo = function() {
         
        let book = "'" + this.title + "'" + ' by ' + this.author + ".";
        
        if (this.readingStatus ==="yes") {
          return "You have already read " + book;
        } 
        else if(this.readingStatus === "no") {
         return "You still need to read " + book;
        }
       
       }
    }
    
    let books = new DisplayReadingStatus(bookTitle, authorName, reading);
    console.log (books.readingStatusInfo());

    let readingStatusInfo = document.getElementById("result");
    readingStatusInfo.innerHTML = books.readingStatusInfo();

}