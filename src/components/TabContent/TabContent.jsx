import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader'

const TabContent = ({ componentPath, title }) => {
  const TabComponent = lazy(() => import(`../../${componentPath}` /* webpackChunkName: "MovieDetailsPage" */));
  return (
    <Suspense fallback={<Loader/>}>
      <TabComponent array={title.split(' ')} />
    </Suspense>
  );
};

export default TabContent;
