class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
    }

    render() {
        let state = this.followState === "followed" ? "Unfollow!" : "Follow!";
        this.$el.text(state)
    }

    handleClick() {
        this.$el.on("click",(event)=> {
            let method;
            event.preventDefault();
            if (this.followState === "unfollowed"){
                method = "POST"   
            } else {
                method = "DELETE"
            }
            // TODO: finish request
            $.ajax({
                type:"POST",
                url:`/users/${this.userId.toString()}/follow`
            })
        })
    }
}

module.exports = FollowToggle;