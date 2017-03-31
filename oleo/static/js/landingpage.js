$(document).ready(function(){
    $("#thc-trigger").mouseover(function(){
        $("body").css({
            background: "#87e0fd;",
            background: "-moz-linear-gradient(top, #87e0fd 0%, #53cbf1 40%, #05abe0 100%)",
            background: "-webkit-linear-gradient(top, #87e0fd 0%,#53cbf1 40%,#05abe0 100%)",
            background: "linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 100%)",
            "filter: progid":"DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 )",
            transition: "background 5s ease",
            WebkitTransition: "background 5s ease",
            MozTransition: "background 5s ease"});

    });
    $("#thc-trigger").mouseout(function(){
        $("body").css({
            background: "rgb(213,240,212)",
            background: "-moz-linear-gradient(45deg,  rgba(213,240,212,1) 0%, rgba(126,222,148,1) 100%)",
            background: "-webkit-linear-gradient(45deg,  rgba(213,240,212,1) 0%,rgba(126,222,148,1) 100%)", 
            background: "linear-gradient(45deg,  rgba(213,240,212,1) 0%,rgba(126,222,148,1) 100%)",
            "filter: progid":"DXImageTransform.Microsoft.gradient( startColorstr='#d5f0d4', endColorstr='#7ede94',GradientType=1 )",
            transition: "background 4s ease",
            WebkitTransition: "background 4s ease",
            MozTransition: "background 4s ease"});
    });
})
