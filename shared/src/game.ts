export type StoneColor = 'black' | 'white';
export type GameStatus = 'idle' | 'playing' | 'finished';
export type EndReason = 'five' | 'draw' | 'resign';
export type ParticipantKind = 'human' | 'agent' | 'remote';
export type Actor = 'human' | 'agent';

export type CommentaryKind =
  | 'evaluation'
  | 'position'
  | 'reaction'
  | 'result'
  | 'banter';

export type CommentaryMood =
  | 'neutral'
  | 'confident'
  | 'happy'
  | 'nervous'
  | 'surprised'
  | 'sad';

export type WaitReason =
  | 'your_turn'
  | 'game_over'
  | 'idle'
  | 'new_game'
  | 'timeout';

export type ErrorCode =
  | 'ROOM_NOT_FOUND'
  | 'ROOM_EXISTS'
  | 'GAME_NOT_PLAYING'
  | 'NOT_YOUR_TURN'
  | 'OUT_OF_BOUNDS'
  | 'CELL_OCCUPIED'
  | 'NO_AGENT_SEAT'
  | 'INVALID_COMMENTARY';

export interface Cell {
  row: number;
  col: number;
}

export interface PlayerSpec {
  kind: ParticipantKind;
  name?: string;
}

export interface RuleSet {
  boardSize: number;
  winLength: number;
  overlineWin: boolean;
  forbidden: 'none';
}

export interface Move extends Cell {
  color: StoneColor;
  index: number;
  at: string;
}

export interface Commentary {
  id: string;
  roomId: string;
  gameId: string;
  text: string;
  kind: CommentaryKind;
  mood: CommentaryMood;
  moveIndex: number;
  at: string;
}

export interface GameState {
  schemaVersion: 1;
  roomId: string;
  gameId: string;
  rules: RuleSet;
  board: (StoneColor | null)[][];
  turn: StoneColor;
  seats: Record<StoneColor, PlayerSpec>;
  status: GameStatus;
  winner: StoneColor | 'draw' | null;
  endReason: EndReason | null;
  winLine: Cell[] | null;
  lastMove: Move | null;
  moveCount: number;
  version: number;
  updatedAt: string;
}

export interface RoomView {
  state: GameState;
  commentary: Commentary[];
}

export interface RoomSummary {
  roomId: string;
  status: GameStatus;
  gameId: string;
  moveCount: number;
  version: number;
  updatedAt: string;
}
