declare module "react-signature-canvas" {
    import React from "react";
  
    export interface SignatureCanvasProps {
      canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
      penColor?: string;
      backgroundColor?: string;
      velocityFilterWeight?: number;
      minWidth?: number;
      maxWidth?: number;
      dotSize?: number;
      throttle?: number;
      minDistance?: number;
      onEnd?: () => void;
      onBegin?: () => void;
    }
  
    export default class SignatureCanvas extends React.Component<
      SignatureCanvasProps
    > {
      clear(): void;
      toDataURL(type?: string, encoderOptions?: number): string;
      fromDataURL(dataURL: string, options?: unknown): void;
      isEmpty(): boolean;
    }
  }
  