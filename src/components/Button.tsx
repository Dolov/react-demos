import React from 'react'

class Button extends React.PureComponent {

  constructor(props, context) {
    super(props)
    console.log(context, 'context')
  }

  render() {
    console.log(this.context)
    return (
      <span>删除</span>
    )
  }
}

// const Button = ({children}, context) => {
//   console.log(context, 'context')
//   return (
//     <button style={{background: context.color}}>
//       删除
//     </button>
//   )
// }



Button.contextTypes = {
  color: String,
}

export default Button