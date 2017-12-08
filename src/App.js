import React from 'react'
import './App.css'

function connect(Comp) {
  console.log('connect')
  return Comp
}

function* f() {
  yield 42
  yield 32
}
console.log(f())

@connect
export default class App extends React.Component {
  state = {
    name: 'hello',
  }
  async componentDidMount() {
    console.log(this)
  }
  async onClick1() {
    import('./print').then(_ => {
      _.default()
    })
    console.log(this)
    if (this.state.name == 'hello') {
      this.setState({ name: 'moon' })
    } else {
      this.setState({ name: 'hello' })
    }
    const p = new Promise(resolve => {
      resolve(12)
    })
    try {
      const res = await p
      console.log(res)
    } catch (err) {
      console.log('err')
    } finally {
      console.log('end')
      console.log({ ...this.state })
    }
  }
  onClick = () => {
    this.setState({ name: 'state this' })
  }
  render() {
    return (
      <div>
        <div className="hello">hello react😀</div>
        <button onClick={() => this.onClick1()}>{this.state.name}</button>
      </div>
    )
  }
}
