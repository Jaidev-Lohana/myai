const input = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const speech = new SpeechSynthesisUtterance();

const sound = (content) => {
    speech.text = content;
    window.speechSynthesis.speak(speech);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value == "Hi") {
        output.innerText = "I am Luffy , who are you?";
        sound("I am Luffy , who are you?")
    }
    else if (input.value == "Hii") {
        output.innerText = "I am Luffy , who are you?";
        sound("I am Luffy , who are you?")
    }
    else if (input.value == "hi") {
        output.innerText = "I am Luffy , who are you?";
        sound("I am Luffy , who are you?")
    }
    else if (input.value == "I am Jaidev") {
        output.innerText = "What help do you want?";
        sound("what help do you want?")
    }
    else if (input.value == "I am Jaidev Lohana") {
        output.innerText = "What help do you want?";
        sound("what help do you want?")
    }
    else if (input.value == "open youtube") {
        window.open('https://www.youtube.com/')
        output.innerText = "Opening Youtube";
        sound("Opening Youtube")

    }
    else if (input.value == "Open Youtube") {
        window.open('https://www.youtube.com/')
        output.innerText = "Opening Youtube";
        sound("Opening Youtube")

    }
    else if (input.value == "open google") {
        window.open('https://www.google.com/')
        output.innerText = "Opening Google";
        sound("Opening Google")

    }
    else if (input.value == "Open Google") {
        window.open('https://www.google.com/')
        output.innerText = "Opening Google";
        sound("Opening Google")

    }
    else if (input.value == "Open My Replit") {
        window.open('https://replit.com/@Jaidev-Lohana')
        output.innerText = "Opening My Replit";
        sound("Opening My Replit")

    }
    else if (input.value == "open my replit") {
        window.open('https://replit.com/@Jaidev-Lohana')
        output.innerText = "Opening My Replit";
        sound("Opening My Replit")

    }
    else if (input.value == "Open E-mail") {
        window.open('https://mail.google.com/mail/u/0/#inbox')
        output.innerText = "Opening E-mail";
        sound("Opening E-mail")

    }
    else if (input.value == "open e-mail") {
        window.open('https://mail.google.com/mail/u/0/#inbox')
        output.innerText = "Opening E-mail";
        sound("Opening E-mail")

    }
    else if (input.value == "Open Chat GPT") {
        window.open('https://chat.openai.com/')
        output.innerText = "Opening Chat GPT";
        sound("Opening Chat GPT")
    }
    else if (input.value == "open chat gpt") {
        window.open('https://chat.openai.com/')
        output.innerText = "Opening Chat GPT";
        sound("Opening Chat GPT")
    }
    else if (input.value == "Open Web Whatsapp") {
        window.open('https://web.whatsapp.com/')
        output.innerText = "Opening Whatsapp Web";
        sound("Opening Whatsapp")
    }
    else if (input.value == "open web w hatsapp") {
        window.open('https://web.whatsapp.com/')
        output.innerText = "Opening Web Whatsapp";
        sound("Opening Whatsapp")
    }
    else if (input.value == "Compose An E-mail To My Brother and share the code") {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPLTbZnXCdhfZWNnlhgZLGgJddKtLDsZQpDgrsNntmHfppJptMRQmgScvHLRdgPjLHjq")
        output.innerText = "Sending mail";
        sound("Sending mail")
    }
    else if (input.value == "Open Git hub") {
        window.open('https://github.com/')
        output.innerText = "Opening Github";
        sound("Opening Github")

    }
    else if (input.value == "open git hub") {
        window.open('https://github.com/')
        output.innerText = "Opening Github";
        sound("Opening Github")

    }
    else if (input.value == "Open our school website") {
        window.open('https://www.littleworld.in/')
        output.innerText = "Opening Little World Website";
        sound("Opening Little World Website")

    }
    else if (input.value == "Open Our School Website") {
        window.open('https://www.littleworld.in/')
        output.innerText = "Opening Little World Website";
        sound("Opening Little World Website")

    }

    else {
        output.innerText = "Sorry I Didn't Get You";
        sound("Sorry I Didn't Get You");
    }

})

