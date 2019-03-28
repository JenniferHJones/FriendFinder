// front end javascript logic

$(document).ready(function () {
    // modal hidden until called by post function
    // $(".bg-modal").hide();

    // event listener for clicking close button on modal
    document.querySelector(".close").addEventListener("click", function() {
        document.querySelector(".bg-modal").style.display = "none";
    });

    // event listener for submit button on survey page
    $("#surveyBtn").on("click", function (event) {
        console.log("button clicked");
        event.preventDefault();

        // validate if all questions have been answered
        var valid = true;

        if ($("#name").val() === "" || $("#photo").val === "") {
            valid = false;
        } else if ($("#quest1").val() === "" || $("quest2").val() === "" ||
            $("quest3").val() === "" || $("quest4").val() === "" ||
            $("quest5").val() === "" || $("quest6").val() === "" ||
            $("quest7").val() === "" || $("quest8").val() === "" ||
            $("quest9").val() === "" || $("quest10").val() === "") {
            valid = false;
        };

        if (valid === true) {
            var newFriend = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [
                    $("#quest1").val(),
                    $("#quest2").val(),
                    $("#quest3").val(),
                    $("#quest4").val(),
                    $("#quest5").val(),
                    $("#quest6").val(),
                    $("#quest7").val(),
                    $("#quest8").val(),
                    $("#quest9").val(),
                    $("#quest10").val()
                ]
            };
            console.log(newFriend);
        } else {
            alert("All fields must be completed. Please enter missing information.")
        }
    });

})