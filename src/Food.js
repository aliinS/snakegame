class Food {

    emojis = ['🐛', '🐞', '🐜', '🪰', '🪲', '🪳', '🦟', '🦗', '🕷', '🌼'];
    badFood = ['🦁', '🐝', '🦅', '🦉', '💩', '😼', '🏴‍☠️'];

    y;
    x;
    emoji;

    constructor ( boardSize, snakeCoordinates ) {

        let c;

        do{
        this.y = Math.floor(Math.random() * boardSize);
        this.x = Math.floor(Math.random() * boardSize);
        c = this.y + '-' + this.x;
        } while ( snakeCoordinates.includes(c) );

        const emojiIndex = Math.floor(Math.random() * this.emojis.length);
        this.emoji = this.emojis[emojiIndex];
    }

    getEmoji () {
        return this.emoji;
    }

}
export { Food }