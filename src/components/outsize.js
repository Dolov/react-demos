import React from 'react'
import ReactDOM from 'react-dom'

export default (InnerComponent) => {
    class Wrapper extends React.PureComponent {
        instance = null

        getInstance = instance => {
            this.instance = instance
        }

        componentDidMount() {
            document.addEventListener('click', this.handleClick)
        }

        componentWillUpdate() {
            document.removeEventListener('click', this.handleClick)
        }

        handleClick = e => {
            const componentDiv = ReactDOM.findDOMNode(this.instance)
            const isContain = componentDiv.contains(e.target)
            if (!isContain) {
                this.instance.handleClickOutside()
            }
        }

        render() {
            return (
                <InnerComponent ref={this.getInstance} {...this.props} />
            )
        }
    }
    return Wrapper
}
