import { createContext, useState } from 'react';

interface GameConfig {
  gridSize: number;
  barriers: Set<string>;
  startPos: string;
}

interface GameConfigContextType {
  config: GameConfig;
  setConfig: (config: GameConfig) => void;
}

const GameConfigContext = createContext<GameConfigContextType | null>(null);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<GameConfig>({
    gridSize: 5,
    barriers: new Set(['1-1', '2-2']),
    startPos: '0-0',
  });

  return <GameConfigContext.Provider value={{ config, setConfig }}>{children}</GameConfigContext.Provider>;
}
