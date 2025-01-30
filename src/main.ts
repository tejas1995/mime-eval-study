import { DEVMODE, REWARD_CORRECT, PENALTY_INCORRECT, ENABLE_TIMER } from "./globals"
export var UID: string
export var MOCKMODE: boolean = false
import { load_data, log_data } from './connector'
import { paramsToObject } from "./utils"

var data: any[] = []
let question_i = -1
let question: any = null


let balance = 0

let instruction_i: number = 0
let count_exited_page: number = 0

function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}


function next_instructions(increment: number) {
    instruction_i += increment

    if (instruction_i == 0) {
        $("#button_instructions_prev").attr("disabled", "true")
    } else {
        $("#button_instructions_prev").removeAttr("disabled")
    }
    if (instruction_i == 0) {
        $("#instructions_and_decorations").show()
        $("#button_instructions_next").val("Start study")
    } else {
        $("#instructions_and_decorations").hide()
        $("#button_instructions_next").val("Next")
    }
    if (instruction_i == 1) {
        $("#instructions_and_decorations").show()
        $("#main_box_instructions").hide()
        $("#main_box_experiment").show()
        next_question()
    }

    $("#main_box_instructions").children(":not(input)").each((_, el) => {
        $(el).hide()
    })
    $(`#instructions_${instruction_i}`).show()
}
$("#button_instructions_next").on("click", () => next_instructions(+1))
$("#button_instructions_prev").on("click", () => next_instructions(-1))

// Add listener to ensure the video has been watched
const videoElement = document.getElementById('mime_video');

if (videoElement) {
    // Add an event listener for the 'ended' event
    videoElement.addEventListener('ended', () => {
        console.log('The user has watched the full video.');
        // You can add additional actions here, such as marking the video as watched
        $("#watchvideo_instruction").hide()
        $("#answer_box").show()
    });
} else {
    console.error('Video element with ID "mime_video" not found.');
}


$('#answer_box').on('keyup', () => {
    let user_prediction = String($('#user_prediction').val()).trim()
    if (user_prediction != '') {
        $("#button_next").show()
    } else {
        console.log('The text box is empty.');
        $("#button_next").hide()
    }
});

$("#button_next").on("click", () => {

    // Update the user balance
    if (question_i != -1) {
        let logged_data = {
            "question_i": question_i,
            "user_answer": $("#user_prediction").val(),
        }
        logged_data['question'] = question
        logged_data['count_exited_page'] = count_exited_page
        log_data(logged_data)
        count_exited_page = 0
    }
    

    next_question()
});


let activeTimer: ReturnType<typeof setInterval> | null = null; // Timer interval

function startTimer(duration, stepDiv, buttons, callback) {
    if (!ENABLE_TIMER) {
        // If the timer is disabled, enable the buttons immediately
        buttons.forEach(button => button.removeAttribute("disabled"));
        if (callback) callback();
        return;
    }

    // Clear any existing timer to prevent multiple intervals
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
    }

    // Disable buttons
    buttons.forEach(button => button.setAttribute("disabled", "true"));
    
    // Show timer visually
    let timerDisplay = document.createElement('div');
    timerDisplay.id = `timer_${stepDiv.id}`;
    timerDisplay.style.fontWeight = 'bold';
    timerDisplay.style.marginTop = '10px';
    stepDiv.appendChild(timerDisplay);

    let remainingTime = duration;

    // Initial display
    timerDisplay.textContent = `Please wait ${remainingTime} second(s) before making your selection.`;

    activeTimer = setInterval(() => {
        remainingTime--;
        if (remainingTime >= 0) {
            timerDisplay.textContent = `Please wait ${remainingTime} second(s) before making your selection.`;
        } else {

            if (activeTimer !== null) {
                clearInterval(activeTimer); // Stop the timer
                activeTimer = null;
            }
            activeTimer = null;

            // Remove timer display
            stepDiv.removeChild(timerDisplay);

            // Enable buttons
            buttons.forEach(button => button.removeAttribute("disabled"));

            if (callback) callback();
        }
    }, 1000);
}

// When the user switches tabs or minimizes the window, pause the timer
document.onvisibilitychange = () => {
    if (document.hidden) {
        console.log("Window lost focus.");
        if (activeTimer !== null) {
            clearInterval(activeTimer); // Pause the timer
            activeTimer = null;
        }
    } else {
        // Handle logic when the user returns
        console.log("Window regained focus.");
    }
};



function next_question() {
    // Reset timers and state
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
    }

    // restore previous state of UI

    //$("#range_val").val(user_trust)

    question_i += 1
    if (question_i >= data.length) {
        $("#main_box_experiment").hide()
        $('#reward_box').show()
        $("#main_box_end").show()
        return
    }

    question = data[question_i]
    console.log(question)

    $("#video").attr("src", question["video_url"])
    $("#video").show()
    $("#watchvideo_instruction").show()
    $('#answer_box').hide()
    $("#button_next").hide()
    $('#button_quit').hide()


    // set bet value ratio
    //if(question.hasOwnProperty("reward_ratio")) {
    //    let [ratio1, ratio2] = question["reward_ratio"]
    //    ratio1 = Number(ratio1)
    //    ratio2 = Number(ratio2)
    //    bet_val_ratio = ratio1/ratio2
    //} else {
    //    bet_val_ratio = 1
    //}

    //time_question_start = Date.now()
    $("#progress").text(`Progress: ${question_i + 1} / ${data.length}`)

}



// get user id and load queue
// try to see if start override was passed
const urlParams = new URLSearchParams(window.location.search);
const startOverride = urlParams.get('start');
const UIDFromURL = urlParams.get("uid")
globalThis.url_data = paramsToObject(urlParams.entries())

if (globalThis.url_data['study_id'] == null) {
    globalThis.url_data['study_id'] = "demo_study"
}
if (globalThis.url_data['prolific_id'] == null) {
    globalThis.url_data['prolific_id'] = "demo_user"
}
if (globalThis.url_data['session_id'] == null) {
    globalThis.url_data['session_id'] = "demo_session"
}

if (UIDFromURL != null) {
    globalThis.uid = UIDFromURL as string
    if (globalThis.uid == "prolific_random") {
        let queue_id = `${Math.floor(Math.random() * 10)}`.padStart(3, "0")
        globalThis.uid = `${urlParams.get("prolific_queue_name")}/${queue_id}`
    }
} else if (DEVMODE) {
    globalThis.uid = "demo"
} else {
    let UID_maybe: any = null
    while (UID_maybe == null) {
        UID_maybe = prompt("Enter your user id. Please get in touch if you were not assigned an id but wish to participate in this experiment.")
    }
    globalThis.uid = UID_maybe!
}

// version for paper
if (DEVMODE) {
    MOCKMODE = true
} else if (globalThis.url_data['session_id'].startsWith("demo")) {
    MOCKMODE = true
}

console.log("Running with UID", globalThis.uid)
load_data().catch((_error) => {
    //alert("Invalid user id.")
    console.log("Invalid user id.")
    console.log(globalThis.uid!)
    window.location.reload()
}
).then((new_data) => {
    data = new_data
    if (startOverride != null) {
        question_i = parseInt(startOverride) - 1
        console.log("Starting from", question_i)
    }
    // next_question()
    next_instructions(0)
    $("#main_box_instructions").show()
    $("#instructions_and_decorations").hide()
})

// // Dynamically load dataset based on DATASET
// fetch(`./baked_queues/${DATASET}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Failed to load dataset.");
//         }
//         return response.json();
//     })
//     .then((new_data) => {
//         data = new_data;
//         if (startOverride != null) {
//             question_i = parseInt(startOverride) - 1;
//             console.log("Starting from", question_i);
//         }
//         next_instructions(0);
//         updateRewardInstructions();
//         $("#main_box_instructions").show();
//         $("#instructions_and_decorations").hide();
//     })
//     .catch((_error) => {
//         console.error("Invalid user id or dataset loading failed.");
//         console.log(globalThis.uid!);
//         window.location.reload();
//     });


console.log("Starting session with UID:", globalThis.uid!)

let alert_active = false
document.onvisibilitychange = () => {
    if (!alert_active) {
        count_exited_page += 1
        alert_active = true
        if (!(globalThis.uid!.startsWith("demo"))) {
            // pause the timer
           alert("Please don't leave the page. If you do so again, we may restrict paying you.")
        }
        alert_active = false
    }
    else{
        //continue the timer?
    }
}