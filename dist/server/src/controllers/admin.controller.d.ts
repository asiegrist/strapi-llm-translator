import { GenerateRequestBody, RequestContext, StrapiContext } from 'src/types';
declare const controllers: ({ strapi }: StrapiContext) => {
    generate(ctx: RequestContext & {
        request: {
            body: GenerateRequestBody;
        };
    }): Promise<void>;
    getConfig(ctx: RequestContext): Promise<void>;
    setConfig(ctx: RequestContext): Promise<void>;
};
export default controllers;
