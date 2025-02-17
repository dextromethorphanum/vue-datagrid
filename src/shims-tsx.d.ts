import {
  VNode,
  JSXBase,
} from '@dextromethorphanum/revogrid/dist/types/stencil-public-runtime';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}

    type NativeElements = {
      [K in keyof IntrinsicElementAttributes]: JSXBase.DOMAttributes<
        IntrinsicElementAttributes[K]
      >;
    };
    interface IntrinsicElements extends JSXBase.DOMAttributes {
      [elem: string]: any;
    }
  }
}
