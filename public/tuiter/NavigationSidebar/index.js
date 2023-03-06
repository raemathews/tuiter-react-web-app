/* eslint-env jquery */

const NavigationSidebar = () => {
    return(`
            <div class="list-group mb-2">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i> <span class="wd-navigation-label d-xl-inline d-none">Home</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                    <i class="fa fa-hashtag"></i> <span class="wd-navigation-label d-xl-inline d-none">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i> <span class="wd-navigation-label d-xl-inline d-none">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-mail-bulk"></i> <span class="wd-navigation-label d-xl-inline d-none">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i> <span class="wd-navigation-label d-xl-inline d-none">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i> <span class="wd-navigation-label d-xl-inline d-none">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i> <span class="wd-navigation-label d-xl-inline d-none">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa fa-plus"></i> <span class="wd-navigation-label d-xl-inline d-none">More</span>
                </a>
            </div>
            <button type="button" class="btn btn-primary wd-full-width-btn">Tuit</button>

    `);
}

$('#wd-test-navigation').append(`
     ${NavigationSidebar()}
`);

export default NavigationSidebar;