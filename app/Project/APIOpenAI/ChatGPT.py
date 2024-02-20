import requests

def get_random_joke():
    # API endpoint for a random joke
    api_url = "https://official-joke-api.appspot.com/jokes/random"

    try:
        # Make a GET request to the API
        response = requests.get(api_url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            joke_data = response.json()

            # Extract and print the joke
            print("Setup:", joke_data['setup'])
            print("Punchline:", joke_data['punchline'])
        else:
            # Print an error message if the request was not successful
            print(f"Error: Unable to fetch joke (Status Code: {response.status_code})")

    except Exception as e:
        print(f"Error: {e}")

# Call the function to get a random joke
get_random_joke()
