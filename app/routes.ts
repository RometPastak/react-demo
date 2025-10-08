import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/select", "routes/select.tsx"),
    route("/number-field", "routes/number-field.tsx")
] satisfies RouteConfig;
