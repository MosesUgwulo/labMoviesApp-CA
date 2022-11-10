import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute() {

    const Navigate = useNavigate()

    const { currentUser } = useAuth()

    useEffect(() => {
        if (!currentUser) {
            Navigate('/login')
        }
    }, [currentUser, Navigate])

    
}
