const getCategories=document.querySelectorAll(".item");
console.log(`Number of categories: ${getCategories.length}`);

getCategories.forEach(element=>{
    const getElemItems = element.querySelectorAll("li");
    const getElemTitles=element.querySelector("H2");
    console.log(`Category: ${getElemTitles.textContent}
    Elements: ${getElemItems.length}`)
    
});

