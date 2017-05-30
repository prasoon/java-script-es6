import API from "./api";

let Navigation = { findNav };

function findNav(){
  return API.fetch("navs");
}

export default Navigation;
