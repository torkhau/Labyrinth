import { Footer } from './components/Layouts/Footer';
import { Main } from './components/Layouts/Main';
import { ConfigProvider } from './components/Providers/ConfigProvider';

function App() {
  return (
    <>
      <ConfigProvider>
        <Main />
      </ConfigProvider>
      <Footer />
    </>
  );
}

export default App;
