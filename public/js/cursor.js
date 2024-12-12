$(document).ready(function() {
    console.log("jQuery is loaded.");

    var cursor = $(".cursor");

    // Move cursor with mouse
    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
        console.log("Mouse move detected");
    });

    // Enlarge cursor when hovering over a link
    $(".test-link").mouseenter(function() {
        cursor.css({
            transform: "scale(2)"
        });
        console.log("Link hover in");
    }).mouseleave(function() {
        cursor.css({
            transform: "scale(1)"
        });
        console.log("Link hover out");
    });

    // Shrink cursor on mouse down, restore on mouse up
    $(window).mousedown(function() {
        cursor.css({
            transform: "scale(0.5)"
        });
        console.log("Mouse down");
    }).mouseup(function() {
        cursor.css({
            transform: "scale(1)"
        });
        console.log("Mouse up");
    });
});