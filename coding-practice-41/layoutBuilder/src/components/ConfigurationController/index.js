import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-controller-container">
          <h1>Layout</h1>

          <div className="control-options">
            <div>
              <input
                type="checkbox"
                id="context"
                value={showContent}
                checked={showContent}
                onChange={onShowContent}
              />
              <label htmlFor="context">Content</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={showLeftNavbar}
                id="left-nav"
                onChange={onShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left-nav">Left Navbar Menu</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="right-nav"
                value={showRightNavbar}
                onChange={onShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right-nav">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
