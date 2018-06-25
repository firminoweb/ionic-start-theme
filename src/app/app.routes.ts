export const AppRoutes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' }
];
