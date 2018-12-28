const db = require('../database/db');
const faker = require('faker');

for (var x = 0; x < 50; x++) {
    var user = faker.name.findName();
    var picturesArray = [
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-user1.jpeg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-user2.jpeg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-user3.jpeg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-user4.jpeg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-user5.jpeg'
    ]
    var picture = picturesArray[faker.random.number({'min': 0, 'max': 4})];
    var status = faker.random.number({'min': 0, 'max': 1});
    var friendsAmount = Math.floor(Math.random() * (500 - 25)) + 25
    var reviewsAmount = Math.floor(Math.random() * 200);
    db.connection.query(`INSERT INTO users (user, userPic, elite, friends, reviews) VALUES ("${user}", "${picture}",${status}, ${friendsAmount}, ${reviewsAmount})`);

}

for (var j = 0; j < 2000; j++) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = faker.date.past(2).toLocaleDateString('en-US').split('/')
        date[0] = months[Number(date[0])-1];
        date[1] = date[1] + ',';
        date = date.join(' ');
    var person = faker.random.number({'min': 1, 'max': 50});
    var place = faker.random.number({'min': 1, 'max': 100});
    var rating = faker.random.number({'min': 1, 'max': 5});
    var foods = [
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/han-ii-kwan.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-10.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-11.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-2.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-3.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-4.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-5.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-6.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-7.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-8.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-9.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-12.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-13.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-14.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-15.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-16.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-17.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-18.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-19.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-20.jpg',
        'https://s3-us-west-1.amazonaws.com/photo-gallery-lorem-yelpsum/Photo-gallery/lorem-yelpsum-21.jpg'
    ]
    var food = foods[faker.random.number({'min': 0, 'max': 20})];
    var complements = ['This was delicious!', 'I would recommend this dish!', 'This was disgusting', `You've got to try this dish`, `I can't believe they did this`, 'Terrible', 'Food was too cold', 'Food was too hot', 'Great texture', 'Superb plating'];
    let complement = complements[Math.floor(Math.random() * 10)];
    db.connection.query(`INSERT INTO pictures (url, user_id, restaurant_id, rating, comments, day) VALUES ("${food}", ${person}, ${place}, ${rating}, "${complement}", "${date}")`);
}