var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","loadChildren":"./pages/login-page/login-page.module#LoginPageModule,","pathMatch":"full","data":{"title":"Login"}},{"path":"sso-logout","pathMatch":"full","loadChildren":"./pages/sso-logout/sso-logout.module#SSOLgoutPageModule,","data":{"title":"SSOLogout"}},{"path":"forgot-password","loadChildren":"./pages/password-management/forgot-password/forgot-password.module#ForgotPasswordModule","canActivate":["PasswordGuard"],"data":{"title":"Forgotpassword"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/password-management/forgot-password/forgot-password-routing.module.ts","module":"ForgotPasswordRoutingModule","children":[{"path":"","component":"ForgotPasswordComponent","pathMatch":"full"}],"kind":"module"}],"module":"ForgotPasswordModule"}]},{"path":"reset-password","loadChildren":"./pages/password-management/reset-password/reset-password.module#ResetPasswordModule","data":{"title":"Savepassword"},"canActivate":["PasswordGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/password-management/reset-password/reset-password-routing.module.ts","module":"ResetPasswordRoutingModule","children":[{"path":"","component":"ResetPasswordComponent","pathMatch":"full"}],"kind":"module"}],"module":"ResetPasswordModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"","component":"AppLayoutComponent","data":{"title":"Blueprint","level":"1"},"canActivate":["LoginRedirectGuard","AuthGuard"],"children":[{"path":"home","loadChildren":"./pages/home/home.module#HomeModule","data":{"title":"Blueprints","level":"1"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent","pathMatch":"full"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"no-access","loadChildren":"./pages/no-access/no-access.module#NoAccessModule,","data":{"title":"Inaccessible","level":"1"}},{"path":"settings","loadChildren":"./pages/settings/settings.module#SettingsModule,","data":{"title":"Organizationsettings","level":"1"}},{"path":"artifacts/:registry","loadChildren":"./pages/artifacts/artifacts.module#ArtifactsModule,","data":{"title":"Artifacts","level":"1"}},{"path":"trash","loadChildren":"./pages/soft-delete-entities/soft-delete-entities.module#SoftDeleteEntitiesModule","data":{"title":"Trash","level":"1"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/soft-delete-entities/soft-delete-entities-routing.module.ts","module":"SoftDeleteEntitiesRoutingModule","children":[{"path":"","component":"SoftDeleteEntitiesComponent","pathMatch":"full"}],"kind":"module"}],"module":"SoftDeleteEntitiesModule"}]},{"path":"accountSettings","loadChildren":"./pages/account-settings/account-settings.module#AccountSettingsModule,","data":{"title":"AccountSettings","level":"1"}},{"path":"createStack","loadChildren":"./pages/cluster-pages/stack-create-v2/stack-create-v2.module#StackCreateV2Module","data":{"title":"Createblueprint","level":"2"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/cluster-pages/stack-create-v2/stack-create-v2-routing.module.ts","module":"StackCreateV2RoutingModule","children":[{"path":"","component":"StackCreateV2Component","pathMatch":"full"}],"kind":"module"}],"module":"StackCreateV2Module"}]},{"path":"artifact-ci-details/:ciId","loadChildren":"./pages/artifacts-pages/ci-details/ci-details.module#CIDetailsModule,","data":{"title":"Artifacts","level":"1"}},{"path":"artifact-history/:versioningKey/ciId/:ciId","loadChildren":"./pages/artifacts-pages/artifact-history/artifact-history.module#ArtifactHistoryModule","data":{"title":"Artifacts","level":"1"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/artifacts-pages/artifact-history/artifact-history-routing.module.ts","module":"ArtifactHistoryRoutingModule","children":[{"path":"","component":"ArtifactHistoryComponent","data":{"title":"ArtifactVersionHistory","level":"2"}}],"kind":"module"}],"module":"ArtifactHistoryModule"}]},{"path":"stack/:stackName","loadChildren":"./pages/stack/stack.module#StackModule","data":{"title":"Blueprint","level":"1"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/stack/stack-routing.module.ts","module":"StackRoutingModule","children":[{"path":"","component":"StackComponent","children":[{"path":"","pathMatch":"full","loadChildren":"./../stack-overview/stack-overview.module#StackOverviewModule,"},{"path":"pipeline","data":{"title":"Deliverypipeline","level":"2"},"loadChildren":"./../../pages/delivery-pipeline-v2/delivery-pipeline-v2.module#DeliveryPipelineV2Module","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/delivery-pipeline-v2/delivery-pipeline-v2-routing.module.ts","module":"DeliveryPipelineV2RoutingModule","children":[{"path":"","component":"DeliveryPipelineV2Component"}],"kind":"module"}],"module":"DeliveryPipelineV2Module"}]},{"path":"blueprint-designer/:branchName","data":{"title":"Designer","level":"2"},"loadChildren":"./../../pages/blueprint-designer/blueprint-designer.module#BlueprintDesignerModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/blueprint-designer/blueprint-designer-routing.module.ts","module":"BlueprintDesignerRoutingModule","children":[{"path":"","component":"BlueprintDesignerComponent","children":[{"path":"resource-list","component":"DesignerResourcesComponent","data":{"title":"Loading..","level":"5","componentName":"ResourceList"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"pull-requests","component":"PullRequestsComponent","data":{"title":"Loading..","level":"5","componentName":"PullRequests"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"github-actions","component":"GithubActionsComponent","data":{"title":"Loading..","level":"5","componentName":"GithubActions"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}}]},{"path":":resourceType/:resourceName/loading","component":"TransitionLoaderComponent","data":{"title":"Loading..","level":"3"}},{"path":"environment/:clusterId","component":"BlueprintDesignerComponent","data":{"title":"Status","level":"3"}},{"path":"resource/type/:resourceType/name/:resourceName","component":"ResourceDetailsComponent","children":[{"path":"overview","component":"ResourceOverviewComponent","data":{"title":"Loading..","level":"5","componentName":"Overview"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"spec","component":"ResourceSpecComponent","data":{"title":"Loading..","level":"5","componentName":"Spec"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"overrides","component":"ResourceOverridesComponent","data":{"title":"Loading..","level":"5","componentName":"Overrides"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"pull-requests","component":"PullRequestsComponent","data":{"title":"Loading..","level":"5","componentName":"PullRequests"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}},{"path":"github-actions","component":"GithubActionsComponent","data":{"title":"Loading..","level":"5","componentName":"GithubActions"},"resolve":{"title":"ResourceDetailsTabTitleResolver"}}]}],"kind":"module"}],"module":"BlueprintDesignerModule"}]},{"path":"blueprint-designer/","data":{"title":"Designer","level":"2"},"loadChildren":"./../../pages/blueprint-designer/blueprint-designer.module#BlueprintDesignerModule","children":[{"kind":"module","children":[],"module":"BlueprintDesignerModule"}]},{"path":"artifacts","loadChildren":"./../../pages/artifacts-pages/artifacts-pages.module#ArtifactsPagesModule,","data":{"title":"Artifacts","level":"1"}},{"path":"dashboards","data":{"title":"Dashboards","level":"1"},"loadChildren":"./../../pages/dashboards/dashboards.module#DashboardsModule,"},{"path":"variables","data":{"title":"Secrets&Variables","level":"2"},"loadChildren":"./../../pages/stack-vars/stack-vars.module#StackVarsModule,"},{"path":"variables/create","data":{"title":"SecretsandVariables","level":"2"},"loadChildren":"./../../pages/stack-vars-add/stack-vars-add.module#StackVarsAddModule,"},{"path":"toasters","data":{"title":"Toastersdemo","level":"1"},"loadChildren":"./../../pages/toasters/toasters.module#ToastersModule,"}]}],"kind":"module"}],"module":"StackModule"}]},{"path":":stackName/chooseClusterCreate","loadChildren":"./pages/cluster-pages/cluster-chooser/cluster-chooser.module#ClusterChooserModule","data":{"title":"Createenvironment","level":"2"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/cluster-pages/cluster-chooser/cluster-chooser-routing.module.ts","module":"ClusterChooserRoutingModule","children":[{"path":"","component":"ClusterChooserComponent","pathMatch":"full"},{"path":"clusterCreate/aws","loadChildren":"./../cluster-create-update/cluster-create-update.module#ClusterCreateUpdateModule,","data":{"title":"AWS","level":"3","preventSanitisation":true}},{"path":"clusterCreate/azure","loadChildren":"./../cluster-create-update/cluster-create-update.module#ClusterCreateUpdateModule,","data":{"title":"Azure","level":"3","preventSanitisation":true}},{"path":"clusterCreate/gcp","loadChildren":"./../cluster-create-update/cluster-create-update.module#ClusterCreateUpdateModule,","data":{"title":"GCP","level":"3","preventSanitisation":true}},{"path":"clusterCreate/kubernetes","loadChildren":"./../cluster-create-update/cluster-create-update.module#ClusterCreateUpdateModule,","data":{"title":"Kubernetes","level":"3","preventSanitisation":true}}],"kind":"module"}],"module":"ClusterChooserModule"}]},{"path":"stack/:stackName/edit","loadChildren":"./pages/cluster-pages/stack-create-v2/stack-create-v2.module#StackCreateV2Module","data":{"title":"Editblueprint","level":"2"},"children":[{"kind":"module","children":[],"module":"StackCreateV2Module"}]},{"path":":stackName/cluster/:clusterId","loadChildren":"./pages/cluster-pages/cluster-pages.module#ClusterPagesModule,","data":{"title":"Environment","level":"1"}}]},{"path":"stack/:stackName/designer","loadChildren":"./pages/catalog-designer/designer-layout/designer-layout.module#DesignerLayoutModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/catalog-designer/designer-layout/designer-layout-routing.module.ts","module":"DesignerLayoutRoutingModule","children":[{"path":"","component":"DesignerLayoutComponent","pathMatch":"full","children":[{"path":"","component":"AddIntentComponent","data":{"title":"AddIntent"}},{"path":"intent/application","component":"AppIntentComponent","data":{"title":"ApplicationIntent"}},{"path":"intent/application/:intentName","component":"AppIntentComponent","data":{"title":"ApplicationIntent"}},{"path":"intent/:groupName/:intentName","component":"IntentIdeComponent","data":{"title":"IntentIDE"}}]}],"kind":"module"}],"module":"DesignerLayoutModule"}]},{"path":"**","redirectTo":"/home"}],"kind":"module"}]}