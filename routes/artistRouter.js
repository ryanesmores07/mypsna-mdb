import { Router } from "express";
import { getDefaultArtists } from "../controller/artistController.js";

const router = Router();

router.route("/getDefaultArtists").get(getDefaultArtists);

export default router;
