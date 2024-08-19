import express from "express"
import {Register, Login, Logout, Bookmark, getMyProfile, getOthersProfile, follow, unfollow}  from "../Controller/userController.js"
import isAuthenticated  from "../config/Auth.js"

const router = express.Router()

// userRouter.post("/register", Register)
// userRouter.post("/login", Login)
// userRouter.get("/logout", Logout)
// userRouter.put("/bookmark/:id", isAuthenticated, Bookmark)
// userRouter.get("/profile/:id", isAuthenticated, getMyProfile)
// userRouter.get("/other/:id", isAuthenticated, getOthersProfile)
// userRouter.post("/follow/:id", isAuthenticated, follow)
// userRouter.post("/unfollow/:id", isAuthenticated, unfollow)

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated, Bookmark)
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOthersProfile);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);




export default router

