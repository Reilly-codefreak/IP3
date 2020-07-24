////what we do toggle
//design toggle
jQuery(document).ready(function() {
    $("#designSeen").click(function() {
        $("#designSeen").slideDown('1500').hide('1000');
        $("#designText").show('1500');
        //console.log('Hi');
    });
    $("#designText").click(function() {
        $("#designText").slideUp('1500');
        $("#designSeen").slideDown('1500');
    });
});

//development toggle
jQuery(document).ready(function() {
    $("#devSeen").click(function() {
        $("#devSeen").slideDown('1500').hide('1000');
        $("#developmentText").show('1500');
        //console.log('Hi');
    });
    $("#developmentText").click(function() {
        $("#developmentText").slideUp('1500');
        $("#devSeen").slideDown('1500');
    });
});

//Product management toggle
jQuery(document).ready(function() {
    $("#managementSeen").click(function() {
        $("#managementSeen").slideDown('1500').hide('1000');
        $("#productManagementText").show('1500');
        //console.log('Hi');
    });
    $("#productManagementText").click(function() {
        $("#productManagementText").slideUp('1500');
        $("#managementSeen").slideDown('1500');
    });
});

//hover effect on portfolio
jQuery(document).ready(function() {
    $(".work-one").mouseover(function() {
        $("#overlayOne").show();
    }).mouseout(function() {
        $("#overlayOne").hide();
    });
    $(".work-two").mouseover(function() {
        $("#overlayTwo").show();
    }).mouseout(function() {
        $("#overlayTwo").hide();
    });
    $(".work-three").mouseover(function() {
        $("#overlayThree").show();
    }).mouseout(function() {
        $("#overlayThree").hide();
    });
    $(".work-four").mouseover(function() {
        $("#overlayFour").show();
    }).mouseout(function() {
        $("#overlayFour").hide();
    });
    $(".work-five").mouseover(function() {
        $("#overlayFive").show();
    }).mouseout(function() {
        $("#overlayFive").hide();
    });
    $(".work-six").mouseover(function() {
        $("#overlaySix").show();
    }).mouseout(function() {
        $("#overlaySix").hide();
    });
    $(".work-seven").mouseover(function() {
        $("#overlaySeven").show();
    }).mouseout(function() {
        $("#overlaySeven").hide();
    });
    $(".work-eight").mouseover(function() {
        $("#overlayEight").show();
    }).mouseout(function() {
        $("#overlayEight").hide();
    });
});


//form//


document.getElementById("submit").addEventListener("click",
    function submit(event) {
        event.preventDefault();
        var name = document.getElementById('contactName').value;
        var email = document.getElementById('contactEmail').value;
        var msg = document.getElementById('contactMessage').value;

        //mailchimp api

        if (name == "" && email == "") {
            alert("Please enter your name and email!");
        } else if (msg == "") {
            alert(name + " enter your message")
        } else {

            alert(name + ' we have received your message. Thank you fro reaching out to us.');
        }
    }
);