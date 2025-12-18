/// <reference types="koa" />
declare const _default: {
    admin: ({ strapi }: import("../types").StrapiContext) => {
        generate(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
            body: object;
            query: object;
            params: object;
            request: Omit<import("koa").Request, "body"> & {
                body: object;
            };
            state: {
                user?: import("../types").AdminUser;
            };
        } & {
            request: {
                body: import("../types").GenerateRequestBody;
            };
        }): Promise<void>;
        getConfig(ctx: import("../types").RequestContext): Promise<void>;
        setConfig(ctx: import("../types").RequestContext): Promise<void>;
    };
};
export default _default;
