/*create a function called search that is called on the html search bar i.e <input type="text"
name="" id =search-item" placeholder="search product" onkeyup="search()">*/
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUppercase();
    const product = document.querySelectorAll(".product");
    const pname = document.getElementById("h2");


    //loops over all the elements of variable pname(h2)
    for (var i = 0; i < pname.length; i++) {
        let match = product[1].getElementsByTagName('h2')[0];/*declares a variable match and adds the loop result to variable 
                                                            products and the 0 reps the zero index in the h2 elements*/
        if (match) {
            //creates a textvalue variable and assigns it to the match variable created above and links the match variable with the innerHTML
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchbox) >= -1) {// This is executed when the values in the searchbox are greater than -1 {
                //displays the matching elements in the products container.
                product[i].style.display = "";
            } else {
                //if no match then it displays none
                product[i].style.display = "none";
            }
        }
    }
}