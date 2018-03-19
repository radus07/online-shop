import React from 'react'

class SignIn extends React.Component {
  render () {
    return (
      <section className="signIn-content">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h4>Sign in</h4>
            <form>
              <div className="form-group row">
                <label htmlFor="emailInput" className="col-sm-3 col-form-label">Email:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="emailInput" placeholder="Email" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="passwordInput" className="col-sm-3 col-form-label">Password:</label>
                <div className="col-sm-9">
                  <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default SignIn
