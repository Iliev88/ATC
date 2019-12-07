import { DemoPage } from "../pages/demo/demoPage";

declare module "cucumber" {
  interface World {
    demoPage: DemoPage;
  }
}
