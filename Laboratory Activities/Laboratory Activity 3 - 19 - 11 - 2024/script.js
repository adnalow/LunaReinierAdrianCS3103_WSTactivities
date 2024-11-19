const textInput = document.getElementById('textInput');
const wordCountElement = document.getElementById('wordCount');
const sentenceCountElement = document.getElementById('sentenceCount');

// Add input event listener to the textInput
textInput.addEventListener('input', countUpdate);

// function initial call
countUpdate();

function countUpdate() {
    // Retrieve/trim text from the textInput field
    const text = textInput.value.trim();

    // Get the word count
    const wordCount = wordsCount(text);

    // Update the wordCount element
    wordCountElement.textContent = `Words: ${wordCount}`;

    // Get the sentence count
    const sentenceCount = countSentences(text);

    // Update the sentenceCount element with the result
    sentenceCountElement.textContent = `Sentences: ${sentenceCount}`;
}

function wordsCount(text) {
    // Split text to words using spaces or whitespace characters / filter out empty strings
    return text.split(/\s+/).filter(word => word !== '').length;
}

function countSentences(text) {
    // Split text based on sentence-ending punctuation marks (., !, ?) / filter out empty stringd
    return text.split(/[.!?]+\s/).filter(sentence => sentence !== '').length;
}

