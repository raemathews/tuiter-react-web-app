const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
                    <div class="container m-0 p-0">
                        <div class="row">
                            <div class="col-8">
                                <div class="wd-post-category">${post.topic ? post.topic : ""}</div>
                                <div class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i>
                                    <span class="wd-post-category"> ${post.time ? " - " + post.time : ""}</span></div>
                                <div class="fw-bold">
                                    ${post.title ? post.title : ""}
                                </div>
                            </div>
                            <div class="wd-suggested-post-image col-4 align-middle">
                                <img src="../images/${post.image}" class="float-end"/>
                            </div>
                        </div>
                    </div>
                </li>
    `);
}

export default PostSummaryItem