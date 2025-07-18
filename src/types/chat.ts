export type MessageType = 'text' | 'image' | 'video' | 'audio' | 'threejs' | 'plotly';

export interface BaseMessage {
  id: string;
  timestamp: Date;
  type: MessageType;
}

export interface TextMessage extends BaseMessage {
  type: 'text';
  content: string;
  fontStyle?: 'normal' | 'bold' | 'italic' | 'script' | 'mono';
}

export interface ImageMessage extends BaseMessage {
  type: 'image';
  src: string;
  alt?: string;
  caption?: string;
}

export interface VideoMessage extends BaseMessage {
  type: 'video';
  src: string;
  poster?: string;
  caption?: string;
}

export interface AudioMessage extends BaseMessage {
  type: 'audio';
  src: string;
  title?: string;
  artist?: string;
  isVoice?: boolean;
}

export interface ThreeJSMessage extends BaseMessage {
  type: 'threejs';
  sceneData: any; // Will contain the 3D scene configuration
  caption?: string;
}

export interface PlotlyMessage extends BaseMessage {
  type: 'plotly';
  data: any;
  layout?: any;
  config?: any;
  caption?: string;
}

export type ChatMessage = TextMessage | ImageMessage | VideoMessage | AudioMessage | ThreeJSMessage | PlotlyMessage;