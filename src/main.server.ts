import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { Layout } from './app/el-telon/layout/layout';

const bootstrap = () => bootstrapApplication(Layout, config);

export default bootstrap;
