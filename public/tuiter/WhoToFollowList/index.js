import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";
const index = () => {
    return (`
        <ul class="list-group">
            ${who.map((who, index) =>
                WhoToFollowListItem(who, index + 1)).join('')}
        </ul>
    `)
}

export default index;