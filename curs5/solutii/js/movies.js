// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1
const movies= [
      {
        "adult": false,
        "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "genre_ids": [
          28,
          14,
          878
        ],
        "id": 436270,
        "original_language": "en",
        "original_title": "Black Adam",
        "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        "popularity": 4962.395,
        "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        "release_date": "2022-10-19",
        "title": "Black Adam",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 2758
      },
      {
        "adult": false,
        "backdrop_path": "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
        "genre_ids": [
          14,
          28,
          12
        ],
        "id": 736526,
        "original_language": "no",
        "original_title": "Troll",
        "overview": "Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?",
        "popularity": 3773.196,
        "poster_path": "/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
        "release_date": "2022-12-01",
        "title": "Troll",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 581
      },
      {
        "adult": false,
        "backdrop_path": "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
        "genre_ids": [
          28,
          18,
          36
        ],
        "id": 724495,
        "original_language": "en",
        "original_title": "The Woman King",
        "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        "popularity": 2598.014,
        "poster_path": "/lQMJHnHxUyj8kJlC2YOKNuzuwMP.jpg",
        "release_date": "2022-09-15",
        "title": "The Woman King",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 722
      },
      {
        "adult": false,
        "backdrop_path": "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
        "genre_ids": [
          14,
          28,
          35,
          80
        ],
        "id": 1013860,
        "original_language": "en",
        "original_title": "R.I.P.D. 2: Rise of the Damned",
        "overview": "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
        "popularity": 1827.976,
        "poster_path": "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
        "release_date": "2022-11-15",
        "title": "R.I.P.D. 2: Rise of the Damned",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 231
      },
      {
        "adult": false,
        "backdrop_path": "/dsWxCsAdsocMNQFbhe39ynAOhBa.jpg",
        "genre_ids": [
          80,
          53
        ],
        "id": 1049233,
        "original_language": "pl",
        "original_title": "Plan lekcji",
        "overview": "After a teacher dies, his best friend — a former cop — takes a job at the school where he worked to confront the gang he thinks was responsible.",
        "popularity": 1541.146,
        "poster_path": "/wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg",
        "release_date": "2022-11-23",
        "title": "Lesson Plan",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 53
      },
      {
        "adult": false,
        "backdrop_path": "/83IYtUhc7Vs8XYi5UYc2lUKuyMo.jpg",
        "genre_ids": [
          28,
          12,
          80,
          9648,
          53
        ],
        "id": 873126,
        "original_language": "it",
        "original_title": "Il mio nome è vendetta",
        "overview": "After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.",
        "popularity": 2025.942,
        "poster_path": "/7l3war94J4tRyWUiLAGokr3ViF2.jpg",
        "release_date": "2022-11-30",
        "title": "My Name Is Vendetta",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 155
      },
      {
        "adult": false,
        "backdrop_path": "/jCY35GkjwWUmoPO9EV1lWL6kuyj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 855440,
        "original_language": "es",
        "original_title": "Polar",
        "overview": "MG, a policewoman who has been expelled from the Corps due to the problems with alcohol and drugs that she has had since the loss of her son, receives a call from a man asking her to look for Macarena Gómez, a popular TV actress.",
        "popularity": 1279.289,
        "poster_path": "/efuKHH9LqBZB67AS87kprLgaYO8.jpg",
        "release_date": "2022-10-26",
        "title": "Polar",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/3RJ0B8JnwuOaQf6qmwTILXibcJj.jpg",
        "genre_ids": [
          28,
          878,
          14
        ],
        "id": 941520,
        "original_language": "en",
        "original_title": "Alien Sniperess",
        "overview": "A female sniper on military leave promises to fulfill her fiancé’s dying wish until she encounters a hostile alien invasion and is tasked with saving countless lives.",
        "popularity": 1351.289,
        "poster_path": "/bI1ZDRkerXrcaFa5kWjEMw80aqE.jpg",
        "release_date": "2022-04-08",
        "title": "Alien Sniperess",
        "video": false,
        "vote_average": 4.6,
        "vote_count": 9
      },
      {
        "adult": false,
        "backdrop_path": "/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 1712.743,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 94
      },
      {
        "adult": false,
        "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
        "genre_ids": [
          28,
          12,
          878
        ],
        "id": 505642,
        "original_language": "en",
        "original_title": "Black Panther: Wakanda Forever",
        "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
        "popularity": 1534.774,
        "poster_path": "/ps2oKfhY6DL3alynlSqY97gHSsg.jpg",
        "release_date": "2022-11-09",
        "title": "Black Panther: Wakanda Forever",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1326
      },
      {
        "adult": false,
        "backdrop_path": "/vmDa8HijINCAFYKqsMz0YM3sVyE.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 747803,
        "original_language": "en",
        "original_title": "One Way",
        "overview": "On the run with a bag full of cash after a robbing his former crime boss—and a potentially fatal wound—Freddy slips onto a bus headed into the unrelenting California desert. With his life slipping through his fingers, Freddy is left with very few choices to survive.",
        "popularity": 1344.549,
        "poster_path": "/uQCxOziq79P3wDsRwQhhkhQyDsJ.jpg",
        "release_date": "2022-09-02",
        "title": "One Way",
        "video": false,
        "vote_average": 7,
        "vote_count": 35
      },
      {
        "adult": false,
        "backdrop_path": "/sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 934641,
        "original_language": "en",
        "original_title": "The Minute You Wake Up Dead",
        "overview": "A stockbroker in a small southern town gets embroiled in an insurance scam with a next-door neighbor that leads to multiple murders when a host of other people want in on the plot. Sheriff Thurmond Fowler, the by-the-book town sheriff for over four decades, works earnestly to try and unravel the town’s mystery and winds up getting more than he bargained for.",
        "popularity": 1238.341,
        "poster_path": "/pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
        "release_date": "2022-11-04",
        "title": "The Minute You Wake Up Dead",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 26
      },
      {
        "adult": false,
        "backdrop_path": "/5aSvzECXrtABcIh7fZYkH2K6ttC.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 972313,
        "original_language": "en",
        "original_title": "Blowback",
        "overview": "When a master thief is sabotaged during a bank heist and left for dead, he seeks revenge on his former crew one target at a time. Now, with the cops and the mob closing in, he's in the race of his life to reclaim an untold fortune in cryptocurrency from those who double-crossed him.",
        "popularity": 981.779,
        "poster_path": "/fHQHC32dhom8u0OxC2hs2gYQh0M.jpg",
        "release_date": "2022-06-17",
        "title": "Blowback",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 25
      },
      {
        "adult": false,
        "backdrop_path": "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
        "genre_ids": [
          80,
          28,
          53
        ],
        "id": 829799,
        "original_language": "en",
        "original_title": "Paradise City",
        "overview": "Renegade bounty hunter Ryan Swan must carve his way through the Hawaiian crime world to wreak vengeance on the kingpin who murdered his father.",
        "popularity": 1045.921,
        "poster_path": "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
        "release_date": "2022-11-11",
        "title": "Paradise City",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 41
      },
      {
        "adult": false,
        "backdrop_path": "/2xbuun5NQ1exyvDhxJyXPX2GBsw.jpg",
        "genre_ids": [
          18
        ],
        "id": 1041898,
        "original_language": "tl",
        "original_title": "Pamasahe",
        "overview": "A penniless mother, with her infant child, takes on a journey by land and sea to find her husband in Manila. But this trip won't be free for she has to use her body to get to her destination.",
        "popularity": 910.315,
        "poster_path": "/6spqXV5kgNkZBIwjuZkxIx8flfQ.jpg",
        "release_date": "2022-12-09",
        "title": "Pamasahe",
        "video": false,
        "vote_average": 4.2,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/ggS7TQgu34Lct30MFwNlxVRJOia.jpg",
        "genre_ids": [
          80,
          10770
        ],
        "id": 937046,
        "original_language": "fr",
        "original_title": "L'oubliée d'Amboise",
        "overview": "",
        "popularity": 868.448,
        "poster_path": "/n7Per7QRNDcjTyDg8qHvotOBion.jpg",
        "release_date": "2022-04-03",
        "title": "L'oubliée d'Amboise",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 8
      },
      {
        "adult": false,
        "backdrop_path": "/8Tr79lfoCkOYRg8SYwWit4OoQLi.jpg",
        "genre_ids": [
          878,
          28
        ],
        "id": 872177,
        "original_language": "en",
        "original_title": "Corrective Measures",
        "overview": "Set in San Tiburon, the world's most dangerous maximum-security penitentiary and home to the world's most treacherous superpowered criminals, where tensions among the inmates and staff heighten, leading to anarchy that engulfs the prison and order is turned upside down.",
        "popularity": 787.985,
        "poster_path": "/aHFq9NMhavOL0jtQvmHQ1c5e0ya.jpg",
        "release_date": "2022-04-29",
        "title": "Corrective Measures",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 37
      },
      {
        "adult": false,
        "backdrop_path": "/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg",
        "genre_ids": [
          28,
          12,
          14,
          878
        ],
        "id": 19995,
        "original_language": "en",
        "original_title": "Avatar",
        "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
        "popularity": 1075.031,
        "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
        "release_date": "2009-12-15",
        "title": "Avatar",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 26820
      },
      {
        "adult": false,
        "backdrop_path": "/sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
        "genre_ids": [
          35,
          28,
          53
        ],
        "id": 792775,
        "original_language": "is",
        "original_title": "Leynilögga",
        "overview": "When Bússi, Iceland's toughest cop, is forced to work with a new partner to solve a series of bank robberies, the pressure to close the case as soon as possible proves too much for him.",
        "popularity": 959.592,
        "poster_path": "/jnWyZsaCl3Ke6u6ReSmBRO8S1rX.jpg",
        "release_date": "2022-05-23",
        "title": "Cop Secret",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 36
      },
      {
        "adult": false,
        "backdrop_path": "/c1bz69r0v065TGFA5nqBiKzPDys.jpg",
        "genre_ids": [
          35,
          10751,
          10402
        ],
        "id": 830784,
        "original_language": "en",
        "original_title": "Lyle, Lyle, Crocodile",
        "overview": "When the Primm family moves to New York City, their young son Josh struggles to adapt to his new school and new friends. All of that changes when he discovers Lyle — a singing crocodile who loves baths, caviar and great music — living in the attic of his new home. But when Lyle’s existence is threatened by evil neighbor Mr. Grumps, the Primms must band together to show the world that family can come from the most unexpected places.",
        "popularity": 625.408,
        "poster_path": "/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg",
        "release_date": "2022-10-07",
        "title": "Lyle, Lyle, Crocodile",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 171
      }
    ]