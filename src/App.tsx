import { Switch, Route } from 'wouter'
import { TopPage } from './components/pages'
import { Header, Footer } from './components/common'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={TopPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
