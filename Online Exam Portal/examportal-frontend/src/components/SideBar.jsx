import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
var classNames = require('classnames')

function SideBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const role = sessionStorage.getItem('role')
  const navclass = 'list-group-item list-group-item-action p-2 text-left'
  console.log(location.pathname)
  const logout = () => {
    dispatch({ type: 'LogOut' })
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <div className='list-group list-group-flush'>
      {role === 'Admin' ? (
        <>
          <Link
            to='/dashboard'
            className={classNames(navclass, {
              active: location.pathname == '/dashboard',
            })}
          >
            Dashboard
          </Link>
          <Link
            to='/users'
            className={classNames(navclass, {
              active: location.pathname == '/users',
            })}
          >
            Users
          </Link>
          <Link
            to='/tests'
            className={classNames(navclass, {
              active: location.pathname == '/tests',
            })}
          >
            Tests
          </Link>
          <Link
            to='/exams'
            className={classNames(navclass, {
              active: location.pathname == '/exams',
            })}
          >
            Exams
          </Link>
        </>
      ) : (
        <>
          <Link
            to='/profile'
            className={classNames(navclass, {
              active: location.pathname == '/profile',
            })}
          >
            Profile
          </Link>
          <Link
            to='/enrollment'
            className={classNames(navclass, {
              active: location.pathname == '/enrollment',
            })}
          >
            Enrollment
          </Link>
          <Link
            to='/exams'
            className={classNames(navclass, {
              active: location.pathname == '/exam',
            })}
          >
            Exams
          </Link>
        </>
      )}
      <button
        onClick={() => logout()}
        className={classNames(navclass, 'btn-link')}
      >
        Logout
      </button>
    </div>
  )
}

export default SideBar
