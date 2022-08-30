import React from 'react';
import {shallowEqual, useSelector as useSelectorRedux} from 'react-redux';
import Layout from '../../components/layout';
import Comments from '../../containers/article/comments';
import ArticleDescription from '../../containers/article/desc';
import ToolsContainer from '../../containers/tools';
import TopContainer from '../../containers/top';

function Article() {
  // const {$data} = useEffector().article;
  // const article = useStoreEffector($data);

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
      {/* <HeadContainer title={article.title || ''} /> */}
      <ToolsContainer />
      <ArticleDescription />
      <Comments />
    </Layout>
  );
}

export default React.memo(Article);
