$(document).ready(function() {

    function load(type, target, limit = 3) {
        $.getJSON('/data/items.json', function(data) {
            let list = data.filter(i => i.type === type).slice(0, limit);

            list.forEach(item => {
                let html = render(item);
                $(`#${target}`).append(html).hide().fadeIn(500);
            });
        });
    }

    function render(x) {
        if (x.type === "blog") return cardBlog(x);
        if (x.type === "tool") return cardTool(x);
        if (x.type === "event") return cardEvent(x);
        if (x.type === "sponsor") return cardSponsor(x);
        if (x.type === "collab") return cardCollab(x);
    }

    load("blog", "home-blogs");
    load("tool", "home-tools");
    load("event", "home-events");
    load("sponsor", "home-sponsors");
});
