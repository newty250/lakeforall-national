declare module 'react-simple-maps' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: CSSProperties;
    viewBox?: string;
    children?: ReactNode;
  }

  interface ZoomableGroupProps {
    zoom?: number;
    center?: [number, number];
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | Record<string, unknown>;
    children: (props: { geographies: Record<string, unknown>[] }) => ReactNode;
  }

  interface GeographyProps {
    geography: Record<string, unknown>;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: CSSProperties & { outline?: string };
      hover?: CSSProperties & { outline?: string };
      pressed?: CSSProperties & { outline?: string };
    };
  }

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<SVGGElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<SVGGElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGGElement>) => void;
    style?: CSSProperties;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
}
