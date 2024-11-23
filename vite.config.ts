import { defineConfig } from "vite";
import { expressPlugin } from "./plugins/express-plugin"

export default defineConfig({
    plugins: [expressPlugin()]
})