import { READ_ONLY, WRITE_ONLY, READ_WRITE } from '../actions'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Policy extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  handlePolicyChange(e) {
    this.setState({ policy: e.target.value })
  }

  render() {
    const { policy, actions } = this.props

    let element = (
      <div className="pmb-list">

          <div className="pmbl-item">{policy.prefix}</div>

          <div className="pmbl-item">
            <select className="form-control" 
                    value={policy.policy} 
                    onChange={this.handlePolicyChange.bind(this)}>
              <option value={READ_ONLY}>Read Only</option>
              <option value={WRITE_ONLY}>Write Only</option>
              <option value={READ_WRITE}>Read and Write</option>
            </select>
          </div>

          <div className="pmbl-item">
            <button className="btn btn-sm btn-block btn-danger" onClick={() => actions.removePolicy(policy.bucket, policy.prefix)}>Remove</button>
          </div>

      </div>
    )

    return (
      <li className={classnames()}>
       {element}
      </li>
    )
  }
}


Policy.propTypes = {
  policy: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Policy
