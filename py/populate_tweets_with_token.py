
import requests
from bs4 import BeautifulSoup

BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPQfpQEAAAAA%2FTAIR8pvSSD0%2BC80rbQwlABMcxo%3DHP1TKbJMpf7xZPmf0ygolEDXhUG1jilKOkMz25Aiibltj7rU5L'  # Replace with your Bearer Token

def get_tweets(username, tweet_count):
    url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    headers = {
        'Authorization': f'Bearer {BEARER_TOKEN}',
        'User-Agent': 'v2UserTweetsPython'
    }
    params = {
        'screen_name': username,
        'count': tweet_count,
    }

    response = requests.get(url, headers=headers, params=params)

    if response.status_code != 200:
        raise Exception(f"Cannot get tweets (HTTP {response.status_code}): {response.text}")

    return response.json()

def insert_tweets_into_html(html_filepath):
    # Get the tweets
    tweets = get_tweets('jRPG_Library', 5)

    # Load the HTML content
    with open(html_filepath, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Use BeautifulSoup to modify the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')
    tweets_container = soup.find(id="tweets-content")

    # Insert tweets into the HTML container
    for tweet in tweets:
        tweet_div = soup.new_tag("div", **{"class": "tweet"})
        tweet_div.string = f"{tweet['created_at']}: {tweet['text']}"
        tweets_container.append(tweet_div)

    # Save the modified HTML back to the file
    with open(html_filepath, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Calling the function to insert tweets into the HTML
insert_tweets_into_html('5_Lost_Soul_Aside.html')
