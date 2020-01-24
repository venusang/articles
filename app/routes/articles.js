import Route from "@ember/routing/route";

export default class ArticlesRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  };

  model(params) {
    return this.store.query("article", {
      page: {
        number: params.page,
        size: params.size
      }
    });
  }
}
