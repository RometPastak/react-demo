import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/select", "routes/select.tsx")
] satisfies RouteConfig;
