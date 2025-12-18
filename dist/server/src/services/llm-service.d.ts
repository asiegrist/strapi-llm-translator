import type { Core } from '@strapi/strapi';
import { LLMServiceType } from '../../src/types';
declare const llmService: ({ strapi }: {
    strapi: Core.Strapi;
}) => LLMServiceType;
export default llmService;
