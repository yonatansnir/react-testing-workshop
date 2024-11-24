import { defineConfig } from "vitest/config";
import { expressPlugin } from "./plugins/express-plugin"

export default defineConfig({
    plugins: [expressPlugin()],
    test: {
        environment: "jsdom"
    }
})