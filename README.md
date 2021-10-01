# Slack Knowledge Pill

The Slack Knowledge Pill is a bot to share tips about many subjects.

The program get a random message in `.\lib\message.json` file.

## samples

```json
{
    "topic1": {
        "conf": {
            "emoji": ":x:",
            "username": "x message",
            "color": "#000000",
            "info" : {
                "source": "https://www.x.com",
                "description": "descriotion x"
            }
        },
        "messages": {
            "title 1" : [
                "message 1",
                "message 2"
            ]
        }
    },
    "topic2": {
        "conf": {
            "emoji": ":?:",
            "username": "? message",
            "color": "#000000",
            "info" : {
                "source": "https://www.ask.com",
                "description": "descriotion ?"
            }
        },
        "messages": {
            "title 1" : [
                "message 1",
                "message 2"
            ]
        }
    }
}
```

## build image

```bash
docker build \
      --pull \
      --rm \
      -f "Dockerfile" \
      -t pedrorobsonleao/skpills:v1.0.0 "." 
```

## run image

To execute this bot you need config the `input webhook` in you slack!

Set the environment variable `SLACK_URL` with the `input webhook url` and set the variable `SLACK_CHANNEL` with the channel name.

Call docker command:

```bash
docker run  \
      --rm \
      --name skpill \
      -e SLACK_URL=${SLACK_URL} \
      -e SLACK_CHANNEL=${SLACK_CHANNEL} \ 
      pedrorobsonleao/skpills:v1.0.0
```
