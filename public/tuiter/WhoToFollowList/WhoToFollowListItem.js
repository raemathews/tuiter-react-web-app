/* eslint-env jquery */

const WhoToFollowListItem = (who, i) => {
    return(`
        <li class="list-group-item">
                    <div class="container">
                    <div class="row">
                        <div class="wd-account-image col-2 align-middle" id="wd-account-${i}"></div>
                        <div class="col-6 m-1 ps-2">
                            <div class="fw-bold text-nowrap">${who.userName} <i class="fa fa-check-circle"></i></div>
                            <div class="fw-light">@${who.handle}</div>
                        </div>
                        <div class="col-4 col-lg-2">
                            <button type="button" class="btn btn-primary align-middle">Follow</button>
                        </div>
                    </div>
                    </div>
                </li>
    `);
}

export default WhoToFollowListItem;