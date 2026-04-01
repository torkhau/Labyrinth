import { useState, type ReactNode } from 'react';
import { GameConfigContext, type GameConfig } from './GameConfigContext';

export function GameConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<GameConfig>({
    gridSize: 5,
    barriers: new Set(),
    startPos: null,
  });

  return <GameConfigContext.Provider value={{ config, setConfig }}>{children}</GameConfigContext.Provider>;
}
