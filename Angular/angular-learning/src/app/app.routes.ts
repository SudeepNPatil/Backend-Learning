import { Routes } from '@angular/router';
import { App } from './app';
import { NotFound } from './not-found/not-found';
import { Photos } from './photos/photos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadComponent: () => import('./user/user').then(m => m.User)
    },
    {
        path: 'control-flow',
        loadComponent: () => import('./control-flow/control-flow').then(m => m.ControlFlow)
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin').then(m => m.Admin)
    },
    {
        path: 'data-binding',
        loadComponent: () => import('./data-binding/data-binding').then(m => m.DataBinding)
    },
    {
        path: 'signal',
        loadComponent: () => import('./signal/signal').then(m => m.Signal)
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        path: 'products',
        loadComponent: () => import('./product/product').then(m => m.Product)
    },
    {
        path: '**',
        component: NotFound
    }
];
