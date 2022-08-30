import {useStore as useStoreEffector} from 'effector-react';
import React, {useCallback} from 'react';
import {useParams} from 'react-router-dom';
import ArticleCard from '../../../components/article-card';
import Spinner from '../../../components/spinner';
import {useEffector} from '../../../hooks/use-effector';
import useInit from '../../../hooks/use-init';
import useTranslate from '../../../hooks/use-translate';

function ArticleDescription() {
  const params = useParams();
  const {t} = useTranslate();
  const {models} = useEffector();
  const {$data, fetchArticleFx} = models.article;

  const data = useStoreEffector($data);
  const pending = useStoreEffector(fetchArticleFx.pending);

  const callbacks = {
    addToBasket: useCallback(_id => store.get('basket').addToBasket(_id), [])
  };

  useInit(async () => {
    fetchArticleFx({id: params.id});
  }, [params.id]);

  return (
    <Spinner active={pending}>
      <ArticleCard article={data} onAdd={callbacks.addToBasket} t={t} />
    </Spinner>
  );
}

export default React.memo(ArticleDescription);
