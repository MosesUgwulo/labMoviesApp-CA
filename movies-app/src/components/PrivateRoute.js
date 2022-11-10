import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute() {

    const Navigate = useNavigate()

    const { currentUser } = useAuth()

        useEffect(() => {
            if (!currentUser) {
                Navigate('/login', { replace: true })
            }
            else {
                Navigate('/')
                console.log('You are logged in')
            }
        }, [currentUser, Navigate])

    return (
        <Outlet />
    )

    
}
