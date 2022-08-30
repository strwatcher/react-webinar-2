import {useStore as useStoreEffector} from 'effector-react';
import React, {useContext} from 'react';
import {shallowEqual, useSelector as useSelectorRedux} from 'react-redux';
import Layout from '../../components/layout';
import Comments from '../../containers/article/comments';
import ArticleDescription from '../../containers/article/desc';
import HeadContainer from '../../containers/head';
import ToolsContainer from '../../containers/tools';
import TopContainer from '../../containers/top';
import {EffectorContext} from '../../services/effector-service';

function Article() {
  const {$data} = useContext(EffectorContext).article;
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
