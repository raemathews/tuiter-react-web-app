import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div>
                <input class="wd-search wd-color-secondary"
                   type="text"
                   placeholder="Search Tuiter"
                   id="searchbar-input"/>
                <a href="../explore-settings.html">
                    <i class="fa fa-cog align-middle" style="font-size: 1.3em"></i>
                </a>
            </div>
           </div>
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="wd-starship mt-2 position-relative">
                <img src="../images/Starship-Mk1-Day.webp" class="d-inline">
                <span id="wd-starship" class="position-absolute p-2 fs-4">SpaceX's Starship</span>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
