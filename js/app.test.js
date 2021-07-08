const delayChangeText = require('./app.js');

test('Change the text after 1000 seconds', () => {
    expect(delayChangeText().toBe(subtext.textContent = "Dev"));
});