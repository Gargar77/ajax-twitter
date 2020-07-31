class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.handleClick();
    }

    render() {
        let state = this.followState === "followed" ? "Unfollow!" : "Follow!";
        this.$el.text(state)
    }

    handleClick() {
        this.$el.on("click",(event)=> {
            event.preventDefault();

            let method;
            if (this.followState === "unfollowed"){
                method = "POST"   
            } else {
                method = "DELETE"
            }

            $.ajax({
                type: method,
                url:`/users/${this.userId.toString()}/follow`,
                dataType: "json",
                success: this.toggle.bind(this)
            })
        })
    }

    toggle() {
        if (this.followState === "followed") {
            this.followState = "unfollowed";
        } else {
            this.followState = "followed";
        }
        console.log(this);
        this.render();
    }
}

module.exports = FollowToggle;