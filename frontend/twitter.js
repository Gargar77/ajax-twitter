const FollowToggle = require("../app/assets/javascripts/follow_toggle");
$(()=> {
    const followToggles = [];
    $('.follow-toggle').each((index,el)=> {
        let toggle = new FollowToggle(el);
        followToggles.push(toggle);
    })
})