import React from 'react'
import onClickOutside from 'react-onclickoutside'

class Test extends React.PureComponent {

    handleClickOutside = evt => {
		console.log('You clicked outside!')
    }
    
    render() {
        return (
            <div>
                <h1>测试</h1>
                <h2>测试</h2>
            </div>
        )
    }
}

export default onClickOutside(Test)