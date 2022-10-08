import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
   const roundedMinutes = Math.ceil(minutes/5)*5;
   const numCoffeeCups = roundedMinutes/5;
   const longRoundedMinutes = Math.ceil(minutes/10)*10;
   const numBento = longRoundedMinutes/10

   function emojiMaker(num){
    if (num < 30){
        // let newArray = []
        // newArray.length = numCoffeeCups
        // const coffees = newArray.map(coffee => {return "☕️"})
        // console.log(coffees)
        // newArray.push("☕️")
        // console.log(newArray)
        const coffee = "☕️"
        return coffee.repeat(numCoffeeCups)
    }else if (num >= 30){
        const bento = "🍱"
        return bento.repeat(numBento)
    }
}
    
   

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {emojiMaker(minutes)} {minutes} min read</small>
            <p>{preview}</p>

        </article>
    )
}

export default Article;