import {Router} from "express"
import * as playersControllers from "../controllers/players-controllers"
import * as clubsControllers from "../controllers/clubs-controllers"

const router = Router()

router.get("/players", playersControllers.getPlayer)
router.get("/players/:id", playersControllers.getPlayerById)
router.post("/players", playersControllers.postPlayer)
router.delete("/players/:id", playersControllers.deletePlayer)
router.patch("/players/:id", playersControllers.updatePlayer)


router.get("/clubs", clubsControllers.getClubs);

export default router