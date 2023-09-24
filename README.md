# @ng-shop-workspace

### Nx CLI Commands

```shell
yarn nx g @nx/angular:host $APP_NAME

npx nx g @nx/angular:remote $APP_NAME \
--directory=apps/$APP_NAME \
--host=$HOST_NAME

yarn nx g @nx/angular:setup-tailwind $REMOTE_APP

# create library
nx g @nx/angular:lib $LIB_PATH

# create service for specific project
nx g @nx/angular:service $SERVICE_NAME --project=$PATH_TO_PROJECT
```
