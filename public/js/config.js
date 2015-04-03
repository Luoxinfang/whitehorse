/**
 * Created by roy on 15-2-5.
 */
require.config({
  baseUrl: '/js/',

  //路径配置
  paths: {
    jquery: 'lib/jquery',
    angular: 'lib/angular',
    roy: 'lib/roy'
  },
  //这个配置是你在引入依赖的时候的包名
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    }
  }

});