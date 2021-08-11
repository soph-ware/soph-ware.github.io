document.addEventListener('contextmenu', event => event.preventDefault());

// Wrap every letter in a span
var textWrapper3 = document.querySelector('.ml13');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml13 .letter3',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: (el, i) => 300 + 30 * i
    })

function getLogin() {
    var fn = document.getElementById("fname").value;

}

$("button").click(function() {
    var val = $(this).val();
    val = parseInt(val, 10);


    switch (val) {
        case 1:
            document.getElementById("avatar").style.background = "url('kirby.png')";
            break;
        case 2:
            document.getElementById("avatar").style.background = "url('kingdede.gif')";
            break;
        case 3:
            document.getElementById("avatar").style.background = "url('metaknight.gif')";
            break;
        case 4:
            document.getElementById("avatar").style.background = "url('mario.gif')";
            break;
        case 5:
            document.getElementById("avatar").style.background = "url('bowser.gif')";
            break;
        case 6:
            document.getElementById("avatar").style.background = "url('daisy.gif')";
            break;
        case 7:
            document.getElementById("avatar").style.background = "url('sonic.png')";
            break;
        case 8:
            document.getElementById("avatar").style.background = "url('pikachu.png')";
            break;
        case 9:
            document.getElementById("avatar").style.background = "url('gengar.png')";
            break;
        case 10:
            document.getElementById("avatar").style.background = "url('jira.png')";
            break;
        case 11:
            document.getElementById('resume-container').style.display = 'block';
            break;
        case 0:
            document.getElementById('login-container').style.display = 'block';
            break;
        default:
            document.getElementById("avatar").style.background = "url('mariosmushroom.png')";
    }

    document.getElementById("avatar").style.backgroundRepeat = "no-repeat";
    document.getElementById("avatar").style.backgroundPosition = "center";
    document.getElementById("avatar").style.backgroundSize = "80%";
    document.getElementById("avatar").style.backgroundColor = "#FED7DA";


});

var colorWell;
var defaultColor = "#FED7DA";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#bg");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.select();
}

function updateFirst(event) {
    document.getElementById("avatar").style.backgroundColor = event.target.value;
}

new Vue({
    el: "#time",
    data() {
        return {
            time: '',
            date: '',
            day: ''
        }
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('h:mm A')
        }, 1000)
        setInterval(() => {
            this.day = moment().format('dddd')
        }, 1000)
        setInterval(() => {
            this.date = moment().format('MMMM D')
        }, 1000)
    }
})