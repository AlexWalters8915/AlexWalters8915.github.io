function linkValidate(){
    document.getElementById("htmlVal").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);

    //concatinate current link website link to the validator link 
    //https://www.w3schools.com/jsref/prop_loc_href.asp
    //reference in case further focumentation is needed regarding getting url
    document.getElementById("cssVal").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);
}