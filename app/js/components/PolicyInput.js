import { READ_ONLY, WRITE_ONLY, READ_WRITE } from '../actions'
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class PolicyInput extends Component {
  constructor(props, context) {
    super(props, context)
      this.state = {
	  bucket: this.props.bucket || '',
	  prefix: '',
	  policy: WRITE_ONLY
      }
  }

  handleBucketPrefixChange(e) {
    this.setState({ prefix: e.target.value.trim() })
  }

  handlePolicyChange(e) {
    this.setState({ policy: e.target.value })
  }

  handlePolicySubmit() {
    if (this.state.prefix.length > 0) {
      alert("bucket=" + this.state.bucket + " prefix=" + this.state.prefix + " policy=" + this.state.policy)
      this.props.addPolicy(this.state.bucket, this.state.prefix, this.state.policy)
    }

    this.setState({ bucket: this.props.bucket, prefix: '', policy: READ_WRITE })
  }

  render() {
    return (
      <header className="pmb-list">

        <div className="pmbl-item">
          <input type="text" 
                 className="form-control" 
                 editable={true} 
                 defaultValue={this.state.bucket} 
                 onChange={this.handleBucketPrefixChange.bind(this)} />
        </div>

        <div className="pmbl-item">
          <select value={this.state.policy} 
                  onChange={this.handlePolicyChange.bind(this)}>
            <option value={READ_ONLY}>Read Only</option>
            <option value={WRITE_ONLY}>Write Only</option>
            <option value={READ_WRITE}>Read and Write</option>
          </select>
        </div>

        <div className="pmbl-item">
          <button className="btn btn-sm btn-block btn-primary" onClick={() => this.handlePolicySubmit()}>Add</button>
        </div>

      </header>
    )
  }
}

PolicyInput.propTypes = {
  bucket: PropTypes.string,
  addPolicy: PropTypes.func.isRequired
}

export default PolicyInput
