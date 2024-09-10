from flask import Flask, render_template, send_from_directory
import os


def create_app():
    app = Flask(__name__, static_folder='frontend/build')
    app.config['SECRET_KEY'] = 'secret!'

    @app.route('/main')
    def main():
        return "Main page testing."
    
    @app.route('/chat')
    def chat():
        
        return render_template('chat.jinja')
    
    @app.route('/test')
    def test():

        return render_template('testing.jinja')
    
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(app.static_folder + '/' + path):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    
    return app




