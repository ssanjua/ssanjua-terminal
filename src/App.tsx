import './App.css'
import Terminal from './components/Terminal'
import '@fontsource-variable/source-code-pro'
import '@fontsource-variable/honk'
import '@fontsource/press-start-2p'
import '@fontsource/libre-barcode-128';

const App = () => {
  console.log('klapauciuss')
  return (
    <div className="App">
      <Terminal />
    </div>
  )
}

export default App
