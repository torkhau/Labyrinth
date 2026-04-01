import { createContext, useContext } from 'react';

export interface GameConfig {
  gridSize: number;
  barriers: Set<string>;
  startPos: string | null;
}

interface GameConfigContextType {
  config: GameConfig;
  setConfig: (config: GameConfig) => void;
}

export const GameConfigContext = createContext<GameConfigContextType | undefined>(undefined);

export const useGameConfig = () => {
  const context = useContext(GameConfigContext);
  
  if (!context) throw new Error('useGameConfig must be used within GameConfigProvider');
  
  return context;
};
