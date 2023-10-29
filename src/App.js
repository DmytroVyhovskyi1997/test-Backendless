import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TabContent from './components/TabContent/TabContent';
import NotFound from './components/NotFound';
import { Container } from './components/Layout/Layout.styled';
import tabs from './tabs.json';

const App = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);

  return (
    <Container>
      <Layout tabs={sortedTabs} />
      <Routes>
        {tabs.map((tab) => {
          return <Route key={tab.id} path={`/${tab.id}`} exact element={<TabContent componentPath={tab.path} title={tab.title} />} />;
        })}
        <Route path="/" element={<Navigate to={sortedTabs[0].id} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
