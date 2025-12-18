import { SVGProps } from 'react';
import { DefaultTheme } from 'styled-components';
declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            [key: string]: string;
        };
    }
}
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
    /**
     * @default "currentColor"
     */
    fill?: keyof DefaultTheme['colors'] | (string & {});
    stroke?: keyof DefaultTheme['colors'] | (string & {});
}
declare const PluginIcon: ({ fill: fillProp, stroke: strokeProp, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export { PluginIcon };
