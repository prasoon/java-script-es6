import Post from "./post";
import User from "./user";
import Navigation from "./navigation";
import ui from "./ui";

Post.findAll().then(ui.renderPosts);

User.findAllActive().then(ui.renderActiveUsers);

Navigation.findNav().then(ui.renderNavigation);

