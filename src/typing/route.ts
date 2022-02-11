export interface IRoute {
  path: string;
  component: any;
  children?: {
    path: string;
    component: any;
  }[]
}