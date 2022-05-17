// middleware for doing role-based permissions
function permit(...permittedRoles) {
  // return a middleware
  return (request, response, next) => {
    const { role } = request.session.getAccessTokenPayload();
    console.log(request.session.getAccessTokenPayload()["role"]);
    if (permittedRoles.includes(role)) {
      console.log("allowed to access");
      next(); // role is allowed, so continue on the next middleware
    } else {
      console.log("not allowed to access");
      response.status(403).json({ message: "Forbidden" }); // user is forbidden
    }
  };
}

module.exports.permit = permit;
