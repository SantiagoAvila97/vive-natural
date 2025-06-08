import { Routes } from '@angular/router';
import { ROUTE } from '@shared/types/const/routes.const';

export const routes: Routes = [
  {
    path: ROUTE.PUBLIC.HOME,
    loadComponent: () =>
      import('./screens/public/home/home').then((m) => m.Home),
  },
];
