let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    },
    {
        "code": "as",
        "name": "American Samoa",
        "path": "americansamoa"
    },
];

function findCountryCode(countryName){
    for(let index = 0; index<countries.length; index++){
        let element = countries[index];
        if(countryName.name === countryName){
            return country.code
        }

    }
    
}
let result = findCountryCode("Algeria")
console.log(result)