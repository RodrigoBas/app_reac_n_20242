/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/Componentes/Adaptadores/CadastroProdutos` | `/Componentes/Adaptadores/ItemProduto` | `/Componentes/Adaptadores/ListaProdutos` | `/Componentes/Telas/cadastro` | `/Models/Produto` | `/Styles/Default` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
