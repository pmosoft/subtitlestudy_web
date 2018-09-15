import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'subtitle-regist' },
            { path: 'subtitle-regist', loadChildren: './subtitle/subtitle-regist/subtitle-regist.module#SubtitleRegistModule' },
            { path: 'subtitle-view/:sttlNm', loadChildren: './subtitle/subtitle-view/subtitle-view.module#SubtitleViewModule' },
            { path: 'subtitle-view-mother', loadChildren: './subtitle/subtitle-view-mother/subtitle-view-mother.module#SubtitleViewMotherModule' },
            { path: 'subtitle-list', loadChildren: './subtitle/subtitle-list/subtitle-list.module#SubtitleListModule' },
            { path: 'subtitle-site', loadChildren: './subtitle/subtitle-site/subtitle-site.module#SubtitleSiteModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
