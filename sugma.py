from chat import create_chat_server

app, server = create_chat_server()

if __name__ == "__main__":
    server.run(app, host='0.0.0.0')