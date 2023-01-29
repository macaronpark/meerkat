export interface Map {
  id: string;
  layers: Layer[];
}

interface Layer {
  id: string;
  name: string;
  envmap: Envmap;
  roadmap: Roadmap;
}

interface Envmap {
  id: string;
  uri: string;
  originX: number;
  originY: number;
  originYaw: number;
  resolution: number;
  negate: number;
  freeThresh: number;
  occupiedThresh: number;
}

interface Roadmap {
  id: string;
  nodes: Node[];
  edges: Edge[];
}

interface Node {
  id: string;
  remark?: string;
  x: number;
  y: number;
  theta: number;
}

interface Edge {
  id: string;
  startNodeId: string;
  endNodeId: string;
}
