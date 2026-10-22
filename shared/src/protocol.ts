import type {
  Actor,
  Commentary,
  CommentaryKind,
  CommentaryMood,
  ErrorCode,
  GameState,
  PlayerSpec,
  RuleSet,
  StoneColor,
  WaitReason,
} from './game.js';

export interface NewRoomRequest {
  roomId?: string;
  seats?: Record<StoneColor, PlayerSpec>;
  rules?: Partial<RuleSet>;
}

export interface NewGameRequest {
  agentColor?: StoneColor;
}

export interface MoveRequest {
  row: number;
  col: number;
  actor?: Actor;
}

export interface ResignRequest {
  actor?: Actor;
}

export interface SayRequest {
  text: string;
  kind?: CommentaryKind;
  mood?: CommentaryMood;
  actor?: Actor;
}

export interface StateResponse {
  state: GameState;
  yourColor: StoneColor | null;
}

export interface WaitForTurnResponse extends StateResponse {
  reason: WaitReason;
}

export interface ErrorResponse {
  error: {
    code: ErrorCode;
    message: string;
  };
  state?: GameState;
}

export type ClientMessage = { type: 'ping' };

export type ServerMessage =
  | {
      type: 'hello';
      roomId: string;
      state: GameState;
      commentary: Commentary[];
    }
  | {
      type: 'state';
      roomId: string;
      state: GameState;
    }
  | {
      type: 'commentary';
      roomId: string;
      commentary: Commentary;
    }
  | {
      type: 'error';
      code: string;
      message: string;
    }
  | {
      type: 'pong';
    };
