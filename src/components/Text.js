import React from 'react'
import outsize from './outsize'

class Text extends React.PureComponent {

    handleClickOutside = evt => {
		console.log('点击了组件外部')
    }
    
    render() {
        return (
            <div>
                <h1>Text</h1>
                <h2>Text</h2>
            </div>
        )
    }
}

export default outsize(Text)