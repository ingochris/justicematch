try:
    # only works in debug mode
    from flask_debugtoolbar import DebugToolbarExtension

    toolbar = DebugToolbarExtension()
except ImportError:
    print('debugtoolbar extension not available.')
from flask.ext.mongoengine import MongoEngine
nosql = MongoEngine()


from flask_socketio import SocketIO
socketio = SocketIO()


