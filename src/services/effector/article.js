import {createEffect, createStore} from 'effector';

export const fetchArticleFx = createEffect(async ({services, id}) => {
  const json = await services.api.request({
    url: `/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`
  });
  return json.result;
});

export const $data = createStore({}).on(fetchArticleFx.doneData, (state, data) => {
  return data;
});
