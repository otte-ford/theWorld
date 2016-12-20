// site.js

(function () {
/* var ele = $("#username");
    ele.text = "Clinton Otte-Ford";

var main = $("#main");
main.on("mouseenter", function () {
    main.style.backgroundColor = "#888";
});

main.on("mouseleave", function () {
    main.style.backgroundColor = "";
    });


    var menuItems = $("ul.menu li a")
    menuItems.on("click", function() {
        var me = $(this);
        alert(me.text);
    });
*/


    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#menuToggle").on("click",function(){
        $sidebarAndWrapper.toggleClass("display-sidebar");
        if ($sidebarAndWrapper.hasClass("display-sidebar")) {
            $(this).text("Show Menu");
        } else {
            $(this).text("Hide Menu");
        }
    });
}) ();