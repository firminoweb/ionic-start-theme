export const AppRoutes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
