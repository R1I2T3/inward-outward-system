/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as ProtectedIndexImport } from './routes/_protected/index'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AuthForgotpasswordrequestImport } from './routes/_auth/forgot_password_request'
import { Route as AuthVerifyTokenImport } from './routes/_auth/verify.$token'
import { Route as AuthResetPasswordTokenImport } from './routes/_auth/reset-password.$token'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedIndexRoute = ProtectedIndexImport.update({
  id: '/_protected/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AuthForgotpasswordrequestRoute = AuthForgotpasswordrequestImport.update({
  id: '/forgot_password_request',
  path: '/forgot_password_request',
  getParentRoute: () => AuthRoute,
} as any)

const AuthVerifyTokenRoute = AuthVerifyTokenImport.update({
  id: '/verify/$token',
  path: '/verify/$token',
  getParentRoute: () => AuthRoute,
} as any)

const AuthResetPasswordTokenRoute = AuthResetPasswordTokenImport.update({
  id: '/reset-password/$token',
  path: '/reset-password/$token',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_auth/forgot_password_request': {
      id: '/_auth/forgot_password_request'
      path: '/forgot_password_request'
      fullPath: '/forgot_password_request'
      preLoaderRoute: typeof AuthForgotpasswordrequestImport
      parentRoute: typeof AuthImport
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
    '/_protected/': {
      id: '/_protected/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedIndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth/reset-password/$token': {
      id: '/_auth/reset-password/$token'
      path: '/reset-password/$token'
      fullPath: '/reset-password/$token'
      preLoaderRoute: typeof AuthResetPasswordTokenImport
      parentRoute: typeof AuthImport
    }
    '/_auth/verify/$token': {
      id: '/_auth/verify/$token'
      path: '/verify/$token'
      fullPath: '/verify/$token'
      preLoaderRoute: typeof AuthVerifyTokenImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthForgotpasswordrequestRoute: typeof AuthForgotpasswordrequestRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
  AuthResetPasswordTokenRoute: typeof AuthResetPasswordTokenRoute
  AuthVerifyTokenRoute: typeof AuthVerifyTokenRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthForgotpasswordrequestRoute: AuthForgotpasswordrequestRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
  AuthResetPasswordTokenRoute: AuthResetPasswordTokenRoute,
  AuthVerifyTokenRoute: AuthVerifyTokenRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteWithChildren
  '/forgot_password_request': typeof AuthForgotpasswordrequestRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof ProtectedIndexRoute
  '/reset-password/$token': typeof AuthResetPasswordTokenRoute
  '/verify/$token': typeof AuthVerifyTokenRoute
}

export interface FileRoutesByTo {
  '': typeof AuthRouteWithChildren
  '/forgot_password_request': typeof AuthForgotpasswordrequestRoute
  '/login': typeof AuthLoginRoute
  '/signup': typeof AuthSignupRoute
  '/': typeof ProtectedIndexRoute
  '/reset-password/$token': typeof AuthResetPasswordTokenRoute
  '/verify/$token': typeof AuthVerifyTokenRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_auth/forgot_password_request': typeof AuthForgotpasswordrequestRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/signup': typeof AuthSignupRoute
  '/_protected/': typeof ProtectedIndexRoute
  '/_auth/reset-password/$token': typeof AuthResetPasswordTokenRoute
  '/_auth/verify/$token': typeof AuthVerifyTokenRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/forgot_password_request'
    | '/login'
    | '/signup'
    | '/'
    | '/reset-password/$token'
    | '/verify/$token'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/forgot_password_request'
    | '/login'
    | '/signup'
    | '/'
    | '/reset-password/$token'
    | '/verify/$token'
  id:
    | '__root__'
    | '/_auth'
    | '/_auth/forgot_password_request'
    | '/_auth/login'
    | '/_auth/signup'
    | '/_protected/'
    | '/_auth/reset-password/$token'
    | '/_auth/verify/$token'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren
  ProtectedIndexRoute: typeof ProtectedIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  ProtectedIndexRoute: ProtectedIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_protected/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/forgot_password_request",
        "/_auth/login",
        "/_auth/signup",
        "/_auth/reset-password/$token",
        "/_auth/verify/$token"
      ]
    },
    "/_auth/forgot_password_request": {
      "filePath": "_auth/forgot_password_request.tsx",
      "parent": "/_auth"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.tsx",
      "parent": "/_auth"
    },
    "/_protected/": {
      "filePath": "_protected/index.tsx"
    },
    "/_auth/reset-password/$token": {
      "filePath": "_auth/reset-password.$token.tsx",
      "parent": "/_auth"
    },
    "/_auth/verify/$token": {
      "filePath": "_auth/verify.$token.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
