import {useStore as useStoreEffector} from 'effector-react';
import React, {useCallback, useContext} from 'react';
import {useSelector as useSelectorRedux, useStore as useStoreRedux} from 'react-redux';
import {useParams} from 'react-router-dom';
import ArticleCard from '../../../components/article-card';
import Spinner from '../../../components/spinner';
import useInit from '../../../hooks/use-init';
import useTranslate from '../../../hooks/use-translate';
import {EffectorContext} from '../../../services/effector-service';

function ArticleDescription() {
  const storeRedux = useStoreRedux();
  // const store = useStore();
  const params = useParams();
  const {t} = useTranslate();
  const {$data, fetchArticleFx} = useContext(EffectorContext).article;

  const data = useStoreEffector($data);
  const pending = useStoreEffector(fetchArticleFx.pending);

  const select = useSelectorRedux(state => ({
    data: state.article.data,
    waiting: state.article.waiting
  }));

  const callbacks = {
    addToBasket: useCallback(_id => store.get('basket').addToBasket(_id), [])
  };

  useInit(async () => {
    // storeRedux.dispatch(actionsArticle.load(params.id));
    fetchArticleFx({id: params.id});
  }, [params.id]);

  return (
    <Spinner active={pending}>
      <ArticleCard article={data} onAdd={callbacks.addToBasket} t={t} />
    </Spinner>
  );
}

export default React.memo(ArticleDescription);
