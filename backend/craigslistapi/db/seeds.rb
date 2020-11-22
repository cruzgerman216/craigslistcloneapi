#  users
gc = User.create(email: "test3", city: "Van Buren", password:"test")

x = 0 
while x <= 100
    User.create(email: "#{Faker::Internet.email}", city: "#{Faker::Address.city}", password:"#{Faker::Internet.password}")
    x+=1
end

# category
community = Category.create(name: "community")
activities = community.subcategories.create(name: "activities")
community.subcategories.create(name: "lost+found")
artists = community.subcategories.create(name: "artists")
community.subcategories.create(name: "missed")
community.subcategories.create(name: "childcare")
community.subcategories.create(name: "connections")
community.subcategories.create(name: "classes")
community.subcategories.create(name: "musicians")
community.subcategories.create(name: "events")
community.subcategories.create(name: "pets")
community.subcategories.create(name: "general")
community.subcategories.create(name: "politics")
community.subcategories.create(name: "groups")
community.subcategories.create(name: "rants & raves")
community.subcategories.create(name: "local news")
community.subcategories.create(name: "rideshare")
community.subcategories.create(name: "volunteers")

housing = Category.create(name: "housing")
housing.subcategories.create(name: "apts / housing")
housing.subcategories.create(name: "housing swap")
housing.subcategories.create(name: "housing wanted")
housing.subcategories.create(name: "office / commercial")
housing.subcategories.create(name: "parking / storage")
housing.subcategories.create(name: "real estate for sale")
housing.subcategories.create(name: "rooms / shared")
housing.subcategories.create(name: "rooms wanted")
housing.subcategories.create(name: "sublets / temporay")
housing.subcategories.create(name: "vacation rentals")

jobs = Category.create(name: "jobs")
jobs.subcategories.create(name: "admin / office")
jobs.subcategories.create(name: "arch / egnineering")
jobs.subcategories.create(name: "art / media / design ")
jobs.subcategories.create(name: "biotech / science")
jobs.subcategories.create(name: "business / mgmt")
jobs.subcategories.create(name: "customer service")
jobs.subcategories.create(name: "education")
jobs.subcategories.create(name: "ect / misc")
jobs.subcategories.create(name: "food / bev / hsp")
jobs.subcategories.create(name: "general labor")
jobs.subcategories.create(name: "government")
jobs.subcategories.create(name: "human resources")
jobs.subcategories.create(name: "legal / paralegal")
jobs.subcategories.create(name: "manufacturing")
jobs.subcategories.create(name: "marketing / pr / ad")
jobs.subcategories.create(name: "medical / health")
jobs.subcategories.create(name: "nonprofit sector")
jobs.subcategories.create(name: "real estate")
jobs.subcategories.create(name: "retail / wholesale")
jobs.subcategories.create(name: "sales / biz dev")
jobs.subcategories.create(name: "salon / spa / fitness")
jobs.subcategories.create(name: "security")
jobs.subcategories.create(name: "skilled trade / craft")
jobs.subcategories.create(name: "software / qa / dba")
jobs.subcategories.create(name: "systems / network")
jobs.subcategories.create(name: "technical support")
jobs.subcategories.create(name: "transport")
jobs.subcategories.create(name: "tv / film / video")
jobs.subcategories.create(name: "web / info / design")
jobs.subcategories.create(name: "writing / editing")

services = Category.create(name: "services")
services.subcategories.create(name: "automotive")
services.subcategories.create(name: "labor/move")
services.subcategories.create(name: "beauty")
services.subcategories.create(name: "legal")
services.subcategories.create(name: "cell/mobile")
services.subcategories.create(name: "lessons")
services.subcategories.create(name: "computer")
services.subcategories.create(name: "marine")
services.subcategories.create(name: "creative")
services.subcategories.create(name: "pet")
services.subcategories.create(name: "cycle")
services.subcategories.create(name: "real estate")
services.subcategories.create(name: "event")
services.subcategories.create(name: "skilled trade")
services.subcategories.create(name: "farm+garden")
services.subcategories.create(name: "sm biz ads")
services.subcategories.create(name: "financial")
services.subcategories.create(name: "travel/vc")
services.subcategories.create(name: "household")
services.subcategories.create(name: "write/ed/tran")

sale = Category.create(name: "for sale")
sale.subcategories.create(name: "antiques")
sale.subcategories.create(name: "farm+garden")
sale.subcategories.create(name: "appliances")
sale.subcategories.create(name: "free")
sale.subcategories.create(name: "arts+crafts")
sale.subcategories.create(name: "furniture")
sale.subcategories.create(name: "atv/utv/sno")
sale.subcategories.create(name: "garage sale")
sale.subcategories.create(name: "auto parts")
sale.subcategories.create(name: "general")
sale.subcategories.create(name: "aviation")
sale.subcategories.create(name: "heavy equip")
sale.subcategories.create(name: "baby+kid")
sale.subcategories.create(name: "household")
sale.subcategories.create(name: "barter")
sale.subcategories.create(name: "jewelry")
sale.subcategories.create(name: "beauty+hlth")
sale.subcategories.create(name: "materials")
sale.subcategories.create(name: "bike parts")
sale.subcategories.create(name: "motorcycle parts")
sale.subcategories.create(name: "motorcycles")
sale.subcategories.create(name: "boat parts")
sale.subcategories.create(name: "music instr")
sale.subcategories.create(name: "boats")
sale.subcategories.create(name: "photo+video")
sale.subcategories.create(name: "books")
sale.subcategories.create(name: "rvs+camp")
sale.subcategories.create(name: "business")
sale.subcategories.create(name: "sporting")
sale.subcategories.create(name: "cars+trucks")
sale.subcategories.create(name: "tickets")
sale.subcategories.create(name: "cds/dvd/vhs")
sale.subcategories.create(name: "tools")
sale.subcategories.create(name: "cell phones")
sale.subcategories.create(name: "toys+games")
sale.subcategories.create(name: "clothes+acc")
sale.subcategories.create(name: "trailers")
sale.subcategories.create(name: "collectibles")
sale.subcategories.create(name: "video gaming")
sale.subcategories.create(name: "computer parts")
sale.subcategories.create(name: "wanted")
sale.subcategories.create(name: "computer")
sale.subcategories.create(name: "wheels+tires")
sale.subcategories.create(name: "electronics")

gigs = Category.create(name: "gigs")
gigs.subcategories.create(name: "computer")
gigs.subcategories.create(name: "event")
gigs.subcategories.create(name: "creative")
gigs.subcategories.create(name: "labor")
gigs.subcategories.create(name: "crew")
gigs.subcategories.create(name: "talent")
gigs.subcategories.create(name: "domestic")
gigs.subcategories.create(name: "writing")

resumes = Category.create(name: "resumes")

df = Category.create(name: "discussion forums")
df.subcategories.create(name: "android")
df.subcategories.create(name: "frugal")
df.subcategories.create(name: "pets")
df.subcategories.create(name: "apple")
df.subcategories.create(name: "gamming")
df.subcategories.create(name: "philos")
df.subcategories.create(name: "arts")
df.subcategories.create(name: "garden")
df.subcategories.create(name: "photo")
df.subcategories.create(name: "atheist")
df.subcategories.create(name: "haiku")
df.subcategories.create(name: "politics")
df.subcategories.create(name: "autos")
df.subcategories.create(name: "help")
df.subcategories.create(name: "psych")
df.subcategories.create(name: "beauty")
df.subcategories.create(name: "history")
df.subcategories.create(name: "recover")
df.subcategories.create(name: "bikes")
df.subcategories.create(name: "housing")
df.subcategories.create(name: "religion")
df.subcategories.create(name: "celebs")
df.subcategories.create(name: "jobs")
df.subcategories.create(name: "rofo")
df.subcategories.create(name: "comp")
df.subcategories.create(name: "jokes")
df.subcategories.create(name: "science")
df.subcategories.create(name: "cosmos")
df.subcategories.create(name: "legal")
df.subcategories.create(name: "spirit")
df.subcategories.create(name: "diet")
df.subcategories.create(name: "linux")
df.subcategories.create(name: "sports")
df.subcategories.create(name: "divorce")
df.subcategories.create(name: "manners")
df.subcategories.create(name: "super")
df.subcategories.create(name: "dying")
df.subcategories.create(name: "marriage")
df.subcategories.create(name: "tax")
df.subcategories.create(name: "eco")
df.subcategories.create(name: "money")
df.subcategories.create(name: "travel")
df.subcategories.create(name: "feedbk")
df.subcategories.create(name: "music")
df.subcategories.create(name: "tv")
df.subcategories.create(name: "film")
df.subcategories.create(name: "open")
df.subcategories.create(name: "vegan")
df.subcategories.create(name: "fixit")
df.subcategories.create(name: "outdoor")
df.subcategories.create(name: "words")
df.subcategories.create(name: "food")
df.subcategories.create(name: "parent")
df.subcategories.create(name: "writing")



# posts
post = Post.new(title: "jimmy's neutron", city: "Van Buren", description: "birthday part Jimmy Neustron Style")
gc.posts << post
activities.posts << post
post = Post.new(title: "Teen Titans", city: "Van Buren", description: "birthday part teen titans Style")
gc.posts << post
activities.posts << post


# while x <= 300
#     num = Random.new.rand(0...99)
#     num_sentences = Random.new.rand(0...10)
#     num_paragraphs = Random.new.rand(0...10)

#     post = Post.new(
#     title: "title #{Faker::Lorem.sentence(word_count:num_sentences)}",
#     city: "#{Faker::Address.city}", 
#      description: "description #{Faker::Lorem.paragraphs(number:num_paragraphs).join(" ")}")
     
#     users[num].posts << post
#     categories[num].posts << post
#     x+=1
# end

x = 0 
users = User.all 
categories = Category.all
x = categories.count - 60
while 0 < x
    category = categories[x]
        j = 0
        while j <= 35
        num = Random.new.rand(0...99)
        num_sentences = Random.new.rand(0...10)
        num_paragraphs = Random.new.rand(0...10)

        post = Post.new(
            title: "#{Faker::Lorem.sentence(word_count:num_sentences)}",
            city: "#{Faker::Address.city}", 
            description: "#{Faker::Lorem.paragraphs(number:num_paragraphs).join(" ")}"
        )
        users[num].posts << post
        category.posts << post
        j+=1
    end
    x-=1
end
# rails db:drop drop all migrations and database
# rails db:reset deletes all data from table and seeds