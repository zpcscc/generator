declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.less' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import type * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// declare type AnyObject = Record<string, any>;
declare interface AnyObject {
  [key: string]: any;
}
