from flask import Flask, request, jsonify, send_file
from tts import generate_audio, generate_conversation

app = Flask(__name__)

@app.route('/generate-podcast', methods=['POST'])
def generate_podcast():
    # Get the text from the request
    data = request.json
    article = data.get('text', '')

    if not article:
        return jsonify({'error': 'No text provided'}), 400

    # Use your existing logic to generate the conversation
    conversation = generate_conversation(article)

    # Generate audio
    generate_audio(conversation)

    # Return the generated audio file
    return send_file('podcast.mp3', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
