
// random qoutes
const GenerateQuote = async () => {
    var url="https://type.fit/api/quotes";

    const response= await fetch(url);
    const Quote_list = await response.json(); // .json means is an asynch function (means promised) - resolve/reject
    const RandomQuote = Math.floor(Math.random() * Quote_list.length);
    const quoteText= Quote_list[RandomQuote].text;
    const auth = Quote_list[RandomQuote].author;
    
    // if(!auth) author = "Anonymous";
    document.getElementById("QuoteText").innerHTML= quoteText;
    document.getElementById("author").innerHTML=" ~ "+ auth;
 }

 function Bible(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    let y = JSON.parse(this.responseText);    
   
      let MyHeaders = {
        "Accept" : "application/json" 
      } ;  
     let htmlString ='';
     for( let Item in y ) {
        htmlString += ` ${Item}: ${y[Item]}`;
     }
        document.getElementById("bible-course").innerHTML =   htmlString ;
        console.log(htmlString);
}
    
    var apiKey ="190c221dd7mshef713eb6b298096p1507d9jsn5d7fb4966a54";
    var BibleBook  = document.getElementById("Book").value;
    var Chapter = document.getElementById("Chapter").value;
    var Verse =document.getElementById("Verse").value;
    const url = xhttp.open("GET", `https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter?Book=${BibleBook}&chapter=${Chapter}&Verse=${Verse}&rapidapi-key=${apiKey}`);
    xhttp.send();


    
    

}
