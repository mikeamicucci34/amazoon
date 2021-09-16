# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require '../../keys.rb'
# require 'rest-client'
require 'open-uri'

Category.delete_all
Helpful.delete_all
Product.delete_all
ShoppingCart.delete_all
User.delete_all


demo_user = User.new(
    username: "demo_user",
    email: "demouser@gmail.com",
    password: "demouser"
)
    
demo_user.save!


#

# rm = RestClient.get "https://amazon-products1.p.rapidapi.com/search?country=US&query=Macbook%2BPro&page=1&rapidapi-key=#{$api_key}"
# rm_array = JSON.parse(rm)["results"]
# User.destroy_all
# Product.destroy_all

# rm_array.each do |product| 
#   Product.create!(
#     title: product["title"],
#     description: "this works",
#     price: product["prices"]["current_price"],
#   )
# end


product1 = Product.create!({
    title: "Think on These Things",
    description: "‘The material contained in this volume was originally presented in the form of talks to students, teachers and parents in India, but its keen penetration and lucid simplicity will be deeply meaningful to thoughtful people everywhere, of all ages, and in every walk of life. Krishnamurti examines with characteristic objectivity and insight the expressions of what we are pleased to call our culture, our education, religion, politics and tradition; and he throws much light on such basic emotions as ambition, greed and envy, the desire for security and the lust for power – all of which he shows to be deteriorating factors in human society.’From the Editor’s Note‘Krishnamurti’s observations and explorations of modern man’s estate are penetrating and profound, yet given with a disarming simplicity and directness. To listen to him or to read his thoughts is to face oneself and the world with an astonishing morning freshness.’Anne Marrow Lindbergh",
    author: "J. Krishnamurti",
    category_id: 1,
    price: 12.99,
    pages: 272,
    category: "Philosophy",
})

product1.photo.attach(io: URI.open("https://amazoon-seeds.s3.amazonaws.com/Think_on_these_things.jpeg"), filename: "think_on_these_things.jpeg")

product2 = Product.create!({
    title: "Sapiens: A Brief History of Humankind",
    description: "Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.",
    author: "Yuval Noah Harari",
    category_id: 1,
    price: 14.99,
    pages: 469,
    category: "Best Sellers",

})

product2.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/sapiens.jpg"), filename: "sapiens.jpeg")

product3 = Product.create!({
    title: "Awareness: Conversations with the Masters",
    description: "The heart of Anthony de Mello's bestselling spiritual message is awareness. Mixing Christian spirituality, Buddhist parables, Hindu breathing exercises, and psychological insight, de Mello's words of hope come together in Awareness in a grand synthesis.    In short chapters for reading in quiet moments at home or at the office, he cajoles and challenges: We must leave this go-go-go world of illusion and become aware. And this only happens, he insists, by becoming alive to the needs and potential of others, whether at home or in the workplace.",
    author: "Anthony de Mello, SJ",
    category_id: 1,
    price: 12.99,
    pages: 194,
    category: "Philosophy",

})

product3.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Awareness- Conversations with the Masters.jpeg"), filename: "Conversations with the Masters.jpeg")

product4 = Product.create!({
    title: "On the Road",
    description: "Inspired by Jack Kerouac's adventures with Neal Cassady, On the Road tells the story of two friends whose cross-country road trips are a quest for meaning and true experience. Written with a mixture of sad-eyed naiveté and wild ambition and imbued with Kerouac's love of America, his compassion for humanity, and his sense of language as jazz, On the Road is the quintessential American vision of freedom and hope, a book that changed American literature and changed anyone who has ever picked it up.  ",
    author: "Jack Kerouac",
    category_id: 1,
    price: 12.99,
    pages: 306,
    category: "Classics",

})

product4.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/on_the_road.jpg"), filename: "on_the_road.jpeg")

product5 = Product.create!({
    title: "Slaughterhouse-Five: A Novel",
    description: "Slaughterhouse-Five, an American classic, is one of the world’s great antiwar books. Centering on the infamous World War II firebombing of Dresden, the novel is the result of what Kurt Vonnegut described as a twenty-three-year struggle to write a book about what he had witnessed as an American prisoner of war. It combines historical fiction, science fiction, autobiography, and satire in an account of the life of Billy Pilgrim, a barber’s son turned draftee turned optometrist turned alien abductee. As Vonnegut had, Billy experiences the destruction of Dresden as a POW. Unlike Vonnegut, he experiences time travel, or coming “unstuck in time.”",
    author: "Kurt Vonnegut",
    category_id: 1,
    price: 6.99,
    pages: 231,
    category: "Classics",

})

product5.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/slaughterhouse_five.jpeg"), filename: "slaughterhouse_five.jpeg")



product6 = Product.create!({
    title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
    description: "Ben Horowitz, cofounder of Andreessen Horowitz and one of Silicon Valley's most respected and experienced entrepreneurs, offers essential advice on building and running a startup—practical wisdom for managing the toughest problems business school doesn’t cover, based on his popular ben’s blog",
    author: "Ben Horowitz",
    category_id: 1,
    price: 14.99,
    pages: 308,
    category: "Business & Entrepreneurship",

})

product6.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/the_hard_thing.jpeg"), filename: "the_hard_thing.jpeg")


product7 = Product.create!({
    title: "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence",
    description: "When Michael Pollan set out to research how LSD and psilocybin (the active ingredient in magic mushrooms) are being used to provide relief to people suffering from difficult-to-treat conditions such as depression, addiction and anxiety, he did not intend to write what is undoubtedly his most personal book. But upon discovering how these remarkable substances are improving the lives not only of the mentally ill but also of healthy people coming to grips with the challenges of everyday life, he decided to explore the landscape of the mind in the first person as well as the third. Thus began a singular adventure into various altered states of consciousness, along with a dive deep into both the latest brain science and the thriving underground community of psychedelic therapists. Pollan sifts the historical record to separate the truth about these mysterious drugs from the myths that have surrounded them since the 1960s, when a handful of psychedelic evangelists inadvertently catalyzed a powerful backlash against what was then a promising field of research.",
    author: "Michael Pollan",
    category_id: 1,
    price: 9.99,
    pages: 474,
    category: "Best Sellers",

})

product7.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/How to Change Your Mind- What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence.jpeg"), filename: "Transcendence.jpeg")


product8 = Product.create!({
    title: "'Surely You're Joking, Mr. Feynman!': Adventures of a Curious Character",
    description: "Richard Feynman, winner of the Nobel Prize in physics, thrived on outrageous adventures. Here he recounts in his inimitable voice his experience trading ideas on atomic physics with Einstein and Bohr and ideas on gambling with Nick the Greek; cracking the uncrackable safes guarding the most deeply held nuclear secrets; accompanying a ballet on his bongo drums; painting a naked female toreador. In short, here is Feynman's life in all its eccentric—a combustible mixture of high intelligence, unlimited curiosity, and raging chutzpah.",
    author: "Richard Feynman",
    category_id: 1,
    price: 9.04,
    pages: 352,
    category: "Best Sellers",

})

product8.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/'Surely You're Joking, Mr. Feynman!'- Adventures of a Curious Character.jpeg"), filename: "Curious Character.jpeg")


product9 = Product.create!({
    title: "Man's Search for Meaning",
    description: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945 Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl's theory-known as logotherapy, from the Greek word logos ('meaning')-holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful.",
    author: "Viktor Frankl",
    category_id: 1,
    price: 9.99 ,
    pages: 188,
    category: "Philosophy",

})

product9.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Man's Search for Meaning.jpeg"), filename: "Search for Meaning.jpeg")


product10 = Product.create!({
    title: "The Dhammapada (Easwaran's Classics of Indian Spirituality Book 3)",
    description: "Dhammapada means 'the path of dharma,' the path of harmony and righteousness that anyone can follow to reach the highest good. The Dhammapada is a collection of verses, gathered probably from direct disciples who wanted to preserve what they had heard from the Buddha himself. Easwaran's best-selling translation of this classic Buddhist text is based on the original Pali.",
    author: "Eknath Easwaran",
    category_id: 1,
    price: 6.99,
    pages: 282,
    category: "Philosophy",

})


product10.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Dhammapada (Easwaran's Classics of Indian Spirituality Book 3).jpeg"), filename: "The Dhammapada.jpeg")


product11 = Product.create!({
    title: "A Supposedly Fun Thing I'll Never Do Again: Essays and Arguments",
    description: "In this exuberantly praised book -- a collection of seven pieces on subjects ranging from television to tennis, from the Illinois State Fair to the films of David Lynch, from postmodern literary theory to the supposed fun of traveling aboard a Caribbean luxury cruiseliner -- David Foster Wallace brings to nonfiction the same curiosity, hilarity, and exhilarating verbal facility that has delighted readers of his fiction, including the bestselling Infinite Jest.",
    author: "David Foster Wallace",
    category_id: 1,
    price: 10.99,
    pages: 372 ,
    category: "Humurous Fiction",

})

product11.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/A Supposedly Fun Thing I'll Never Do Again- Essays and Arguments.jpeg"), filename: "Fun Thing I'll Never Do Again.jpeg")


product12 = Product.create!({
    title: "The Mezzanine: A Novel",
    description: "In this startling, witty, and inexhaustibly inventive novel, New York Times–bestselling author Nicholson Baker uses a one-story escalator ride as the occasion for a dazzling reappraisal of everyday objects and rituals. From the humble milk carton to the act of tying one’s shoes, The Mezzanine at once defamiliarizes the familiar world and endows it with loopy and euphoric poetry.",
    author: "Nicholson Baker",
    category_id: 1,
    price: 9.99,
    pages: 145,
    category: "Best Sellers",

})

product12.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Mezzanine- A Novel.jpeg"), filename: "The Mezzanine.jpeg")


product13 = Product.create!({
    title: "The Corrections: A Novel",
    description: "Jonathan Franzen's third novel, The Corrections, is a great work of art and a grandly entertaining overture to our new century: a bold, comic, tragic, deeply moving family drama that stretches from the Midwest at mid-century to Wall Street and Eastern Europe in the age of greed and globalism. Franzen brings an old-time America of freight trains and civic duty, of Cub Scouts and Christmas cookies and sexual inhibitions, into brilliant collision with the modern absurdities of brain science, home surveillance, hands-off parenting, do-it-yourself mental healthcare, and the anti-gravity New Economy. With The Corrections, Franzen emerges as one of our premier interpreters of American society and the American soul.",
    author: "Jonathan Franzen",
    category_id: 1,
    price: 14.99,
    pages: 580,
    category: "Humurous Fiction",

})

product13.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Corrections- A Novel.jpeg"), filename: "The Corrections.jpeg")


product14 = Product.create!({
    title: "Kafka on the Shore",
    description: "Here we meet a teenage boy, Kafka Tamura, who is on the run, and Nakata, an aging simpleton who is drawn to Kafka for reasons that he cannot fathom. As their paths converge, acclaimed author Haruki Murakami enfolds readers in a world where cats talk, fish fall from the sky, and spirits slip out of their bodies to make love or commit murder, in what is a truly remarkable journey.",
    author: "Haruki Murakami",
    category_id: 1,
    price: 11.99,
    pages: 448,
    category: "Classics",

})

product14.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Kafka on the Shore.jpeg"), filename: "Kafka on the Shore.jpeg")


product15 = Product.create!({
    title: "White Noise",
    description: "A brilliant satire of mass culture and the numbing effects of technology, White Noise tells the story of Jack Gladney, a teacher of Hitler studies at a liberal arts college in Middle America. Jack and his fourth wife, Babette, bound by their love, fear of death, and four ultramodern offspring, navigate the rocky passages of family life to the background babble of brand-name consumerism. Then a lethal black chemical cloud, unleashed by an industrial accident, floats over there lives, an 'airborne toxic event' that is a more urgent and visible version of the white noise engulfing the Gladneys—the radio transmissions, sirens, microwaves, and TV murmurings that constitute the music of American magic and dread.",
    author: "Don DeLillo",
    category_id: 1,
    price: 13.99,
    pages: 324,
    category: "Humurous Fiction",

})

product15.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/White Noise.jpeg"), filename: "White Noise.jpeg")


product16 = Product.create!({
    title: "Stoner",
    description: "William Stoner is born at the end of the nineteenth century into a dirt-poor Missouri farming family. Sent to the state university to study agronomy, he instead falls in love with English literature and embraces a scholar’s life, so different from the hardscrabble existence he has known. And yet as the years pass, Stoner encounters a succession of disappointments: marriage into a “proper” family estranges him from his parents; his career is stymied; his wife and daughter turn coldly away from him; a transforming experience of new love ends under threat of scandal. Driven ever deeper within himself, Stoner rediscovers the stoic silence of his forebears and confronts an essential solitude.",
    author: "John Williams ",
    category_id: 1,
    price: 9.99,
    pages: 320,
    category: "Best Sellers",

})

product16.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Stoner.jpeg"), filename: "Stoner.jpeg")


product17 = Product.create!({
    title: "The Pale King: An Unfinished Novel",
    description: "The agents at the IRS Regional Examination Center in Peoria, Illinois, appear ordinary enough to newly arrived trainee David Foster Wallace. But as he immerses himself in a routine so tedious and repetitive that new employees receive boredom-survival training, he learns of the extraordinary variety of personalities drawn to this strange calling. And he has arrived at a moment when forces within the IRS are plotting to eliminate even what little humanity and dignity the work still has.",
    author: "David Foster Wallace",
    category_id: 1,
    price: 11.99,
    pages: 589,
    category: "Humurous Fiction",

})

product17.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Pale King- An Unfinished Novel.jpeg"), filename: "The Pale King.jpeg")


product18 = Product.create!({
    title: "The Broom of the System: A Novel",
    description: "Published when Wallace was just twenty-four years old, The Broom of the System stunned critics and marked the emergence of an extraordinary new talent. At the center of this outlandishly funny, fiercely intelligent novel is the bewitching heroine, Lenore Stonecipher Beadsman. The year is 1990 and the place is a slightly altered Cleveland, Ohio. Lenore’s great-grandmother has disappeared with twenty-five other inmates of the Shaker Heights Nursing Home. Her beau, and boss, Rick Vigorous, is insanely jealous, and her cockatiel, Vlad the Impaler, has suddenly started spouting a mixture of psycho-babble, Auden, and the King James Bible. Ingenious and entertaining, this debut from one of the most innovative writers of his generation brilliantly explores the paradoxes of language, storytelling, and reality.",
    author: "David Foster Wallace",
    category_id: 1,
    price: 9.99,
    pages: 482,
    category: "Humurous Fiction",

})

product18.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Broom of the System- A Novel.jpeg"), filename: "The Broom of the System.jpeg")



product32 = Product.create!({
    title: "Consider the Lobster: And Other Essays",
    description: "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person?

    David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of John McCain's 2000 presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.",
    author: "David Foster Wallace",
    category_id: 1,
    price: 10.99 ,
    pages: 381,
    category: "Humurous Fiction",

})

product32.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Consider the Lobster- And Other Essays.jpeg"), filename: "Consider the Lobster.jpeg")


product19 = Product.create!({
    title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    description: "Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business.",
    author: "Eric Ries",
    category_id: 1,
    price: 14.99,
    pages: 254,
    category: "Business & Entrepreneurship",

})

product19.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Lean Startup- How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses.jpeg"), filename: "The Lean Startup.jpeg")


product20 = Product.create!({
    title: "The Stranger (Vintage International)",
    description: "Behind the intrigue, Camus explores what he termed 'the nakedness of man faced with the absurd' and describes the condition of reckless alienation and spiritual exhaustion that characterized so much of twentieth-century life. 

    First published in 1946; now in translation by Matthew Ward.",
    author: "Albert Camus",
    category_id: 1,
    price: 2.99,
    pages: 146,
    category: "Classics",

})

product20.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/the_strangers.jpeg"), filename: "the_strangers.jpeg")


product21 = Product.create!({
    title: "The Fountainhead",
    description: "This modern classic is the story of intransigent young architect Howard Roark, whose integrity was as unyielding as granite...of Dominique Francon, the exquisitely beautiful woman who loved Roark passionately, but married his worst enemy...and of the fanatic denunciation unleashed by an enraged society against a great creator. As fresh today as it was then, Rand’s provocative novel presents one of the most challenging ideas in all of fiction—that man’s ego is the fountainhead of human progress...",
    author: "Ayn Rand",
    category_id: 1,
    price: 9.99,
    pages: 752,
    category: "Classics",

})

product21.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Fountainhead.jpeg"), filename: "The Fountainhead.jpeg")



product23 = Product.create!({
    title: "High Output Management",
    description: "In this legendary business book and Silicon Valley staple, the former chairman and CEO of Intel shares his perspective on how to build and run a company. A practical handbook for navigating real-life business scenarios and a powerful management manifesto with the ability to revolutionize the way we work. ",
    author: "Andrew S. Grove",
    category_id: 1,
    price: 13.99,
    pages: 261,
    category: "Business & Entrepreneurship",

})

product23.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/High Output Management.jpeg"), filename: "High Output Management.jpeg")


product24 = Product.create!({
    title: "Brave New World",
    description: "Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites. ",
    author: "Aldous Huxley",
    category_id: 1,
    price: 13.49,
    pages: 136,
    category: "Classics",

})

product24.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Brave New World- With the Essay 'Brave New World Revisited'.jpeg"), filename: "Brave New World.jpeg")


product25 = Product.create!({
    title: "A Clockwork Orange",
    description: "A vicious fifteen-year-old droog is the central character of this 1963 classic. In Anthony Burgess's nightmare vision of the future, where the criminals take over after dark, the story is told by the central character, Alex, who talks in a brutal invented slang that brilliantly renders his and his friends' social pathology. A Clockwork Orange is a frightening fable about good and evil, and the meaning of human freedom. When the state undertakes to reform Alex to 'redeem' him, the novel asks, 'At what cost?' This edition includes the controversial last chapter not published in the first edition and Burgess's introduction 'A Clockwork Orange Resucked.'",
    author: "Anthony Burgess",
    category_id: 1,
    price: 9.04,
    pages: 162,
    category: "Classics",

})

product25.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/A Clockwork Orange.jpeg"), filename: "A Clockwork Orange.jpeg")


product26 = Product.create!({
    title: "The Grapes of Wrath",
    description: "First published in 1939, Steinbeck’s Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics.",
    author: "John Steinbeck",
    category_id: 1,
    price: 1.99,
    pages: 215,
    category: "Classics",

})

product26.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/The Grapes of Wrath.jpeg"), filename: "The Grapes of Wrath.jpeg")


product27 = Product.create!({
    title: "American Pastoral",
    description: "American Pastoral is the story of a fortunate American's rise and fall—of a strong, confident master of social equilibrium overwhelmed by the forces of social disorder. Seymour 'Swede' Levov—a legendary high school athlete, a devoted family man, a hard worker, the prosperous inheritor of his father's Newark glove factory—comes of age in thriving, triumphant postwar America. But everything he loves is lost when the country begins to run amok in the turbulent 1960s. Not even the most private, well-intentioned citizen, it seems, gets to sidestep the sweep of history. With vigorous realism, Roth takes us back to the conflicts and violent transitions of the 1960s. This is a book about loving—and hating—America. It's a book about wanting to belong—and refusing to belong—to America. It sets the desire for an American pastoral—a respectable life of space, calm, order, optimism, and achievement—against the indigenous American Berserk.",
    author: "Philip Roth",
    category_id: 1,
    price: 9.99,
    pages: 436,
    category: "Classics",

})

product27.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/American Pastoral.jpeg"), filename: "American Pastoral.jpeg")


product28 = Product.create!({
    title: "1984",
    description: "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
    author: "George Orwell",
    category_id: 1,
    price: 9.99,
    pages: 205,
    category: "Classics",

})

product28.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/1984.jpeg"), filename: "1984.jpeg")



product30 = Product.create!({
    title: "A Confession",
    description: "Despite having written War and Peace and Anna Karenina, Leo Tolstoy, at the age of 51, looked back on his life and considered it a meaningless, regrettable failure. A Confession provides insight into the great Russian writer's movement from the pursuit of aesthetic ideals toward matters of religious and philosophical consequence.
    Authentic and genuinely moving, this memoir of midlife spiritual crisis was first distributed in 1872 and marked a turning point in the author's career as a writer: in subsequent years, Tolstoy would write almost exclusively about religious life, especially devotion among the peasantry.
    Generations of readers have been inspired by this heartfelt reexamination of Christian orthodoxy and subsequent spiritual awakening. Ranked among the best books on the subject, this timeless work is for anyone who has ever worried about the fleeting nature of life and speculated about the value of existence.",
    author: "Leo Tolstoy",
    category_id: 1,
    price: 2.99,
    pages: 98,
    category: "Philosophy",
})

product30.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/A Confession.jpeg"), filename: "A Confession.jpeg")


product31 = Product.create!({
    title: "Infinite Jest",
    description: "A gargantuan, mind-altering comedy about the pursuit of happiness in America. Set in an addicts' halfway house and a tennis academy, and featuring the most endearingly screwed-up family to come along in recent fiction, Infinite Jest explores essential questions about what entertainment is and why it has come to so dominate our lives; about how our desire for entertainment affects our need to connect with other people; and about what the pleasures we choose say about who we are.",
    author: "David Foster Wallace",
    category_id: 1,
    price: 12.99,
    pages: 1079,
    category: "Humurous Fiction",
})

product31.photo.attach(io: URI.open("/Users/michaelamicucci/Documents/App Academy/full_stack_pt2/book photos/Infinite Jest.jpeg"), filename: "Infinite Jest.jpeg")
