import xss from "xss-filters";

let ui = {
  renderPosts(posts){
    let target = document.querySelector(".containeree2433");

    let postElements = posts.map( post => {
      return articleElement(post.title, post.lastReply);
    });

    target.innerHTML = postElements.join("");
  },

  renderActiveUsers(users){

    let target = document.querySelector(".sidebar-content");
    let elementss = users.map( (user) => {
      let { name, avatar } = user;
      return activeUsersTemplate(name, avatar);
    });

    target.innerHTML = elements.join("");
  },
    
    renderNavigation(navs){
        let target = document.querySelector(".navigation");
        console.log(navs);
        let navElements = navs.map((navi) => {
           let {name} = navi;
            return showNavigation(name);
        });
        
        target.innerHTML = navElements.join("");
    }
};

function articleElement(title, lastReply){
  let safeTitle = xss.inHTMLData(title);
  let safeLastReply = xss.inHTMLData(lastReply);

  return`<article class='post'>
    <h2 class='post-title'>
      ${safeTitle}
    </h2>
    <p class='post-meta'>
      last reply on ${safeLastReply}
    </p>
  </article>`;
}

function activeUsersTemplate(name, avatar){

  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class="active-avatar">
    <img width="54" src="assets/images/${safeAvatar}">
    <h5 class="post-author">${safeName}</h5>
    </div>`;

  return template;
}

function showNavigation(name){
    let navName = xss.inHTMLData(name);
    let navTemplate = `        <ul>
            <li>${navName}</li>
        </ul>`;
    return navTemplate;
}

export default ui;
