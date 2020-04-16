import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "bonjour", loadChildren: () => import("~/app/bonjour/bonjour.module").then((m) => m.BonjourModule) },
    { path: "gravite", loadChildren: () => import("~/app/gravite/gravite.module").then((m) => m.GraviteModule) },
    { path: "gestes", loadChildren: () => import("~/app/gestes/gestes.module").then((m) => m.GestesModule) },
    { path: "condition", loadChildren: () => import("~/app/condition/condition.module").then((m) => m.ConditionModule) },
    { path: "notification", loadChildren: () => import("~/app/notification/notification.module").then((m) => m.NotificationModule) },
    { path: "informations", loadChildren: () => import("~/app/informations/informations.module").then((m) => m.InformationsModule) },
    { path: "connexion", loadChildren: () => import("~/app/connexion/connexion.module").then((m) => m.ConnexionModule) },
    { path: "naturevictime", loadChildren: () => import("~/app/naturevictime/naturevictime.module").then((m) => m.NaturevictimeModule) },
    { path: "profil", loadChildren: () => import("~/app/profil/profil.module").then((m) => m.ProfilModule) },
    { path: "congeneutilisation", loadChildren: () => import("~/app/congeneutilisation/congeneutilisation.module").then((m) => m.CongeneutilisationModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
