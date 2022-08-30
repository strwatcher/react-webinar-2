import {useStore as useStoreEffector} from 'effector-react';
import React from 'react';
import {shallowEqual, useSelector as useSelectorRedux} from 'react-redux';
import Layout from '../../components/layout';
import Comments from '../../containers/article/comments';
import ArticleDescription from '../../containers/article/desc';
import HeadContainer from '../../containers/head';
import ToolsContainer from '../../containers/tools';
import TopContainer from '../../containers/top';
import {useEffector} from '../../hooks/use-effector';

function Article() {
  const {models} = useEffector();
  const {$data} = models.article;
  const article = useStoreEffector($data);

  const select = useSelectorRedux(
    state => ({
      article: {
        data: state.article.data
      }
    }),
    shallowEqual
  );

  return (
    <Layout>
      <TopContainer />
      <HeadContainer title={article.title || ''} />
      <ToolsContainer />
      <ArticleDescription />
      <Comments />
    </Layout>
  );
}

export default React.memo(Article);
