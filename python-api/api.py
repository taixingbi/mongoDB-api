from pymongo import MongoClient

username='kaden';
password='1234';
uri = "mongodb://" + username + ":" + password + "@54.87.133.19:27017/ml-test";
#uri = "mongodb://54.87.133.19:27017/ml-test";

print("\ndomain...")
print(uri)

client = MongoClient(uri, 27017)

print("\nclient...")
print(client)

db = client['ml-test'] #table test
print("\ndb...")
print(db)

print("\n------------")
# bills_post = posts.find_one({'name': 'hunter'})
# print(bills_post)

doc= 'test'
posts = db[doc] # documentory
post_data = {
    'name': 'hunter',
    'content': 'PyMongo is fun, you guys',
    'author': 'Scott'
}

result = posts.insert_one(post_data)
# print('One post: {0}'.format(result.inserted_id))

# print("\nview_post...")
# view_post = posts.find_one({'name': 'hunter'})
# print(view_post)

print("done")