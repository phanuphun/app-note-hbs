import { Router } from "express";
import apiAuthRoute from "./auth.router";
import appConfig from "../../configs/index.config";
import noteRouter from "./notes.router";

const APP_NAME = appConfig.app.name;
const APP_DESCRIPTION = appConfig.app.description;
const VERSION = appConfig.app.version;

const apiAppRouter = Router();

apiAppRouter.get('/health', (req, res) => {
    res.send({
        name: APP_NAME,
        version: VERSION,
        message: APP_DESCRIPTION
    });
});

apiAppRouter.use("/auth", apiAuthRoute);
apiAppRouter.use("/notes", noteRouter);

export default apiAppRouter;