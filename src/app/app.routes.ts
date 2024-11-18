import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    {
        path: 'tasks',
        loadComponent: () =>
            import('./tasks/tasks.component').then((m) => m.TasksComponent),
    },
];
