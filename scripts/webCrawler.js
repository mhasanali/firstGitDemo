//link to make crawler for
let word=" ";
document.getElementById("button1").addEventListener("click",buttonHandler);
function buttonHandler()
{
    const input=document.getElementById("input1").value;
    if (input !== "")
    {
        word=input;
        crawl(word);
    }
}
function crawl(word){
    let links=[];
    for(let i=0; i<document.links.length; i++)
    {
        if(document.links[i].href === word)
        {
            links.push(document.links[i].href);
        }
    }
    console.log(links);
   // console.log(document.links);
}

