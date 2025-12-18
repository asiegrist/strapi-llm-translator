/// <reference types="koa" />
declare const _default: {
    register: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    bootstrap: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    destroy: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => void;
    config: {
        default: ({ env }: {
            env: any;
        }) => {
            llmApiKey: any;
            llmEndpoint: any;
            llmModel: any;
            llmAzureApiVersion: any;
        };
        validator(config: any): void;
    };
    controllers: {
        admin: ({ strapi }: import("./types").StrapiContext) => {
            generate(ctx: Omit<import("koa").Context, "body" | "query" | "request"> & {
                body: object;
                query: object;
                params: object;
                request: Omit<import("koa").Request, "body"> & {
                    body: object;
                };
                state: {
                    user?: import("./types").AdminUser;
                };
            } & {
                request: {
                    body: import("./types").GenerateRequestBody;
                };
            }): Promise<void>;
            getConfig(ctx: import("./types").RequestContext): Promise<void>;
            setConfig(ctx: import("./types").RequestContext): Promise<void>;
        };
    };
    routes: {
        admin: {
            type: string;
            routes: {
                method: string;
                path: string;
                handler: string;
                config: {
                    policies: any[];
                };
            }[];
        };
    };
    services: {
        'llm-service': ({ strapi }: {
            strapi: import("@strapi/types/dist/core").Strapi;
        }) => import("./types").LLMServiceType;
    };
    contentTypes: {};
    policies: {};
    middlewares: {};
};
export default _default;
