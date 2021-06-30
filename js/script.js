alert('Hello world');

let favoriteFood = [
    {
        name: 'Fruit',
        type: 'Tropical',


    },
    {
        name: 'SeaFood',
        type: ['Fish','OctopusSalat', 'Squid'],

    },
    
    
     

];
document.write('<ul>');

for (let i = 0; i < favoriteFood.length; i++){
    document.write('<li>');
    document.write(favoriteFood[i].name + ' ( ' + favoriteFood[i].type + ')');

    document.write('</li>');
}