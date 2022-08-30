import {createEffect, createStore} from 'effector';

export function articleModel(services) {
  const fetchArticleFx = createEffect(async ({id}) => {
    const json = await services.api.request({
      url: `/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`
    });
    return json.result;
  });

  const $data = createStore({})
    .on(fetchArticleFx.doneData, (_, data) => {
      return data;
    })
    .on(fetchArticleFx.fail, (state, _) => ({}));

  return {$data, fetchArticleFx};
}
