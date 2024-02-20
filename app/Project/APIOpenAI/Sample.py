import openai

openai.api_key = "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"

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the difference between Celsius and Fahrenheit?"}
    ]
)

# Extracting the assistant's reply from the response
print(response)
