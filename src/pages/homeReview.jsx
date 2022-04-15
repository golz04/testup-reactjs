import React from "react";

function Reviews() {
    const userReview = [
    {
        "id": 1,
        "name": "Muhammad Haidar",
        "feedback": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque suscipit praesentium sed velit totam corrupti, fuga nesciunt. Exercitationem laudantium iste quis voluptas at. Blanditiis quasi voluptate iusto. Sit, expedita quisquam.",
    },
    {
        "id": 2,
        "name": "Gavriel Ijlal",
        "feedback": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque suscipit praesentium sed velit totam corrupti, fuga nesciunt. Exercitationem laudantium iste quis voluptas at. Blanditiis quasi voluptate iusto. Sit, expedita quisquam.",
    },
    {
        "id": 3,
        "name": "Rizqi Dayat",
        "feedback": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque suscipit praesentium sed velit totam corrupti, fuga nesciunt. Exercitationem laudantium iste quis voluptas at. Blanditiis quasi voluptate iusto. Sit, expedita quisquam.",
    },
    ];

    const listReview = userReview.map((e) =>
    <div className="item">
        <img src="assets/avatar/batman.png" alt="avatar.png" />
        <div className="user">
        <h3>{e.name}</h3>
        <p>{e.feedback}</p>
        </div>
    </div>
    );

    return(
    <div className="reviewBox">
        <h2>Review</h2>
        {listReview}
    </div>
    );
}

export default Reviews;