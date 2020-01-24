import Controller from "@ember/controller";

export default class ArticlesController extends Controller {
  queryParams = ["page", "size"];
  page = 1;
  size = 5;
  get count() {
    const total =
      this.model.meta.pagination.last.number ||
      this.model.meta.pagination.self.number;
    if (!total) return [];
    return new Array(total + 1)
      .join("x")
      .split("")
      .map((e, i) => i + 1);
  }
}
