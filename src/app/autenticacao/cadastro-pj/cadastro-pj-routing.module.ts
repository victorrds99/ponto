import { CadastrarPjComponent, CadastroPJComponent  } from './components/';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const CadastroPjRoutes: Routes = [
    {
        path: 'cadastro-pj',
        component: CadastrarPjComponent,
        children: [
            {
                path: '',
                component: CadastrarPjComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CadastroPjRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroPJRoutingModule {

}