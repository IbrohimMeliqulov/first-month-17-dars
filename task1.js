class BookList{
    constructor(){
        this.books=[]
        this.favoritebook=''
    }

    addBook(records){
        this.books.push(records)
    }
    setFavoriteBook(title){
        this.favoritebook=title
    }

    getBooksList(){
        for(let x of this.books){
            console.log(`${x.title},muallif:${x.author}`)
        }
    }
    getFavoriteBook(){
        console.log(`your favorite book is ${this.favoritebook}`)
    }
}





b1=new BookList()
b1.addBook({title:"Harry Potter",author:"J.K.Rowling"})
b1.addBook({title:"The Lord of the Rings",author:"J.R.R.Tolkien"})
b1.addBook({title:"Pride and Prejudice",author:"Jane Austen"})
b1.addBook({title:"To kill a mockingbird",author:"Harper Lee"})


b1.setFavoriteBook("The Lord of the Rings")


b1.getBooksList()

b1.getFavoriteBook()