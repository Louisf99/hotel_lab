use bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "James Morrison",
        email: "thelizardking@thedoors.com",
        checkedin: false
    },
    {
        name: "Ray Manzarek",
        email: "wigglefingers@thedoors.com",
        checkedin: false
    },
    {
        name: "Robbie Krieger",
        email: "guitardude69@thedoors.com",
        checkedin: true
    },
    {
        name: "John Densomre",
        email: "j.densmore@thedoors.com",
        checkedin: true
    },
]);