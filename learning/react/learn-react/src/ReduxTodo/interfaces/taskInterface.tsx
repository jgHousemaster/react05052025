export interface task {
  id: string;
  name: string;
  completed: boolean;
}

export interface action {
  type: string;
  payload: task | string;
}
