// this script is my attempt at automating the microsoft/bing rewards
// i run this directly from chrome devtools


// function to select random item

function random_item(searches) {

    return searches[Math.floor(Math.random() * searches.length)];

}


// array of Google's most popular searches in 2020
var searches = [
    "facebook",
    "youtube",
    "amazon",
    "pornhub",
    "gmail",
    "google",
    "weather",
    "ebay",
    "yahoo",
    "xnxx",
    "walmart",
    "yahoo mail",
    "google translate",
    "google maps",
    "xvideos",
    "craigslist",
    "netflix",
    "google docs",
    "translate",
    "home depot",
    "news",
    "fox news",
    "calculator",
    "usps tracking",
    "cnn",
    "hotmail",
    "google drive",
    "maps",
    "paypal",
    "porn",
    "xhamster",
    "lowes",
    "instagram",
    "msn",
    "amazon prime",
    "target",
    "espn",
    "zillow",
    "bank of america",
    "wells fargo",
    "xvideo",
    "twitter",
    "google classroom",
    "indeed",
    "best buy",
    "porn hub",
    "speed test",
    "linkedin",
    "aol mail",
    "hulu",
    "you tube",
    "chaturbate",
    "pinterest",
    "trump",
    "nba",
    "roblox",
    "capital one",
    "traductor",
    "nfl",
    "facebook login",
    "costco",
    "youtube to mp3",
    "ups tracking",
    "chase",
    "kohls",
    "reddit",
    "google flights",
    "american airlines",
    "bing",
    "etsy",
    "twitch",
    "dominos",
    "airbnb",
    "spotify",
    "fedex tracking",
    "redtube",
    "nfl scores",
    "restaurants near me",
    "macys",
    "aol",
    "google scholar",
    "pizza hut",
    "free porn",
    "womens world cup 2019",
    "usps",
    "expedia",
    "discord",
    "credit karma",
    "outlook",
    "youporn",
    "southwest airlines",
    "verizon",
    "walgreens",
    "harbor freight",
    "entertainment",
    "pandora",
    "bed bath and beyond",
    "united airlines",
    "turbotax",
    "facebook log in"
];
// display the random item selected
console.log(random_item(searches));

// loop to open 10 tabs
var i = 0;
while (i < 10) {
    var url = "https://www.bing.com/search?q=" + random_item(searches);
    open(url);
    i++
}

//the code below works - but only for one search at a time so I just commented it out
// much more practical to use one at a time

// var url = "https://www.bing.com/search?q=" + random_item(searches);

// open(url);
