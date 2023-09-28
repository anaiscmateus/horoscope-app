// WHEN THE USER ENTERS THEIR BIRTHDAY, THEY WILL GET A HOROSCOPE
// VARIABLES
let sign = document.querySelector('#sign')
let desc = document.querySelector('#desc')

// EVENT LISTENERS
// create a listener to wait for the user to submit their birthday
document.querySelector('#submit').addEventListener('click', getBirthday)

// FUNCTIONS
// create a function that will get the user's birth month and day
function getBirthday(){
    let month = document.querySelector('#month-list').value.toLowerCase()
    let date = document.querySelector('#day-list').value
    getSign(month, date)
}

// create a function that takes in the month and date form getBirthday() to determine and show the user their zodiac sign
// CHATGPT USED FOR SIGN DESCRIPTIONS
function getSign(month, date) {
    if ((month === 'march' && date >= 21) || (month === 'april' && date <= 19)) {
        sign.innerText = '♈ Aries (March 21 - April 19)'
        desc.innerText = 'Aries is symbolized by the Ram and belongs to the Fire element. People born under this sign are known for their energy, adventurous spirit, and independence.'
    } else if ((month === 'april' && date >= 20) || (month === 'may' && date <= 20)) {
        sign.innerText = '♉ Taurus (April 20 - May 20)'
        desc.innerText = 'Taurus is symbolized by the Bull and is associated with the Earth element. Taureans are often described as reliable, practical, and sometimes a bit stubborn.'
    } else if ((month === 'may' && date >= 21) || (month === 'june' && date <= 20)) {
        sign.innerText = '♊ Gemini (May 21 - June 20)' 
        desc.innerText = 'Symbolized by the Twins and belonging to the Air element, Geminis are adaptable, communicative, and curious individuals.'
    } else if ((month === 'june' && date >= 21) || (month === 'july' && date <= 22)) {
        sign.innerText = '♋ Cancer (June 21 - July 22)'
        desc.innerText = 'Cancer, represented by the Crab and tied to the Water element, is known for its nurturing, emotional, and sensitive personality traits.'
    } else if ((month === 'july' && date >= 23) || (month === 'august' && date <= 22)) {
        sign.innerText = '♌ Leo (July 23 - August 22)'
        desc.innerText = 'Leo, symbolized by the Lion and associated with Fire, is confident, outgoing, and creative, often seeking the spotlight.'
    } else if ((month === 'august' && date >= 23) || (month === 'september' && date <= 22)) {
        sign.innerText = '♍ Virgo (August 23 - September 22)'
        desc.innerText = 'Virgo, symbolized by the Virgin, falls under the Earth element. Virgos are typically described as detail-oriented, practical, and analytical.'
    } else if ((month === 'september' && date >= 23) || (month === 'october' && date <= 22)) {
        sign.innerText = '♎ Libra (September 23 - October 22)'
        desc.innerText = 'Represented by the Scales and belonging to the Air element, Libras are diplomatic, social, and have a strong sense of balance in their lives.'
    } else if ((month === 'october' && date >= 23) || (month === 'november' && date <= 21)) {
        sign.innerText = '♏ Scorpio (October 23 - November 21)'
        desc.innerText = 'Scorpio, symbolized by the Scorpion and linked to Water, is characterized by intensity, passion, and a mysterious aura.'
    } else if ((month === 'november' && date >= 22) || (month === 'december' && date <= 21)) {
        sign.innerText = '♐ Sagittarius (November 22 - December 21)'
        desc.innerText = 'Sagittarius, symbolized by the Archer and associated with Fire, is optimistic, adventurous, and often interested in philosophical matters.'
    } else if ((month === 'december' && date >= 22) || (month === 'january' && date <= 19)) {
        sign.innerText = '♑ Capricorn (December 22 - January 19)'
        desc.innerText = 'Capricorn, represented by the Goat and tied to Earth, is known for its ambitious, disciplined, and responsible nature.'
    } else if ((month === 'january' && date >= 20) || (month === 'february' && date <= 18)) {
        sign.innerText = '♒ Aquarius (January 20 - February 18)'
        desc.innerText = 'Symbolized by the Water Bearer and associated with Air, Aquarius individuals are often seen as innovative, independent, and committed to humanitarian causes.'
    } else if ((month === 'february' && date >= 19) || (month === 'march' && date <= 20)) {
        sign.innerText = '♓ Pisces (February 19 - March 20)'
        desc.innerText = 'Pisces, symbolized by the Fishes and falling under the Water element, is characterized by compassion, artistic inclinations, and high empathy for others.'
    }
}