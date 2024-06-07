let randomNumber =
Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess =
    parseInt(document.getElementById('guessInput').value);
    attempts++;
    let message = '';

if (isNaN(guess) || guess < 1 || guess > 100)
    {
message = '請輸入一個1~100的數字';
}
else if (guess === randomNumber)
    {
        message = `答對了！答案是＄{randomNumber}。你用了＄{attempts} 次機會。`
    
        document.getElementById('guessInput').
        disabled = true;

        document.querySelector('button').
        disabled = true;
    }
    else if (guess < randomNumber){
        message = '在高一點';
    }
        else{
        message = '再低一點';
    }
    
    document.getElementById('message').textContent = message;
    document.getElementById('attempts').textContent = `已經猜了＄{attempts}次了`;

}

