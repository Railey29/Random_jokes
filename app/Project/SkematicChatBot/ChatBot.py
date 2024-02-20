from nltk.chat.util import Chat, reflections

pairs = [
    ["name (.*)" , ["Hello %1! How can I help you?"]],
    ["I (want|need) (.*)" , ["Why do you want %2?", "What will you do with %2?"]],
]

chat = Chat(pairs, reflections)
print("dictionaries values: " , reflections)
while True:
    user_input = input("You: ")
    response = chat.respond(user_input)
    print("Bot:", response)
