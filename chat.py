from flask import Flask
from flask_socketio import SocketIO, emit, join_room, leave_room


def create_chat_server():

    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secret!'
    socketio = SocketIO(app, cors_allowed_origins="*")

    @socketio.on('join')
    def on_join(data):
        emit('connected')

    return app, socketio